/*created by ch4mi boy 🕵
contact dev1 94703973470♻️
contact dev2 94723737086 ♻️
© Copy coder alert ⚠
*/


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs Cʜᴀᴍɪ_Mᴅ-V1*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 ᴄʜᴀᴍɪ ʙᴏʏ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 ꜱʜᴇʜᴀ ʙᴏʏ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ᴄʜᴀᴍɪɴᴅᴜ.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴄʜᴀᴍɪ*
*│  ◦* *ᴀɢᴇ➠ ꜱᴇᴡᴇɴᴛʏ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ʙᴀʟᴀɴɢᴏᴅᴀ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • CH4MI_𝖬𝖣－𝖵1 - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᴄʜᴀᴍɪ ʙᴏʏ*
*│  ◦* *▢➠ꜱʜᴇʜᴀ ʙᴏʏ*
*│  ◦* *▢➠ᴘᴀɴᴄʜɪ ɢɪʀʟ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Cʜᴀᴍɪ_Mᴅ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
