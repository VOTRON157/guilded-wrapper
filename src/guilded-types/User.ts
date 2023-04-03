export enum UserType {
    Bot = 'bot',
    User = 'user'
}

export interface APIUser {
    id: string
    type?: UserType
    name: string
    avatar?: string
    banner?: string
    createdAt: string
}

export interface APIUserSummary {
    id: string
    type?: UserType
    name: string
    avatar?: string
}