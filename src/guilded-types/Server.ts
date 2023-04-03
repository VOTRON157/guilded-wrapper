enum ServerType {
    Team = "team",
    Organization = "organization",
    Community = "community",
    Clan = "clan",
    Guild = "guild",
    Friends = "friends",
    Streamin = "streamin",
    Other = "other"
}

export interface APIServer {
    id: string
    ownerId: string
    type?: ServerType
    name: string
    url?: string
    about?: string
    avatar?: string
    banner?: string
    timezone?: string
    isVerified?: boolean
    defaultChannelId?: string
    createdAt: string

}