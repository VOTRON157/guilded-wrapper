import { WebSocket } from "ws"
import Client from "./Structures/Client"
import Message from "./Structures/Message"
import { APIMessage } from "./guilded-types/Message"
import { ClientUser } from "./Structures/User"

const start = (socket: WebSocket, client: Client) => {
    socket.on("open", async (data: any) => {
        client.user = new ClientUser((await client.users.fetch('@me')).APIData)
        client.emit("online", client)
    })

    socket.on("message", async (data) => {
        const json = JSON.parse(data.toString())
        switch (json.t) {
            case 'ChatMessageCreated':
                const apiMessage = json.d.message as APIMessage
                client.users.cache.set(apiMessage.createdBy, ((await client.users.fetch(apiMessage.createdBy)).User))
                // client.channels.cache.set(apiMessage.channelId, (await client.users.fetch(apiMessage.channelId)))
                client.emit("messageReceived", new Message(apiMessage, client))
                break
        }
    })
}

export default start