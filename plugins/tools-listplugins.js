const fs = require("fs");
const path = require("path");

let handler = async (m, { isOwner }) => {
    try {
        if (!isOwner) {
            return m.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
        }

        let pluginDir = path.join(__dirname, "../plugins");
        let files = fs.readdirSync(pluginDir).filter(file => file.endsWith(".js"));

        if (files.length === 0) {
            return m.reply("📂 Tidak ada file plugin yang tersedia di folder *plugins*.");
        }

        let listPlugins = files.map((file, index) => `${index + 1}. 📌 *${file}*`).join("\n");
        return m.reply(`🔍 *Daftar Plugin yang Tersedia:*\n\n${listPlugins}`);
    } catch (err) {
        console.error("Error saat membaca daftar plugin:", err);
        return m.reply("❌ Terjadi kesalahan saat membaca daftar plugin.");
    }
};

handler.help = ["listplugin"].map(cmd => `${cmd} *Menampilkan daftar plugin yang tersedia*`);
handler.tags = ["tools"];
handler.command = ["listplugin", "listplugins"];

module.exports = handler;