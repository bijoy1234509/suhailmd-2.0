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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_56_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFlanRMREJBWlB0TmxiYWJEdmt1S0JDTk5uVUVBT2tZZElYNzZXK01jTXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRHSV92ZkI5UndXZ2JTNnNfUVh3TXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTViZjhmYmQtZDdiYy00OTBiLTgxZGQtOGNmZTk5NTVmMGM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMzgsXG4gICAgICA5MCxcbiAgICAgIDE4MyxcbiAgICAgIDIzOCxcbiAgICAgIDE0MCxcbiAgICAgIDIyLFxuICAgICAgODEsXG4gICAgICAwLFxuICAgICAgODIsXG4gICAgICA2NSxcbiAgICAgIDEwMCxcbiAgICAgIDEwMSxcbiAgICAgIDM0LFxuICAgICAgMTc1LFxuICAgICAgNyxcbiAgICAgIDEyOSxcbiAgICAgIDEyMyxcbiAgICAgIDM3LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTM4LFxuICAgICAgMTIxLFxuICAgICAgMjE3LFxuICAgICAgMzYsXG4gICAgICAyNTUsXG4gICAgICAyNDcsXG4gICAgICAxMTIsXG4gICAgICAxNixcbiAgICAgIDExNyxcbiAgICAgIDE1OCxcbiAgICAgIDE1LFxuICAgICAgMTMsXG4gICAgICA4MyxcbiAgICAgIDQ5LFxuICAgICAgMzcsXG4gICAgICAyMzQsXG4gICAgICAyMjcsXG4gICAgICAyMyxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktDOTNDTUtBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg1MDkxMjE3MDQ6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHRU5JVVNcIixcbiAgICBcImxpZFwiOiBcIjI5ODE1NzgwNDYyNjM0OjYxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056VW5hVUdFT3ZEczdzR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0Y0YzhuR1F5UStob0lIa2ErV2crdTBuSGFOdzF5VWVnaXlDZ093Z0hXRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFbW1xTFJXaDU5a0V5dmcvU3N0Ly83OVJGancwSklvbWQxdC9xa25ybjFHU1BCU01TaVJ5TmlXOTNNVExEZS9PTVRTeStMenZFdDh6QVZHV0xhb2FCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjcGRHZTJ1ZmJ6eE5rUFZyNW5UWnRNWi9jV05GaDQ4bmRGSXJOMExFdDFXWkk3T25ORnRiMWV4TjFQbmpjVzJjMWVNVDF0dlljczZKY3VTZkFISnNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg1MDkxMjE3MDQ6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MTg4OTc1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
