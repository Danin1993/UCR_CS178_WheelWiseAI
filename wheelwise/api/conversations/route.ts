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
            userId,
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

        if (isGroup) {                                                      //group chats
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

        const existingConversations = await prisma.conversation.findMany({  //to prevent multiple instances of 1-on-1 conversation
            where : {
                OR: [
                    {
                        userIds: {
                            equals: [currentUser.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currentUser.id]
                        }
                    }
                ]
            }
        });

        const singleConversation = existingConversations[0];

        if (singleConversation) {
            return NextResponse.json(singleConversation);
        }

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: currentUser.id
                        },
                        {
                            id:userId
                        }
                    ]
                }
            },
            include: {
                users: true
            }
        });

        return NextResponse.json(newConversation);

    } catch (error:any) {
        return new NextResponse('Internal Error', {status: 500});
    }
}