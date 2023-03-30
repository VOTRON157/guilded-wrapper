import { WebSocket } from "ws"
import events from './Socket'
import { EventEmitter } from "node:events"

export class Client extends EventEmitter {
    public socket: WebSocket | null
    constructor() {
        super()
        this.socket = null
    }
    public login(token: string) {
        const socket = new WebSocket('wss://www.guilded.gg/websocket/v1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        this.socket = socket
        events(socket, this)
    }
}

/* socket.on("message", (data) => {
    const json = JSON.parse(data.toString())
    switch (json.t) {
        case 'ChatMessageCreated':

            break
    }
}) */