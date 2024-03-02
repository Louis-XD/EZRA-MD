const {
	command,
  isPrivate
} = require('../lib/');
const axios = require('axios');

const postJson = async(id, options) =>{
const res = await axios.post(`https://upper-romy-inrl-bot.koyeb.app/api/gfx/${id}`, options);
return Buffer.from(res.data.result)
}

command({
	pattern: 'gfx1 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx1 Ezra-Xd|wa Bot|zeta_');
	if(match.startsWith(1)) return;
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx1', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx2 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx2 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx2', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx3 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx3 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx3', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx4 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx4 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx4', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx5 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx5 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx5', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx6 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx6 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx6', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx7 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx7 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx7', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx8 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx8 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx8', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx9 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx9 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx9', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx10 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx10 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx10', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx11 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx11 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx11', options);
	return await message.sendMessage(res, {quoted: message},'image');
});
command({
	pattern: 'gfx12 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Example:* gfx12 Ezra-Xd|wa Bot|zeta_');
	let options = {apikey:'inrl-bot-mdaqz3ks6md7'}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx12', options);
	return await message.sendMessage(res, {quoted: message},'image');
});

// credits to inr-l and Zeta-XD

