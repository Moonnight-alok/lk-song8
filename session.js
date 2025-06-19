//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURtRVlyS1Arb1ZMRDB4UE95SzZrbk0zYUNnSkRqYjQwL1pqWVhPTWtHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3k1dFRZbEtlV09xdW13Zzhkd0VXcnVkYzFVcmpmU21QdEp2U3VjWVYzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRU5GamlmSmFQeFM2RzljckJwQjZ3Zm5Pc1Yxcm56SFRWaDVCUEVtZkVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MU1yTDVmM2JaWkltWWZERXdjbTRmZFB5bWx4Sjh4YVZERURQQk03MHlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVKaGNmbTV0TEs3U2dUUFdmWHFUUTAzalVtVlp6LytLSk5KT1l5T3BRVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJWbUNRYUl5NTVuemZRYnJNY2h4aGVReFF5WXRJR2lJdUpvUHIvdjJ4U1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VrbGxNUm9zK3NLZkoyQ0hyejJCdWtCR2tVbng4ZWlJakI4T1JvMlgxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjdCeS9sa2piS0x1L3dnS1VHZXRuWExDWnh5ZXVzR1hkZmxHUHhvaDRsRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNocTluMUsyL1FuNHZ3NWVVMjBwMWZyN1hKbGh3SVF2THB5dVNpdUhObkdna1cwSTVVTFFwMmwybzNJT3o4UTV4SEpPdW4zbVRWTG54cTE5WExsdERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6InpMcWtOZiszVitzRkUzZjNWR2RGb0FPTmVzNENlMms5MWpOOEthK2lXNjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9KSTlqX1BoVC1LOTVaM09rSEQ2dnciLCJwaG9uZUlkIjoiMDhiMjVjNDEtMTU1OC00OWFhLThiYTAtNTEwYTQ5N2MyNmJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims2VG52N0ViQXc5NlpLMFlPYzlPWmsybldWTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWdzFQYzFYQ0NmUm40N3hiekRzMWRzQVNUcXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0xKNTEyQTYiLCJtZSI6eyJpZCI6Ijk0NzYwNDk3Mzc1OjExQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjYzODYxOTM2NjE5NzE2OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUMxM2ZNRUVPMmx6c0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY0NuYmZ5bFBiNUxKUzdrUWRCUGRGbTVZSzZqdXIxL0Y5SFNYNjZVNlpVZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSWNad2ZUMEJNTHBNdWhjRWVMMS9QcTgzS2JiMWE2eExiTmdEYWZLY2doKzZ5SHEzZ0dZK1RpNjJYeVkxZW9BdklOOFZmMmJWV0xiMnpSKzlvcEt3RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJrU3BCTnd6TlJuZ0ZNYm5JTjdBN0kwTzFHMExZeUZwVmtIcFdRWGh4Y2dUS2hJTFFBQkI4SEVPV0dOWkhzOFljQVl2WlR3Tm03RXFkYW1yK1Z2UkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA0OTczNzU6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEFwMjM4cFQyK1N5VXU1RUhRVDNSWnVXQ3VvN3E5ZnhmUjBsK3VsT21WSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUN3PT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzA3NTc4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmlZIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94772703038",
  PASSWORD: 
    process.env.PASSWORD || "2008Mihi",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
