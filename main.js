const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
        
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
client.on("messageCreate", message => {
  if (message.content.toLowerCase() === ('pp')){

    message.channel.send(message.author.displayAvatarURL())
   } 
    if (message.content.toLocaleLowerCase().includes("ip")){    
message.reply(`**SİTE**: azecraftmc.com  \n **DC**: discord.gg/azecraft \n **Server address:** play.azecraftmc.com \n **PORT**: 19132 \n **MCPE**(Bedrock): 1.19.0 - 1.19.21 \n **JAVA**: 1.13 - 1.19.1`);
    }
    if (message.content.toLocaleLowerCase().includes("aypi")){    
      message.reply(`**SİTE**: azecraftmc.com  \n **DC**: discord.gg/azecraft \n **Server address:** play.azecraftmc.com \n **PORT**: 19132 \n **MCPE**(Bedrock): 1.19.0 - 1.19.21 \n **JAVA**: 1.13 - 1.19.1`);
          }
if (message.content.toLocaleLowerCase() === "salam") {
    if (message.member.roles.cache.has("1021891280571211888")) {
             message.reply("Salam xaam.");
             message.react('🇦')
             .then(() => message.react('🇸'));
         }
    else if (message.author.id === "988862729676804176"){
         message.reply("hane menim devilim?");
        }
         else if (message.member.roles.cache.has("989953388160614491")) {
             message.reply("Xoş gəldin paşam");
          
           }
          else if (message.member.roles.cache.has("1012020630582984745")) {
             message.reply("Salam Abi");
             message.react('🇦')
             .then(() => message.react('🇸'));
         }
         else if (message.member.roles.cache.has("985503851090174021")) {
             message.reply("Emr edin sahibim...");
          
           }
           
         else {
             message.reply("Aleykum Salam");
         }
      }
    

if (message.content.toLocaleLowerCase() === "sa") {
         if (message.member.roles.cache.has("1021891280571211888")) {
                  message.reply("Salam xaam.");
                  message.react('🇦')
                  .then(() => message.react('🇸'));
              } 
             
              else if (message.member.roles.cache.has("989953388160614491")) {
                 message.reply("Xoş gəldin paşam");
              
               }
           else if (message.member.roles.cache.has("1012020630582984745")) {
             message.reply("Salam Abi.");
             message.react('🇦')
             .then(() => message.react('🇸'));
           }

           else if (message.member.roles.cache.has("985503851090174021")) {
             message.reply("Emr edin sahibim...");
          
           }
          

           else {
             message.reply("Aleykum Salam");
         }


         }
         try{
//kick ban
const parsedString=message.content.split(' ');

if (parsedString[0]=='!tulla'){
  if (parsedString[1]){
    const user = message.mentions.users.first();
    if (user){
      const member = message.guild.members.cache.get(user.id).kick({ reason: 'Malliq eledi'}).then(()=>{
        message.reply(user.tag+" atildi")
       }).catch((error)=>{
          message.reply('xeta!');
          console.log(error);
        })
      if(!member){
        message.reply('tapilmadi')
        return;
      }
     
    }
  }
  else{
    message.reply('Tullanacaq adam secilmeyib...')
  }
}
if (parsedString[0]=='!ban'){
  if (parsedString[1]){
    const user = message.mentions.users.first();
    if (user){
      const member = message.guild.members.cache.get(user.id).ban({ day:1, reason: 'Malliq eledi'}).then(()=>{
        message.reply(user.tag+" banlandi")
       }).catch((error)=>{
          message.reply('xeta!');
          console.log(error);
        })
      if(!member){
        message.reply('tapilmadi')
        return;
      }
     
    }
  }
  else{
    message.reply('Tullanacaq adam secilmeyib...')
  }
}
//timeout 

if (parsedString[0]=='!sus'){
  if (parsedString[1]){
    const user = message.mentions.users.first();
    if (user){
      const member = message.guild.members.cache.get(user.id).timeout( 360000,  'Malliq eledi').then(()=>{
        message.reply(user.tag+" susduruldu...")
       }).catch((error)=>{
          message.reply('xeta!');
          console.log(error);
        })
      if(!member){
        message.reply('tapilmadi')
        return;
      }
     
    }
  }
  else{
    message.reply('Tullanacaq adam secilmeyib...')
  }

}

const channelId = '1014242625068478537';
client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.get(channelId);
    if (!channel) return;

    message.channel.send( `Salam ay <@${member.id}> serverimizə xoş gəldin! `);
    require('events').EventEmitter.defaultMaxListeners = Infinity; 

});
client.on("guildMemberAdd", async (member) => {
  const channel2 = member.guild.channels.cache.get("1020039337456439326");
    if (!channel2) return;

    message.channel.send( `Salam ay <@${member.id}> serverimizə xoş gəldin! `);
    require('events').EventEmitter.defaultMaxListeners = Infinity; 
});
         }catch(e){
          console.log(e);
         }
         //gelen geden



        });
        


      


client.login(client.config.app.token);