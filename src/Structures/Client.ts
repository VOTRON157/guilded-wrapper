import { WebSocket } from "ws"
import events from '../Socket'
import EventEmitter from "events"
import TypedEmitter from "typed-emitter"
import ClientEvents from "./api-types/ClientEvents"
import MessageManager from "../managers/Message"
import UserManager from "../managers/Users"
import ChannelManager from "../managers/Channels"
import { ClientUser } from "./User"

interface ClientInstance {
    token: string
}

export default class Client extends (EventEmitter as new () => TypedEmitter<ClientEvents>) {
    socket?: WebSocket
    token: string
    messages: MessageManager
    users: UserManager
    channels: ChannelManager
    user?: ClientUser
    constructor(data: ClientInstance) {
        super()
        this.token = data.token
        this.messages = new MessageManager(this)
        this.users = new UserManager(this)
        this.channels = new ChannelManager()
    }
    public async login() {
        const socket = new WebSocket('wss://www.guilded.gg/websocket/v1', {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })
        this.socket = socket
        events(socket, this)
    }

    public destroy(){
        this.socket?.terminate()
    }
}