import { WebSocket } from "ws"
import { Client } from "./Client"

const start = (socket: WebSocket, client: Client) => {
    socket.on("open", () => client.emit('ready'))
}

export default start