const fs = require("fs");
const chalk = require("chalk");
global.WHATSAPP_API = "@ryzenofc/baileys";

global.botName = "Mora AI";
global.ownerNumber = "6281234567890";
global.ownerName = "라이젠";
global.website = "https://www.your-domain.my.id";
global.wagc = "https://www.your-domain.my.id";

global.packname = botName;
global.author = ownerName;
global.footer = "© 2024 · 라이젠";
global.creator = "6281234567890@s.whatsapp.net";
global.owner = ["6281234567890"];
global.premium = ["6281234567890"];
global.prefa = ".";
global.tempatDB = "database.json";

global.saluran = "120363364330631981@newsletter";
global.saluranName = "Newsletter 📣";
global.sessionName = "session";

global.panel = "https://panel.your-domain.my.id";
global.cred = "ptla_NyT53XIGfvyK3ptQuOCocuzjEQUi79kep5rT91QVBYI";
global.apiuser = "ptlc_2Ab5V8x9hlevFNXKpuPKsoQVN3EdtL2L2EPvpGVzsmS";
global.eggs = "15";
global.nets = "5";
global.location = "1";

global.CF_API_KEY = "kDVfZ8NWOFNCsloIA6ckd58duuYZ0nlXwysSn9nV";
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822682";
global.CF_DOMAIN = "your-domain.my.id";

global.APP_EMAIL = "cs.moraai@gmail.com";
global.APP_PASSWORD = "rwak vblz ttol ftdx";

global.typemenu = "v1";
global.typereply = "v6";
global.autoblocknumber = "62";
global.antiforeignnumber = "62";
global.welcome = false;
global.anticall = false;
global.autoswview = true;
global.adminevent = false;
global.groupevent = false;
global.notifRegister = false;
global.onlyRegister = false;

global.payment = {
    dana: "+62 856-5554-8594",
    gopay: "+62 856-5554-8594",
    ovo: "+62 856-5554-8594",
    qris: "./media/QRIS.png"
};

global.limit = {
    free: 20,
    premium: "Infinity",
    vip: "Infinity"
};

global.uang = {
    free: 10000,
    premium: 1000000000,
    vip: 1000000000
};

global.bot = {
    limit: 1,
    uang: 1
};

global.game = {
    suit: {},
    menfes: {},
    tictactoe: {},
    kuismath: {},
    tebakbom: {}
};

global.mess = {
    limit: "Batas penggunaan Anda telah tercapai. Silakan coba lagi nanti.",
    nsfw: "Konten NSFW saat ini dinonaktifkan di grup ini. Silakan hubungi administrator untuk mengaktifkannya.",
    done: "Operasi berhasil diselesaikan.",
    error: "Terjadi kesalahan. Silakan coba lagi.",
    success: "Permintaan berhasil diproses. Berikut hasilnya:",
    owner: "Perintah ini hanya tersedia untuk pemilik bot.",
    botAdmin: "Perintah ini memerlukan hak akses administrator bot.",
    admin: "Perintah ini hanya tersedia untuk administrator grup.",
    group: "Perintah ini hanya dapat digunakan di dalam grup.",
    private: "Perintah ini hanya dapat digunakan di chat pribadi.",
    bot: "Fitur ini hanya dapat diakses oleh bot.",
    wait: "Memproses permintaan Anda. Silakan tunggu...",
    premium: "Fitur ini hanya tersedia untuk pengguna premium.",
    banned: "Akses Anda ke bot ini telah dibatasi.",
    unban: "Akses Anda telah dipulihkan. Selamat datang kembali!",
    restrict: "Fitur ini tidak tersedia di grup ini karena pembatasan."
};

global.imageDonasi = "https://files.catbox.moe/iw1qrw.png";
global.imageUrl = "https://files.catbox.moe/iw1qrw.png";
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png");
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4");
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.yellow.bold(`\n⚠️ ${__filename} telah diperbarui! ⚠️`));
    console.log(chalk.green("🔄 Silakan restart bot untuk menerapkan perubahan.\n"));
    delete require.cache[file];
    require(file);
});