import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        // @ts-expect-error Server Compoonent
        <Sidebar>
            <div className="h-full">
                <ConversationList
                    initialItems={[conversations]}
                />
                {children}
            </div>
        </Sidebar>
    )
};