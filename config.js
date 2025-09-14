const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QADEER-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUd2OHpwT0JrcEUrNUpuYVlXZHdnYUV6MXVVZnZGKzRCbzNlNlIzVGJsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTd2cXZNVnRQNndzY0IvaGcycHBPd1dOWWlnNFZvWU9DZ3lPUGlOeHlCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RVp1R1Rjd01uTys0RDFlaHpsMGpzN2JjcWViMlk1dytFU2Fid2FMcEhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvd3doSEV0TzdReFBCRTRRc3FTMUZhZU0rZVgxTUNtcGV1dWFNTWZyZGdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGVUJ6TGtIRGFmWVRHZnVBYzk4eW1BMENUY0VPMWJHM3hQQ0lLSE9qSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN3MThQTVQ3cm9lK2FUazZwMXNEM0NhWGpuNHl0TGJZNHY5MnVrdVg3R3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lEMzlPdWZnOVZKNFE5QWU1emRKOU1YRFBVWm9vTFh6d2ZZMVFWcEUzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVFwUG1RM2R3TkI5VllsOW9kYjBRTkFrU2h3aVpWK2hkbnU1TGxhRWxqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDUlVlcGV5enh1blZuanNPRGEzOThVWUcrejcxUWwrUGowNTEybmFoeFlkOEFGVkdhZmpFTFNwOUJWejVoVWwzMXpUdDhOeVAxQm83NTZZL2Y0a0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6InFaSUJBSXdTQWk1WG82bUdjTVFvZEtXd3JlVlJ1ZVRSV0ZRWXBPVVg2TzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDk4MDExNDUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNEREQ4ODZGRDg5NDUzRjAyNjAyMTg5RjU1Q0Y2QzI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc4ODIxMzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRUI3RTUyQzkzNzM2QURGOEVCMDExRkEzMEM5Njk0MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3ODgyMTM1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKREJMTUhYNCIsIm1lIjp7ImlkIjoiOTIzNDk4MDExNDUxOjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMjA5NTk4NTE4NjQxODA6OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1ByL3ljUUdFSkRPbk1ZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndqQ00vRHBJMHpMUFYwTEZ6T0dESWNnWERIaW1wY2VCSjhYa0VrakxZeVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpiUlJmT0piMjEwWTVuRW1nVFBPa1daTCszQW5ETHNNZ1FmZXVIcFovVkJBK29DVm0zRS9oMTU0b1N0aTFXaFc5ZDgzdzYza3J6bm1VdjNNU1NMZUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwcU9rZXljOVR0NDdLVmM1d0JKOFA0S2hidlRPV1NNUUxnZXZLM2kwcVh0WXkwTm9MUU91MlBXQmpSNmZoVC9mQU42Z3hmbEpZRWZ2blY5L0wraXdCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5ODAxMTQ1MTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNJd2pQdzZTTk15ejFkQ3hjemhneUhJRnd4NHBxWEhnU2ZGNUJKSXkyTWsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Nzg4MjEzMiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJKdyJ9",
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
