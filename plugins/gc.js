let media = './drips.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hello 👋🏻, join the official groups to have a good time using the Bot or chatting with the family of The ZIM BOT INC*

*GROUPS:*
*1.-* https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs

`.trim(), m, media, [['ZIMBOT MENU', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
