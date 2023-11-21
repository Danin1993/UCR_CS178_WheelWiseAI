"use client";

import { FullConversationType } from "@/app/types";
import React from "react"

interface ConversationListProps {
    initialItems: FullConversationType[];
}

const ConversationList : React.FC<ConversationListProps> = ({
    initialItems
}) => {
    return (
        <div>
            Conversation List!
        </div>
    )
}

export default ConversationList;