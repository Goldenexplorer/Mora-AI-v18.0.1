const { fetchJson } = require("../lib/myfunc");

let handler = async (m, { isPremium, text, usedPrefix, command }) => {
	try {
		if (!isPremium) {
			return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium.");
		}

		if (!text) {
			return m.reply(`📌 *Cara penggunaan:* ${usedPrefix + command} <pertanyaan_anda>\n\n💡 *Contoh:*\n${usedPrefix + command} Apa itu kecerdasan buatan?`);
		}

		const apiUrl = `https://api.siputzx.my.id/api/ai/joko?content=${encodeURIComponent(text)}`;

		try {
			const data = await fetchJson(apiUrl);

			if (data.status) {
				m.reply(data.data);
			} else {
				m.reply("⚠️ Maaf, saya tidak dapat memberikan jawaban saat ini. Silakan coba lagi nanti.");
			}
		} catch (error) {
			console.error(error);
			m.reply("❌ Terjadi kesalahan saat mengakses API. Pastikan koneksi internet Anda stabil.");
		}
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Ups! Terjadi kesalahan, silakan coba lagi nanti.");
	}
};

handler.command = ["jawaai"];
handler.tags = ["ai"];
handler.help = ["jawaai <pertanyaan>"].map(cmd => `${cmd} *Ajukan pertanyaan kepada AI Jawa*`);

module.exports = handler;