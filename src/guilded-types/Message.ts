import { APIMentions } from "./Channel"

export enum MessageType {
    Default = "default",
    System = "system",
  }

export interface APIMessage {
    id: string
    type: MessageType
    serverId?: string
    channelId: string
    content?: string
    embeds?: APIEmbed[]
    replyMessageIds?: string[]
    isPrivate?: boolean
    isSilent?: boolean
    mentions?: APIMentions
    createdAt: string
    createdBy: string
    createdByWebhookId?: string
    updatedAt?: string
}


export type embedFooter = {
    icon_url?: string
    text: string
}

export type embedField = {
    name: string
    value: string
    inline?: boolean
}

export type embedAuthor = {
    name?: string
    url?: string
    icon_url?: string
}

export type embedThumbail = {
    url?: string
}

export type embedImage = {
    url?: string
}

export interface APIEmbed {
    title?: string
    description?: string
    url?: string
    color?: number
    footer?: embedFooter
    timestamp?: string
    thumbnail?: embedThumbail
    image?: embedImage
    author?: embedAuthor
    fields?: embedField[]
}

export interface APIMessagePayload {
    isPrivate?: boolean
    isSilent?: boolean
    replyMessageIds?: string[]
    content?: string
    embeds?: APIEmbed[]
}

export interface APIMessageGetOptions {
    before?: Date;
    after?: Date;
    limit?: number;
    includePrivate?: boolean;
}

export interface APIUpdateMessageOptions {
    content?: string
    embeds?: APIEmbed[]
}