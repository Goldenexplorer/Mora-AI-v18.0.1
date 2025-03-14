const fs = require("fs");
const path = require("path");

let handler = async (m, { isOwner, text }) => {
	if (!isOwner) return;
	if (!text) return m.reply("⚠️ Masukkan nama file yang ingin diedit atau dibuat!");
	if (!m.quoted || !m.quoted.text) return m.reply("⚠️ Reply pesan yang berisi kode untuk disimpan!");
	if (!text.endsWith(".js")) return m.reply("⚠️ Nama file harus berformat .js!");

	// Tentukan path file
	let filePath = path.join(__dirname, "../plugins", text.toLowerCase());

	try {
		// Simpan file (buat baru jika belum ada)
		await fs.promises.writeFile(filePath, m.quoted.text, "utf-8");
		return m.reply(`✅ Berhasil menyimpan file plugin *${text}*`);
	} catch (err) {
		console.error(err);
		return m.reply(`❌ Gagal menyimpan file: ${err.message}`);
	}
};

handler.help = ["saveplugin"].map(cmd => `${cmd} *<nama file.js>*`);
handler.tags = ["tools"];
handler.command = ["saveplugin"];

module.exports = handler;