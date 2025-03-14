const axios = require("axios");

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		// Cek apakah URL diberikan
		if (!text) return m.reply(`📥 *Cara Penggunaan:*\n➤ ${usedPrefix + command} <mediafire_url>\n\n📌 *Contoh:*\n➤ ${usedPrefix + command} https://www.mediafire.com/file/example.zip/file`);

		// Jalankan scraper untuk mendapatkan link download
		let result = await mediaFire(text);
		if (result.error) return m.reply("❌ Gagal mengambil data. Pastikan link benar!");

		// Format pesan
		let responseText = `📥 *MediaFire Downloader*\n\n📂 *Nama File:* ${result.filename || "Tidak diketahui"}\n📦 *Ukuran:* ${result.size || "Tidak diketahui"}\n🔗 *Download Link:* ${result.url || "Tidak tersedia"}\n🔧 *Repair Link:* ${result.repair || "Tidak tersedia"}`;

		m.reply(responseText);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat mengambil data, coba lagi nanti.");
	}
};

handler.help = ["mediafire"].map(cmd => `${cmd} *<mediafire_url>*`);
handler.tags = ["downloader"];
handler.command = ["mediafire", "mf"];

module.exports = handler;

// Scraper MediaFire Downloader
async function mediaFire(url) {
	try {
		const response = await axios.get("https://r.jina.ai/" + url);
		const text = response.data;

		const result = {
			title: (text.match(/Title: (.+)/) || [])[1]?.trim() || "",
			link: (text.match(/URL Source: (.+)/) || [])[1]?.trim() || "",
			filename: "",
			url: "",
			size: "",
			repair: ""
		};

		if (result.link) {
			const fileMatch = result.link.match(/\/([^\/]+\.zip)/);
			if (fileMatch) result.filename = fileMatch[1];
		}

		const matches = [...text.matchAll(/(.*?)(https:\/\/[^\s]+)/g)];
		for (const match of matches) {
			const desc = match[1].trim();
			const link = match[2].trim();

			if (desc.toLowerCase().includes("download") && desc.match(/(\d+(\.\d+)?[KMGT]B)/)) {
				result.url = link;
				result.size = (desc.match(/(\d+(\.\d+)?[KMG]?B)/) || [])[1] || "";
			}
			if (desc.toLowerCase().includes("repair")) {
				result.repair = link;
			}
		}

		return result;
	} catch (error) {
		return { error: error.message };
	}
}