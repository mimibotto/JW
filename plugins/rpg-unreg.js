import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '* #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '* #myns*'
user.registered = false
m.reply(`*SUCCESSFULLY UNREG*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + '')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
