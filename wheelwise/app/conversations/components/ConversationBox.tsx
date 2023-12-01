"use client";

import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";

interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean;
}

const ConversationBox : React.FC<ConversationBoxProps> = ({
    data,
    selected
}) => {
    const otherUser = useOtherUser(data);
    return (
        <div>
            Conversation Box
        </div>
    );
}

export default ConversationBox;