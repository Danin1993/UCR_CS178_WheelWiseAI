import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/apps/libs/prismadb";

export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            userID,
            isGroup,
            members,
            name
        } = body;

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', {status: 401});
        }
        if (isGroup && (!members || members.length < 2 || !name)) {         //not enough members to create a group chat
            return new NextResponse('Invalid data', {status: 400});
        }

        if (isGroup) {
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: {value: string}) => ({  //iterates over array of members
                                id: member.value
                            })),
                            {
                                id: currentUser.id                          //separately adds "our" user separately from other users
                            }
                        ]
                    }
                },
                include: {
                    users: true                                             //populates users when we fetch the conversation
                }
            });

            return NextResponse.json(newConversation);
        }

    } catch (error:any) {
        return new NextResponse('Internal Error', {status: 500});
    }
}