import { Client } from "./Client";

const client = new Client()

client.on('ready', () => {
    console.log('Bot online!')
})

client.login('token do seu bot')