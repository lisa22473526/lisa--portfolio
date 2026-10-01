const sharp = require('sharp');
const fs = require('fs');
(async()=>{
 const bg='/Users/lisa.huang/.codex/generated_images/01a0f13c-78eb-78d1-8d3c-30f690f30cd2/exec-b8f8afc3-5079-4f91-b0c6-6d3272eafabb.png';
 const desktop=await sharp('/Users/lisa.huang/Desktop/2026/Topic/Fight map.png').resize({width:980}).toBuffer();
 const desk=await sharp(desktop).extract({left:0,top:0,width:980,height:523}).toBuffer();
 const mobile=await sharp('/Users/lisa.huang/Desktop/2026/Topic/Lobby_m.png').resize({width:207}).toBuffer();
 const screen=await sharp(mobile).extract({left:0,top:0,width:207,height:425}).png().toBuffer();
 const phone=await sharp({create:{width:207,height:454,channels:4,background:'#910d13'}}).composite([{input:screen,left:0,top:29}]).png().toBuffer();
 const mask=Buffer.from('<svg width="207" height="454"><rect width="207" height="454" rx="31" fill="white"/></svg>');
 const rounded=await sharp(phone).composite([{input:mask,blend:'dest-in'}]).png().toBuffer();
 const island=Buffer.from('<svg width="207" height="454"><rect x="70" y="6" width="67" height="20" rx="10" fill="#050505"/><rect x="68" y="445" width="71" height="3" rx="1.5" fill="#111"/></svg>');
 const result=await sharp(bg).composite([{input:desk,left:190,top:133},{input:rounded,left:1238,top:411},{input:island,left:1238,top:411}]).png().toBuffer();
 fs.writeFileSync('output/imagegen/t20-tournament-hub-cover-v3.png',result);
 await sharp(result).webp({quality:95}).toFile('public/projects/t20-tournament-hub-cover-v3.webp');
})();
