export enum ChannelType {
    Announcements = "announcements",
    Chat = "chat",
    Calendar = "calendar",
    Forums = "forums",
    Media = "media",
    Docs = "docs",
    Voice = "voice",
    List = "list",
    Scheduling = "scheduling",
    Stream = "stream"
}

export interface APIChannel {
    id: string
    type: ChannelType
    name: string
    topic?: string
    createdAt: string
    createdBy: string
    updatedAt?: string
    serverId: string
    parentId?: string
    categoryId?: number
    groupId: string
    isPublic?: boolean
    archivedBy?: string
    archivedAt?: string
}

export interface APIChannelPayload {
    name: string
    topic?: string
    isPublic?: boolean
    type: ChannelType
    serverId?: string
    groupId?: string
    categoryId?: number
}

export interface APIUpdateChannelOptions {
    name?: string,
    topic?: string
    isPublic: boolean
}

export interface APIMentions {
    users?: Array<{
        id: string
    }>
    channels?: Array<{
        id: string
    }>
    roles?: Array<{
        id: string
    }>
    everyone?: boolean
    here?: boolean
}