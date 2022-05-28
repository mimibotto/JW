import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*USER!!!*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
conn.sendFile(m.chat, res, 'error.jpg', `*DONE ${text}*`, m, false)
}
handler.help = ['tiktokfoto'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto)$/i
export default handler
