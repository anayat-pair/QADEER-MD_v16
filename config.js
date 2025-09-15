const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUN4dXRjcGtEaVNyMFZCSkk3WklJei9UOUkvMTN3YUd4VE9BdGRGbVdsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOURobHQwK1lweVgxRWFxK1JtSGNoWllTZmhoVE9vNXRHcW1FVVVqSFdoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQW03R0ppelZDd0lKNEI3RkM0UjNOQUNmTmVDVEtmU3pueFZlc1gyS0dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQK3psOTBhZWk4dWxxV0lIeGxGTFBwQ2RYVFpDbWwxSGxnUnVRYzJhMFgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGbmQwVXo3dnN2VFZUUTRBcllycmgxTmJ2dmhWK3VUM25ma1JaSzlwM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJNXZqYUdJYm1uc0FuSHlsb21nYUtaM3g2dS9jakVTbUVaMTdmck0rV289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU50UW5NNjlsOVRSZ0RzUFFLdmlzOWRwK09TUUorUVE5bmx5Q0haRzJsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3M3M2srek1wTjMxNG56WUFMdTZrcDRaR2VPRXBUbXZWZXNRV0hreGRubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVWQmpHeC9WTjVic0ZCeXBBK2lsSUFLL0wvSGlTWlYzRCtZTFJjbkNMTzM2NDBxd1M1UTdTSmVNSm1wQS94TEpWU3BUMFc3YnRhQ0FZY1QxaTY1S0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJGMHlYb2FTRWlSc0dYcS9uTWpYa0R5dVdGdmEzSFkzdzNGbTJVYW5hNTRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3M0MzODM3NURDMTZGQ0RGNzIxNTZGMjAyNEE3MjAzQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3OTE4MDQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0OTgwMTE0NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTEwQUVCMkJFRTBFODQzQzA3MUNCNkVGRDk5NkExOTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzkxODA0OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMTVQVDZQTlciLCJtZSI6eyJpZCI6IjkyMzQ5ODAxMTQ1MToxMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyMDk1OTg1MTg2NDE4MDoxMUBsaWQiLCJuYW1lIjoi8J2QgPCdkI3wnZCA8J2QmPCdkIDwnZCTIEtJTkfwn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQei95Y1FHRU56bW5zWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3akNNL0RwSTB6TFBWMExGek9HREljZ1hESGltcGNlQko4WGtFa2pMWXlRPSIsImFjY291bnRTaWduYXR1cmUiOiJrODAzNnhNb3pZREM1REJjN2dSZXVPK0ZhS09iZkRJSTNnR2t6bENqODl2alcrQ2RTdUZ2dGJYNHNvZEhsZnQ5bVA1QnhMTDJ4UTdrcndSdkVHUFFDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTTNJRk9rMmxRL1JmY09DU1VXTUE0dFUzc21WUVVMMllwV2NxZ2ZER3lhZWJlY2x3VElKWU56OUlnTkUzd1ZjbXRyUnRvTU8wQUdiS2dwZ1VkemtlRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0OTgwMTE0NTE6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0l3alB3NlNOTXl6MWRDeGN6aGd5SElGd3g0cHFYSGdTZkY1QkpJeTJNayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3OTE4MDQ2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmUxIn0=",
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
