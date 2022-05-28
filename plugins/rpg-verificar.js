import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*SUCCESSFULLY REGISTERED*\n\n*to unreg use the following cmd ${usedPrefix}unreg serial number*\n\n*to see your serial number use the following cmd ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `
┏┅━━┇ *INFO USER*
┃ *NAME:* ${name}
┃ *AGE:* ${age} YEARS OLD
┃ *SERIAL NUMBER:* 
┃ ${sn}
┗┅━━━━━━━━━━━━┅━`
let author = global.author
conn.sendButton(m.chat, caption, `*KEEP UR SERIAL NUMBER!*\n${author}`, [['PROFILE', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verification']
handler.tags = ['xp']
handler.command = /^(verify|register|verification)$/i
export default handler
