import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
🌎 *𝗧𝗜𝗧𝗟𝗘:* ${title}
🌍 *𝗨𝗥𝗟:* ${url}
🌞 *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡:* ${description}
  `.trim(), author, thumbnail, '', '', null, null, [
    ['SONG', `${usedPrefix}yta ${url} yes`],
    ['VIDEO', `${usedPrefix}ytv ${url} yes`]
  ], m, { asLocation: 1 })
}
handler.help = ['play', 'play2'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0


export default handler

