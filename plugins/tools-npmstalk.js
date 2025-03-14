const axios = require('axios');

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		// Cek apakah nama package NPM diberikan
		if (!text) throw `Contoh penggunaan: ${usedPrefix + command} <nama-package>\nContoh: ${usedPrefix + command} axios`;

		const packageName = text.trim();
		const npmUrl = `https://registry.npmjs.org/${packageName}`;

		// Ambil informasi package dari NPM registry
		const { data: packageInfo } = await axios.get(npmUrl);

		// Cek apakah package tersedia
		if (!packageInfo || packageInfo.error) throw `Package "${packageName}" tidak ditemukan.`;

		// Ambil versi terbaru
		const latestVersion = packageInfo['dist-tags'].latest;
		const latestVersionInfo = packageInfo.versions[latestVersion];

		// Ambil statistik pengunduhan
		const downloadStatsUrl = `https://api.npmjs.org/downloads/point/last-week/${packageName}`;
		const { data: downloadStats } = await axios.get(downloadStatsUrl);

		// Format informasi package
		const infoMessage = `
*Informasi Package NPM:*

*Nama Package:* ${packageInfo.name}
*Versi Terbaru:* ${latestVersion}
*Deskripsi:* ${latestVersionInfo.description || "Tidak ada deskripsi"}
*Author:* ${latestVersionInfo.author?.name || "Tidak diketahui"}
*Lisensi:* ${latestVersionInfo.license || "Tidak diketahui"}

*Statistik Pengunduhan:*
- Minggu Ini: ${downloadStats.downloads || 0} unduhan

*Dependensi:*
${latestVersionInfo.dependencies ? Object.keys(latestVersionInfo.dependencies).join(', ') : "Tidak ada dependensi"}

*Repository:* ${latestVersionInfo.repository?.url || "Tidak tersedia"}
*Homepage:* ${latestVersionInfo.homepage || "Tidak tersedia"}
`;

		// Kirim pesan informasi
		m.reply(infoMessage);
	} catch (error) {
		console.error(error);
		m.reply(`Gagal mengambil informasi package. Error: ${error.message || error}`);
	}
};

handler.command = ["npmstalk", "npminfo"];
handler.tags = ["stalk"];
handler.help = ["npmstalk <nama-package>", "npminfo <nama-package>"].map(cmd => `${cmd} *melihat informasi package NPM*`);

module.exports = handler;