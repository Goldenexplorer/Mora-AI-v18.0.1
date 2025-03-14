const fs = require("fs");
const path = require("path");

let handler = async (m, { isOwner, text }) => {
    try {
        if (!isOwner) {
            return m.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
        }

        if (!text) {
            return m.reply("⚠️ Harap masukkan nama file plugin yang ingin dihapus!");
        }

        if (!text.endsWith(".js")) {
            return m.reply("⚠️ Nama file harus berformat *.js*!");
        }

        let filePath = path.join(__dirname, "../plugins", text.toLowerCase());

        if (!fs.existsSync(filePath)) {
            return m.reply("❌ Plugin tidak ditemukan di folder *plugins*!");
        }

        await fs.promises.unlink(filePath);
        return m.reply(`✅ Berhasil menghapus file plugin *${text.toLowerCase()}* dari folder *plugins*!`);
    } catch (err) {
        console.error("Error saat menghapus plugin:", err);
        return m.reply(`❌ Gagal menghapus file: ${err.message}`);
    }
};

handler.help = ["delplugin"].map(cmd => `${cmd} *<nama file.js>*`);
handler.tags = ["tools"];
handler.command = ["delplugin", "delplugins"];

module.exports = handler;