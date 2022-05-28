let handler = m => m
handler.before = async function (m) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^What is the result of/i.test(m.quoted.text)) return !0
    this.math = this.math ? this.math : {}
    if (!(id in this.math)) return conn.sendButton(m.chat, 'THIS MATH HAS ENDEND', author, null, [['math', '/math']], m)
    if (m.quoted.id == this.math[id][0].id) {
        let math = JSON.parse(JSON.stringify(this.math[id][1]))
        if (m.text == math.result) {
            global.db.data.users[m.sender].exp += math.bonus
            clearTimeout(this.math[id][3])
            delete this.math[id]
            conn.sendButton(m.chat, `*CORRECT ANS*\n+${math.bonus} XP`, author, null, [['again', `/math ${math.mode}`]], m)
        } else {
            if (--this.math[id][2] == 0) {
                clearTimeout(this.math[id][3])
                delete this.math[id]
                conn.sendButton(m.chat, `*Opportunity runs out!*\nAnswer: *${math.result}*`, author, null, [['again', `/math ${math.mode}`]], m)
            } else m.reply(`*Wrong answer!*\nThere still is ${this.math[id][2]} chance`)
        }
    }
    return !0
}

export default handler