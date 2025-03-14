const cheerio = require("cheerio");
const fetch = require("node-fetch");

let handler = async (m, { sock, text }) => {
	try {
		if (!text) {
			return m.reply("⚠️ Harap masukkan tautan SnackVideo yang valid!");
		}

		let res = await fetchSnackVideo(text);
		if (!res.media) {
			return m.reply("⚠️ Gagal mendapatkan video. Pastikan tautan yang Anda masukkan benar dan dapat diakses.");
		}

		let captionText = `🎥 *SnackVideo Downloader* 🎥\n\n`;
		captionText += `👤 *Username* : ${res.author}\n`;
		captionText += `👍 *Like* : ${res.like}\n`;
		captionText += `💬 *Komentar* : ${res.comment}\n`;
		captionText += `🔄 *Bagikan* : ${res.share}`;

		await sock.sendFile(m.chat, res.media, "", captionText, m);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.");
	}
};

handler.help = ["snackvideo [url]"];
handler.tags = ["downloader"];
handler.command = ["snackvideodl", "snackvideodownload"];

module.exports = handler;

async function fetchSnackVideo(url) {
	try {
		const res = await fetch(url);
		const body = await res.text();
		const $ = cheerio.load(body);

		const video = $("div.video-box").find("a-video-player");
		const author = $("div.author-info");
		const attr = $("div.action");

		return {
			title: $(author).find("div.author-desc > span").children("span").eq(0).text().trim(),
			thumbnail: $(video).parent().siblings("div.background-mask").children("img").attr("src"),
			media: $(video).attr("src"),
			author: $("div.author-name").text().trim(),
			authorImage: $(attr).find("div.avatar > img").attr("src"),
			like: $(attr).find("div.common").eq(0).text().trim(),
			comment: $(attr).find("div.common").eq(1).text().trim(),
			share: $(attr).find("div.common").eq(2).text().trim(),
		};
	} catch (error) {
		console.error("Error fetching SnackVideo:", error);
		return {};
	}
}