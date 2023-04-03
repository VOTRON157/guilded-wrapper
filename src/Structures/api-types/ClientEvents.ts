import Message from "../Message"

type ClientEvents = {
    online: (client: any) => void,
    messageReceived: (message: Message) => void
}

export default ClientEvents