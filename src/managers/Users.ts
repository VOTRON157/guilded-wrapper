import Client from "../Structures/Client"
import Fetch from "../fetch"
import { APIUser } from "../guilded-types/User"
import User from "../Structures/User"

export default class UserManager extends Fetch {
    private client: Client
    cache = new Map<string, User>()
    constructor(client: Client) {
        super(client.token as string)
        this.client = client
    }
    public async fetch(id: string) {
        const resposne = await this.apiFetch(`/users/@me`, {
            method: "get"
        })
        const json = (await resposne.json()).user as APIUser
        return {
            User: new User(json),
            APIData: json
        }
    }
}