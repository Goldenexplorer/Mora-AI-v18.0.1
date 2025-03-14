const fetch = require("node-fetch");

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		// Cek apakah URL diberikan
		if (!text) return m.reply(`🎵 *Cara Penggunaan:*\n➤ ${usedPrefix + command} <youtube_url>\n\n📌 *Contoh:*\n➤ ${usedPrefix + command} https://youtu.be/Yw6u6YkTgQ4`);

		// Panggil fungsi scraper untuk mendapatkan link MP3
		let result = await ytmp3MobiScraper(text);
		if (!result.url) return m.reply("❌ Gagal mendapatkan link download!");

		// Kirim hasil
		let responseText = `🎶 *YouTube MP3 Download*\n\n📌 *Judul:* ${result.title}\n🔗 *Link:* ${result.url}\n\nKlik link di atas untuk mengunduh lagu!`;
		m.reply(responseText);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat mengambil data, coba lagi nanti.");
	}
};

handler.help = ["ytmp3mobi"].map(cmd => `${cmd} *<youtube_url>*`);
handler.tags = ["downloader"];
handler.command = ["ytmp3mobi", "ytmp3"];

module.exports = handler;

// Scraper untuk YTMP3Mobi
async function ytmp3MobiScraper(url) {
	try {
		// Headers untuk request
		const headers = {
			"accept": "*/*",
			"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
			"sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
			"sec-ch-ua-mobile": "?1",
			"sec-ch-ua-platform": "\"Android\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "cross-site",
			"Referer": "https://id.ytmp3.mobi/",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		};

		// Inisialisasi API
		const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers });
		const init = await initial.json();

		// Ekstrak ID dari URL YouTube
		let id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
		if (!id) throw new Error("URL YouTube tidak valid!");

		// URL konversi
		let format = "mp3"; // Konversi ke MP3
		let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
		const converts = await fetch(convertURL, { headers });
		const convert = await converts.json();

		// Cek progress konversi
		let info = {};
		for (let i = 0; i < 5; i++) {
			await new Promise(res => setTimeout(res, 3000)); // Delay 3 detik
			let j = await fetch(convert.progressURL, { headers });
			info = await j.json();
			if (info.progress == 3) break;
		}

		// Return hasil akhir
		return {
			url: convert.downloadURL || "",
			title: info.title || "Tidak diketahui"
		};
	} catch (err) {
		console.error("Error saat scraping YTMP3Mobi:", err);
		return { url: "", title: "Gagal mengambil data" };
	}
}