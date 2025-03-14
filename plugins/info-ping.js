const { fetchJson } = require("../lib/myfunc");
const osUtils = require('node-os-utils');
const os = require('os');
const moment = require('moment-timezone');
const process = require('process');

let handler = async (m, { isPremium, text, usedPrefix, command }) => {
	try {
		const cpu = osUtils.cpu;
		const mem = osUtils.mem;
		const drive = osUtils.drive;

		const cpuUsage = await cpu.usage();
		const cpuCount = cpu.count();
		const cpuCores = os.cpus();

		const memInfo = await mem.info();
		const driveInfo = await drive.info();

		const osPlatform = os.platform();
		const osType = os.type();
		const osRelease = os.release();
		const osArch = os.arch();
		const osUptime = moment.duration(os.uptime(), 'seconds').humanize();

		const botUptime = moment.duration(process.uptime(), 'seconds').humanize();
		const nodeVersion = process.version;
		const botMemoryUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);

		const now = moment().tz('Asia/Jakarta');
		const todayDate = now.format('YYYY-MM-DD');
		const todayTime = now.format('HH:mm:ss');

		let infoMessage = `
*Device Information:*

*CPU:*
- Usage: ${cpuUsage}%
- Cores: ${cpuCount}
- Core Details:
${cpuCores.map((core, index) => `  *Core ${index + 1}:* ${core.model} (${core.speed} MHz)
- Usage: ${((core.times.user + core.times.nice + core.times.sys + core.times.irq) / core.times.idle * 100).toFixed(2)}%`).join('\n')}

*Memory:*
- Total: ${(memInfo.totalMemMb / 1024).toFixed(2)} GB
- Used: ${(memInfo.usedMemMb / 1024).toFixed(2)} GB
- Available: ${(memInfo.freeMemMb / 1024).toFixed(2)} GB

*Storage:*
- Total: ${(driveInfo.totalGb)} GB
- Used: ${(driveInfo.usedGb)} GB
- Available: ${(driveInfo.freeGb)} GB

*Operating System:*
- Platform: ${osPlatform}
- Type: ${osType}
- Version: ${osRelease}
- Architecture: ${osArch}
- Uptime: ${osUptime}

*Bot Runtime:*
- Uptime: ${botUptime}
- Node.js Version: ${nodeVersion}
- Memory Usage: ${botMemoryUsage} MB

*Current Date & Time:*
- Date: ${todayDate}
- Time: ${todayTime}
`;

		m.reply(infoMessage);
	} catch (error) {
		console.error(error);
		m.reply('An error occurred while retrieving device information.');
	}
};

handler.command = ["ping"];
handler.tags = ["info"];
handler.help = ["ping"].map(cmd => `${cmd} *displays device information*`);

module.exports = handler;