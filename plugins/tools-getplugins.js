const fs = require("fs");
const path = require("path");

let handler = async (m, { isOwner, text }) => {
    try {
        if (!isOwner) {
            return m.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
        }

        if (!text) {
            return m.reply("⚠️ Harap masukkan nama file plugin yang ingin dibaca!");
        }

        if (!text.endsWith(".js")) {
            return m.reply("⚠️ Nama file harus berformat *.js*!");
        }

        let filePath = path.join(__dirname, "../plugins", text.toLowerCase());

        if (!fs.existsSync(filePath)) {
            return m.reply("❌ Plugin tidak ditemukan di folder *plugins*!");
        }

        let fileContent = await fs.promises.readFile(filePath, "utf-8");

        if (fileContent.length > 4000) {
            fileContent = fileContent.substring(0, 4000) + "\n\n⚠️ Isi file terlalu panjang, hanya menampilkan sebagian.";
        }

        return m.reply(`📜 *Isi Plugin ${text}:*\n\n\`\`\`${fileContent}\`\`\``);
    } catch (err) {
        console.error("Error saat membaca plugin:", err);
        return m.reply(`❌ Gagal membaca file: ${err.message}`);
    }
};

handler.help = ["getplugin"].map(cmd => `${cmd} *<nama file.js>*`);
handler.tags = ["tools"];
handler.command = ["getplugin", "getplugins"];

module.exports = handler;