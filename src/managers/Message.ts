import Client from "../Structures/Client"
import Message from "../Structures/Message";
import Fetch from "../fetch";
import { APIMessagePayload, APIUpdateMessageOptions } from "../guilded-types/Message";

// https://open.spotify.com/track/1LxyIcKnXGEGJulPYhTIVo?si=99c2c9b25c0648bd

export default class MessageManager extends Fetch {
    private client: Client
    constructor(client: Client) {
        super(client.token as string)
        this.client = client
    }

    public async fetch(messageId: string, channelId: string){
        const response = await this.apiFetch(`channels/${channelId}/messages/${messageId}`, {
            method: 'get'
        })
        if(!response.ok) return false
        else {
            return new Message((await response.json()).message, this.client)
        } 
    }

    public async edit(messageId: string, channelId: string, payload: APIUpdateMessageOptions){
        const response = await this.apiFetch(`channels/${channelId}/messages/${messageId}`, {
            method: 'put',
            body: JSON.stringify(payload)
        })
    }

    public async delete(messageId: string, channelId: string): Promise<boolean> {
        const response = await this.apiFetch(`channels/${channelId}/messages/${messageId}`, {
            method: 'delete'
        })
        if(response.ok) return true
        else return false
    }

    public async send(channelId: string, data: APIMessagePayload): Promise<void> {
        await this.apiFetch(`channels/${channelId}/messages`, {
            method: 'post',
            body: JSON.stringify(data)
        })
    }
}