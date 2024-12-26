const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_09_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvYnYraUNTV1JLaTRHRS9mb0JKRktFMmR2R0VLaWpRYURXQTFyeEp4Rm1RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDUkw4czVxTlM4T0p4bmtVb0ZWWFdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkNWJjZDk1LTkwYzgtNGNmMi1iYjI2LTdhZGQwN2ZhZTQyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAyMjEsXG4gICAgICAyMixcbiAgICAgIDI4LFxuICAgICAgNzIsXG4gICAgICAxODIsXG4gICAgICA0MSxcbiAgICAgIDE3NyxcbiAgICAgIDYzLFxuICAgICAgMTY0LFxuICAgICAgNTEsXG4gICAgICAyMDIsXG4gICAgICA1LFxuICAgICAgNjgsXG4gICAgICAxNjEsXG4gICAgICAxODcsXG4gICAgICAxOTUsXG4gICAgICAyMzksXG4gICAgICAzMixcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAyMDEsXG4gICAgICAyNDQsXG4gICAgICAyNDksXG4gICAgICAxNjAsXG4gICAgICAxOTcsXG4gICAgICA2OCxcbiAgICAgIDE4NyxcbiAgICAgIDI1MSxcbiAgICAgIDI5LFxuICAgICAgNzksXG4gICAgICAyMjAsXG4gICAgICAyMSxcbiAgICAgIDExMCxcbiAgICAgIDIxNSxcbiAgICAgIDQ3LFxuICAgICAgMjAzLFxuICAgICAgMjIsXG4gICAgICAyLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzS0VLUEdHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NTA5MTIxNzA0OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR0VOSVVTXCIsXG4gICAgXCJsaWRcIjogXCIyOTgxNTc4MDQ2MjYzNDo2MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM1VuYVVHRU5TM3Ryc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdGNGM4bkdReVEraG9JSGthK1dnK3UwbkhhTncxeVVlZ2l5Q2dPd2dIV0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM1NMWGZnYVFNT1Fqd203dEZmdkxSOGk1NzRwbmFLSU1EMlAvdy85RTRsNmJLU2UrS2ttTGlWSzd3c3RteG9nYWxuQ0Z2WG1yUXJ3UkhiNW41SzQyQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK3l3YVhVZXd6YkhENDNqQ2dWSkFycDNGM1A0bnZzOTNkdGVhd3JoVE0rdk9UUnNIRjlNZ2l4NjlGcElmZ1ZyY2lqT0V1RnkzaUR0OFB3MnN0Z3dTQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTA5MTIxNzA0OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTIzNjU2N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
