const axios = require("axios");

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		// Cek apakah query diberikan
		if (!text) return m.reply(`🍏 *Cara Penggunaan:*\n➤ ${usedPrefix + command} <produk>\n\n📌 *Contoh:*\n➤ ${usedPrefix + command} MacBook`);

		// Panggil scraper untuk mencari produk di Apple
		let results = await AppleSearch.search(text);
		if (results.length === 0) return m.reply("❌ Produk tidak ditemukan!");

		// Ambil hasil pertama dan format pesan
		let product = results[0];
		let responseText = `🍏 *Apple Product Search*\n🔍 *Produk:* ${product.title}\n📌 *Kategori:* ${product.category}\n🔗 *Detail:* [Klik disini](${product.link})`;

		m.reply(responseText);
	} catch (err) {
		console.error(err);
		m.reply("⚠️ Terjadi kesalahan saat mengambil data, coba lagi nanti.");
	}
};

handler.help = ["applesearch"].map(cmd => `${cmd} *<nama produk>*`);
handler.tags = ["tools"];
handler.command = ["applesearch", "apple"];

module.exports = handler;

// Scraper Apple Search
const AppleSearch = {
	async search(query) {
		try {
			const res = await axios.get(`https://www.apple.com/us/search/${encodeURIComponent(query)}?src=globalnav`);
			const html = res.data;
			const obj = html.split("window.pageLevelData.searchResults.searchData = ")[1].split("};\n")[0];
			const data = JSON.parse(obj + "}");

			const searchResults = data.results.explore.exploreCurated.tiles.items.map(item => ({
				title: item.title,
				category: item.category,
				link: item.value.navLinks[0].url
			}));

			return searchResults;
		} catch (error) {
			console.error("Error fetching Apple search:", error);
			return [];
		}
	}
};