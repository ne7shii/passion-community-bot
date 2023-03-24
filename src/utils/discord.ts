import { Client } from 'discord.js'
import { env } from '../env/server.mjs'





const fetchWhiteListCount = async (): Promise<number> => {
    try {

        const discordClient = new Client({ intents: [] })
        discordClient.login(env.DISCORD_BOT_TOKEN)
        const guild = await discordClient.guilds.fetch(env.DISCORD_SERVER_ID)
        // console.log('id',id)
        // const member = await guild?.members.fetch(id)
        const count = guild.roles.cache.get(env.DISCORD_WHITELIST_ROLE_ID)?.members.size
        console.log('count', count)
        return count === undefined ? -1 : count
    }
    catch (err) {
        console.log('in catch', err)
        return -1
    }
}

const getAllRoles = async (): Promise<any> => {
    try {
        const discordClient = new Client({ intents: [] })
        discordClient.login(env.DISCORD_BOT_TOKEN)
        const guild = await discordClient.guilds.fetch(env.DISCORD_SERVER_ID)
        // console.log('id',id)
        // const member = await guild?.members.fetch(id)
        const roles = guild.roles.cache.map(role => { return { name: role.name, id: role.id } })
        // const count = guild.roles.cache.get(env.DISCORD_WHITELIST_ROLE_ID)?.members.size
        return roles
    }
    catch (err) {
        console.log('in catch', err)
        return []
    }
}
// export default discordClient
export { fetchWhiteListCount, getAllRoles }