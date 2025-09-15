const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QADEER-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lxTFhiYTB6TkFYR3d3UFV2U1NVb0w0RkhReEliRktNdzNJSUt3RGQxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGpGbFBMSWpPT3djVlBRbnpPcTRtZjRYNU5xSlV0UkpUZlp1K2tGSFJnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRmRqN21PU3hETExlU1h2c3ltRnR3TTVGcFBHYnVsSWZyS0lyREx4ODNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudDJRemF1aHVrWkhDOGpkUFdrRUNlVWY4WFNhck8zMzhHWVNuTmdZdWxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JeWlYUjZOTzJwdmwyOHpGazdnZ2JFbThvZjVwSEg2dmRqbVEvRlV0MVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl2MXlYWmhYVmRnV3Y3Vm5vMEsrWThFcEhKYWU1eWRxUkhJZG1SY1RFQ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU96SHVhbnYrdmdGQWR6TnBndE9lZWJROGpSVzhXZWFnTWxRQlNTU25FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFVhMkc3OTU3QzgrZmhQSGFtMWNDb0xxaUhHcm9CblhUMVc5dGdTZlVtYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9NV3N3NUdKd2RkVGQrRk5wTHRmQW9yY09xeElxQ2hpbVI5MlZic28wQTBSYzVLcDU4QXE3WUg1dWhFbUgrQm9mRzRlTGRGM014RmRJMTQvNXlId0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiI1Z3FqNGFQSHlSdGRoZ2dzUStqd0NvWmZRWkdrL3BDUHd4alFBWU9WMm9zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3OEE1Mzc5OUQwODZBOThGMTBEN0Y1RTAzQ0U0RURFRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3OTE3NTYyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0OTgwMTE0NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTVEMDIzNjc3RDUyQTEyNDkyRTAzMUFEOTE2NjU4MTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzkxNzU2Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWEszNjQzUFAiLCJtZSI6eyJpZCI6IjkyMzQ5ODAxMTQ1MToxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyMDk1OTg1MTg2NDE4MDoxMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B2L3ljUUdFUFBpbnNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndqQ00vRHBJMHpMUFYwTEZ6T0dESWNnWERIaW1wY2VCSjhYa0VrakxZeVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpzSkJSYWkrMC91MVRXbkhJWHVRTmpYSW54WkQ3N3FTODRZM2pDNmMvRGMrSUxWMy96aW9sdTh2WStoU3Y5THJnaW5JbU9kSVMrWFdXN1BoWE1iNUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQQWdmWGI2RHcwUGYxcEttK3J1L3VnMmJycGN5R3BrbmtwKzlNbkJ0a3FCa2w4bG95cnN3QUNrbng4dGtkNS8zUWthQWhBUkU4WjRRRXVyWUZsZmNDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5ODAxMTQ1MToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSXdqUHc2U05NeXoxZEN4Y3poZ3lISUZ3eDRwcVhIZ1NmRjVCSkl5Mk1rIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc5MTc1NTksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLeVoifQ==",
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
