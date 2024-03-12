import { Do } from '@/components'
import { revalidatePath } from 'next/cache'

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  try {
    const Chat = await Do.Chat.pushChatApi({
      chatId: body.chatId,
      content: body.content,
      fromLead: true,
      threadId: body.threadId,
    })

    if (!Chat.data) throw new Error(Chat.message)

    return NextResponse.json(Chat.message, { status: 200 })
  } catch (error) {
    return NextResponse.json(error instanceof Error ? error.message : 'Internal Server Error', {
      status: 407,
    })
  }
}