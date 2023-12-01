import prisma from "@/app/libs/prismadb";
import getsession from "./getSession";

const getUsers = async () => {
    const session = await getsession();

    if(!session?.user?.emmail){
        return [];
    }

    try{

        const users = await prisma.user.findMany({
            orderby: {
                createdAt: "desc",
            },
            where: {
                NOT: {
                    email: session.user.email
                }
            }
        });

        return users;
    } catch (erro: any){
        return [];
    }
};