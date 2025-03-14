const fs = require("fs");
const path = require("path");

let handler = async (m, { sock, isOwner, text }) => {
    try {
        if (!isOwner) {
            return m.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
        }

        if (!text) {
            return m.reply("⚠️ Harap masukkan nama file plugin yang ingin ditambahkan!");
        }

        if (!m.quoted) {
            return m.reply("⚠️ Harap reply pesan yang berisi kode plugin!");
        }

        if (!text.endsWith(".js")) {
            return m.reply("⚠️ Nama file harus berformat *.js*!");
        }

        let filePath = path.join(__dirname, "../plugins", text.toLowerCase());

        if (fs.existsSync(filePath)) {
            return m.reply("❌ Plugin dengan nama tersebut sudah ada di folder *plugins*!");
        }

        let pluginCode = m.quoted.text;

        if (!pluginCode.includes("module.exports") || pluginCode.trim().length < 10) {
            return m.reply("⚠️ Kode plugin tidak valid! Pastikan berisi kode JavaScript yang sesuai.");
        }

        await fs.promises.writeFile(filePath, pluginCode);
        return m.reply(`✅ Berhasil menambahkan file plugin *${text}* ke folder *plugins*!`);
    } catch (err) {
        console.error("Error saat menambahkan plugin:", err);
        return m.reply(`❌ Gagal menyimpan file: ${err.message}`);
    }
};

handler.help = ["addplugin"].map(cmd => `${cmd} *<nama file.js>*`);
handler.tags = ["tools"];
handler.command = ["addplugin", "addplugins"];

module.exports = handler;