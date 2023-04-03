import { APIUser, APIUserSummary } from "./User"

export interface APIMember {
    user: APIUser
    roleIds: number[]
    nickname?: string
    joinedAt: string
    isOwner?: boolean
}

export interface APIMemberSumary {
    user: APIUserSummary
    roleIds: number[]
}

export interface APIUpdateMemberNickNameOptions {
    nickname: string
}

export interface APIMemberBan {
    user: APIUserSummary
    reason?: string
    createdBy: string
    createdAt: string
}

export interface APICreateServerBanOptions {
    reason?: string
}
