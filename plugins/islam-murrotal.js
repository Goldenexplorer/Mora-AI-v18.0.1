const axios = require("axios");
const cheerio = require("cheerio");

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		// Cek apakah query diberikan
		if (!text) return m.reply(`📖 *Cara Penggunaan:*\n➤ ${usedPrefix + command} <nama surah / nomor>\n\n📌 *Contoh:*\n➤ ${usedPrefix + command} al-fatihah\n➤ ${usedPrefix + command} 1`);

		// Panggil fungsi pencarian surah
		let results = await Murottal.search(text.toLowerCase());
		if (results.length === 0) return m.reply("❌ Surah tidak ditemukan!");

		// Ambil audio pertama dari hasil pencarian
		let audioUrl = await Murottal.audio(results[0]);

		// Format pesan
		let responseText = `📖 *Murottal Surah:* _${results[0].span_name}_\n🎙️ *Qari:* Abdul Rahman Al-Sudais\n⏳ *Durasi:* ${results[0].duration}\n\n🎧 *Dengarkan:* ${audioUrl}`;

		m.reply(responseText);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat mengambil data, coba lagi nanti.");
	}
};

handler.help = ["murottal"].map(cmd => `${cmd} *<nama surah / nomor>*`);
handler.tags = ["islam"];
handler.command = ["murottal", "quran"];

module.exports = handler;

// Scraper Assabile Murottal
const Murottal = {
	async list() {
		return (await axios.get("https://www.assabile.com/ajax/loadplayer-12-9")).data.Recitation;
	},
	async search(q) {
		let list = await Murottal.list();
		return typeof q === "number"
			? [list[q - 1]]
			: list.filter((_) => _.span_name.toLowerCase().replace(/\W/g, "").includes(q.replace(/\W/g, "")));
	},
	async audio(d) {
		const mp3 = await axios.get("https://www.assabile.com/ajax/getrcita-link-" + d.href.slice(1), {
			headers: {
				authority: "www.assabile.com",
				accept: "*/*",
				"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
				referer: "https://www.assabile.com/abdul-rahman-al-sudais-12/abdul-rahman-al-sudais.htm",
				"user-agent":
					"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
				"x-requested-with": "XMLHttpRequest",
			},
			decompress: true,
		});
		return mp3.data;
	},
};