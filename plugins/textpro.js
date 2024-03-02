const {
	command,
	isPrivate,
	getJson
} = require('../lib/');
const zeta = "https://upper-romy-inrl-bot.koyeb.app/api/textpro/"
const api = "sT6dn78"
const X = require("../config");
const { CAPTION } = require("../config");

command({
	pattern: 'phub ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: phub ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}pornhub${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'dragon ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: dragon ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}dragon${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'blood ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: blood ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}blood${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: '1917 ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: 1917 ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}1917${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'marvel ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: marvel ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}marvel${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'spooky ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: spooky ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}spooky${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'toxic ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: toxic ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}toxic${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'avengers ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: avengers ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}avengers${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'gameover ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: gameover ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}gameover${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'window ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: window ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}window${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'summer ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: summer ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}summer${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'forework ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: forework ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}forework${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'forework ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: forework ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}forework${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'naruto ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: naruto ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}naruto${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: '3dbox ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: 3dbox ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}3dbox${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'batman ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: batman ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}batman${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});

command({
	pattern: 'dropwater ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply('_*Need Text*_\n_*Example: dropwater ezra|Xd*_');
	let txt = `?text=${match.split(/[|]/)[0]}|${match.split(/[|]/)[1]}&apikey=${api}`
	var {result} = await getJson(`${zeta}dropwater${txt}`)
await message.sendFromUrl(result, {caption: (X.CAPTION)});
});
