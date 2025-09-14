const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pIcUtacFh0S3M2N3hDZXMxWU1Zd2hXRm9iblZkTHY1UTlSOUUwUEozaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEJBVDZBWUlDY0dkazQ4V3FhdXpjTW42TjJsaDZkTVR2Rk55NTRvU2JYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUGloZVRXakIzZ0h1M1ZXN29tcFBaQ3d3MTlUVk9xQmZiYjQ5Ti9GZkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzaXN0UkdTeWo3MFp4cHJUTVZBcHdadHZHaGRqejhGZVV5MUxZei94d3lNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLYURjbEdCUGcveTZWTlU5enE0cTV3dXB4SE9mQ0hjcU9LTWxOc2FJMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV0NzdaQXIyT3pHbkpic292S0U2TnhnYi9USFpxWWJDMEZLRENPc0RnRzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09aRkh1WG5EVEZ2RVRVZks1VmRWNmV2a2dyV3l2dmtUdnl3SGFYTkVYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnBvWGZJZHhPUHZYVCs4WlFid3IrTGJZNWk0dGdIb21UT05mNDkrMGFEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGK3lYUHdyYjVJdUlzVmhhZ2hsNGxieFBSSHExU2p2cVQ0anQyQmVpaHBncUQ2dVRKV2NrODFSaWhBdzhnaHg5a0gwSHV4QzlyZGNCZkoxdGcwdUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiI3TFlNWDNzTXQyL1BOY0gvendnenNWekx2ejdwci8wZ0dja1pPbVhUMERJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMDAwNTI1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTUyRThCMkRENTFDODUwQzVBMTlBQ0MzNjIwNkE5NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3ODQ5NjY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDAwMDUyNTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxMkNBMkM3OEZBMUVEMkRGMkI2ODQwNzVBNEI0ODIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Nzg0OTY2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUUpXU1JGNk0iLCJtZSI6eyJpZCI6IjkyMzMwMDAwNTI1MzoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJxYWRlZXIiLCJsaWQiOiIyMjU0MDg5NDM0MDMxOTU6MjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdmZodWdHRUxyUW1zWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxSXJ5Tks4elVYYmlJUDZSSUhBOVp4SmlMaUxuRGhla3ZpS25FcWFvbHlRPSIsImFjY291bnRTaWduYXR1cmUiOiJEYUI2cmp5Q3EwVUdqRGNhcWxhUVhUdHBWbVJ6Q3JHNkE4WmxzYkpuamNzWFUvakNPemhKZ3Y1d0FTS2VxTTlaRzhhSDFnM3g4U0RSWXhxcWVyOEFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibS9tRzQ3b0hmMnJ6bUVZY2JIZitsOW40ZUZWejVhZC9Wc3M4WEVwMHh6QVl4bWhIRFNNVzUzQWxiUmJGdmlMeWFMK0pnNWdsK2ludEkyVmNiME9LRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDAwMDUyNTM6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFNLOGpTdk0xRjI0aUQra1NCd1BXY1NZaTRpNXc0WHBMNGlweEttcUpjayJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3ODQ5NjYyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnNYIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qbdwqt.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923300005253",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16 Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16 Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qbdwqt.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923300005253",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
