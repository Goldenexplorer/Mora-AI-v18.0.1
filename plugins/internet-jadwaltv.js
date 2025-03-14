const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		if (!text) {
			return m.reply(`📺 *Cara Penggunaan:* ${usedPrefix + command} <nama_channel>\n\n📌 *Contoh:*\n${usedPrefix + command} MNCTV`);
		}

		let res = await getJadwalTV(text);
		if (!res.result.length) {
			return m.reply(`⚠️ Maaf, tidak ditemukan jadwal untuk *${text}*.`);
		}

		let txt = `📺 *Jadwal TV untuk ${res.channel}*\n\n`;
		res.result.forEach(v => {
			txt += `🕒 ${v.jam.replace("WIB", " WIB")} — ${v.acara}\n`;
		});

		m.reply(txt);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat mengambil jadwal TV. Silakan coba lagi nanti.");
	}
};

handler.help = ["jadwaltv"].map(cmd => `${cmd} *[info jadwal TV]*`);
handler.tags = ["internet"];
handler.command = ["jadwaltv"];

module.exports = handler;

async function getJadwalTV(channelName) {
	try {
		let list = JSON.parse(fs.readFileSync("./src/jadwaltv.json", "utf-8"));
		let data = list.find(v => new RegExp(channelName, "gi").test(v.channel));

		if (!data) {
			let availableChannels = list.map(v => v.channel).sort().join("\n");
			throw `📡 *Daftar Channel yang Tersedia:*\n\n${availableChannels}`;
		}

		let url = `https://www.jadwaltv.net/${data.isPay ? "jadwal-pay-tv/" : ""}${data.value}`;
		let html = (await axios.get(url)).data;
		let $ = cheerio.load(html);

		let result = [];
		$("div > table.table").find("tbody > tr").slice(1).each(function () {
			let jam = $(this).find("td").eq(0).text().trim();
			let acara = $(this).find("td").eq(1).text().trim();
			if (!/Jadwal TV|Acara/gi.test(acara)) {
				result.push({ jam, acara });
			}
		});

		return { channel: data.channel.toUpperCase(), result };
	} catch (error) {
		console.error("Error fetching TV schedule:", error);
		return { channel: channelName.toUpperCase(), result: [] };
	}
}