import Client from "./Structures/Client";
import Message from "./Structures/Message";

const client = new Client({
    token: 'u bot token here'
})


client.on("online", (client: Client) => {
    console.log(`Logged in ${client.user?.username}`)
})

client.on('messageReceived', (message: Message) => {
    if(message.content === "!ping") {
        if(message.author.avatar){
            message.reply({
                embeds: [{
                    title: `📸 Avatar de ${message.author.username}`,
                    description: `${message.author.username}`,
                    image: {
                        url: message.author.avatar
                    } 
                }]
            })
        } else message.reply('Você não tem avatar :(')
    } else if(message.content === "!edit") message.reply(`${message.editable}`)
})

client.login()