const axios = require("axios");
const cheerio = require("cheerio");

// Handler pencarian grup WhatsApp
let handler = async (m, { text, usedPrefix, command }) => {
	try {
		// Cek apakah query diberikan
		if (!text) return m.reply(`🔍 *Cara Penggunaan:*\n➤ ${usedPrefix + command} <kata kunci>\n\n📌 *Contoh:*\n➤ ${usedPrefix + command} coding`);

		// Panggil fungsi scraper untuk mencari grup
		let results = await WGL.search(text);
		if (results.length === 0) return m.reply("❌ Tidak ada grup yang ditemukan!");

		// Format hasil pencarian
		let responseText = `📌 *Hasil Pencarian Grup WhatsApp untuk:* _"${text}"_\n\n`;
		results.slice(0, 5).forEach((group, index) => {
			responseText += `🔹 *${group.title}*\n📆 ${group.date}\n🔗 ${group.link}\n\n`;
		});

		m.reply(responseText);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat mengambil data, coba lagi nanti.");
	}
};

handler.help = ["whatsappgroup"].map(cmd => `${cmd} *<kata kunci>*`);
handler.tags = ["search"];
handler.command = ["whatsappgroup", "wgroup", "wgsearch"];

module.exports = handler;

// Scraper WhatsGroupLink
const WGL = {
	async search(q) {
		const { data } = await axios.get("https://whatsgrouplink.com/?s=" + q);
		const $ = cheerio.load(data);

		const items = [];
		$("article").each((index, element) => {
			const image = $(element).find("img").attr("src");
			const date = $(element).find("time").text().trim();
			const title = $(element).find(".entry-title-link").text().trim();
			const link = $(element).find("a").attr("href");
			items.push({ image, date, title, link });
		});

		return items;
	},
	async detail(q) {
		const { data } = await axios.get(q);
		const $ = cheerio.load(data);

		const items = {};
		const str = $(".entry-content").html();
		let aha = str.split('<div style="margin-top: 0px; margin-bottom: 0px;" class="sharethis-inline-share-buttons"></div>')[1];
		items.desc = cheerio.load(aha.split("<h3")[0]).text().replace(/\n+/g, "\n").trim();

		let anu = ["rules", "links", "how", "related"];
		$(".entry-content ul").each((i, e) => {
			let iye = [];
			$(e).find("li").each((j, d) => {
				if (i % 2 == 0) iye.push($(d).text());
				else {
					let blox = {};
					blox.title = $(d).text().split("–")[0].trim();
					blox.link = $(d).find("a").attr("href");
					iye.push(blox);
				}
			});
			items[anu[i]] = iye;
		});

		return items;
	}
};