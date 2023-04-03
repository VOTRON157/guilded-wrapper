import Client from "./Client";
import User from "./User";
import { APIMessage, APIMessagePayload, APIUpdateMessageOptions } from "../guilded-types/Message";

/* falta: 
    Message.embeds
    Message.replyedMessages
    Message.guild
*/

export default class Message {
    constructor(
        readonly data: APIMessage,
        readonly client: Client
    ) {

    }

    async edit(payload: APIUpdateMessageOptions) {
        await this.client.messages.edit(this.data.id, this.data.channelId, payload)
    }

    async delete() {
        await this.client.messages.delete(this.data.id, this.data.channelId)
        return this
    }

    async reply(payload: APIMessagePayload | string) {
        const messagesIds = this.data.replyMessageIds || []
        messagesIds.push(this.data.id)
        if (typeof payload === "string") {
            await this.client.messages.send(this.data.channelId, {
                content: payload
            })
        } else {
            await this.client.messages.send(this.data.channelId, { ...payload, replyMessageIds: messagesIds as string[] })
        }
    }

    /* get server() {
        return this.client.serves.cache.get(this.data.serverId)
    } */

    get editable(){
        return this.data.createdBy == this.client.user?.id
    }

    get author() {
        return this.client.users.cache.get(this.data.createdBy) as User
    }

    get createdAt() {
        return new Date(this.data.createdAt)
    }

    get isSilent() {
        return this.data.isPrivate
    }

    get isPrivate() {
        return this.data.isPrivate
    }

    get id() {
        return this.data.id
    }
    get type() {
        return this.data.type
    }

    get channel() {
        return this.client.channels.cache.get(this.data.channelId)
    }

    get content() {
        return this.data.content
    }
}