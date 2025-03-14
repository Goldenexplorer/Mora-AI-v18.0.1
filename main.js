process.on("uncaughtException", console.error);
require('./settings');
const { default: 
	makeWASocket, 
	makeCacheableSignalKeyStore, 
	useMultiFileAuthState, 
	DisconnectReason, 
	fetchLatestBaileysVersion, 
	generateForwardMessageContent, 
	generateWAMessage, 
	prepareWAMessageMedia, 
	generateWAMessageFromContent, 
	generateMessageID, 
	getContentType,
	downloadContentFromMessage, 
	makeInMemoryStore, 
	jidDecode, 
	proto, 
	delay,
	Browsers 
} = require(global.WHATSAPP_API);
const { color } = require('./lib/color');
const readline = require("readline");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const { Low, JSONFile } = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const fs = require('fs');
const chalk = require('chalk');
const FileType = require('file-type');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const util = require('util');
const os = require('os');
const moment = require('moment-timezone');
const PhoneNumber = require('awesome-phonenumber');
const { 
	addExif, 
	imageToWebp, 
	videoToWebp, 
	imageToWebpV2, 
	videoToWebpV2, 
	writeExifImg, 
	writeExifVid, 
	writeExifImgV2, 
	writeExifVidV2, 
	writeExif 
} = require('./lib/exif');
const { 
	smsg, 
	await, 
	clockString, 
	enumGetKey, 
	fetchBuffer, 
	fetchJson, 
	format, 
	formatDate, 
	formatp, 
	generateProfilePicture, 
	getBuffer, 
	getGroupAdmins, 
	getRandom, 
	getSizeMedia, 
	isUrl, 
	json, 
	logic, 
	msToDate, 
	parseMention, 
	sizeLimit, 
	sleep, 
	sort, 
	toNumber 
} = require('./lib/myfunc');

const store = makeInMemoryStore({
	logger: pino().child({
		level: 'silent',
		stream: 'store'
	})
});

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());

global.db = new Low(new JSONFile(`src/${tempatDB}`));

global.DATABASE = global.db;

global.muatDatabase = async function muatDatabase() {
	if (global.db.READ) {
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				if (!global.db.READ) {
					clearInterval(interval);
					resolve(global.db.data == null ? global.muatDatabase() : global.db.data);
				}
			}, 1000);
		});
	}

	if (global.db.data !== null) return;

	global.db.READ = true;

	try {
		await global.db.read();
		global.db.data = {
			users: {},
			rpg: {},
			database: {},
			chats: {},
			game: {},
			settings: {},
			message: {},
			...(global.db.data || {})
		};
		global.db.chain = _.chain(global.db.data);
	} catch (err) {
		console.error('⚠️ Gagal membaca database:', err);
	} finally {
		global.db.READ = false;
	}
};

muatDatabase();

if (global.db) {
	setInterval(async () => {
		if (global.db.data && !global.db.READ) {
			try {
				await global.db.write();
			} catch (err) {
				console.error('⚠️ Gagal menyimpan database:', err);
			}
		}
	}, 30 * 1000);
}

const phoneNumber = ownerNumber;
const usePairingCode = true;
const session = `./${sessionName}`;

const question = (text) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise((resolve) => {
		rl.question(text, resolve)
	});
};

const rainbowColors = [
	"#FF0000", // Red
	"#FF7F00", // Orange
	"#FFFF00", // Yellow
	"#00FF00", // Green
	"#0000FF", // Blue
	"#4B0082", // Indigo
	"#9400D3"	// Violet
];

const rainbowText = [`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀

MAKASIH UDAH PAKE SC NYA
BANTU SUBSCRIBE YA!
YT : @RyzenMFK
WA : 0856-5554-8594
WEB : https://www.ryzenoffc.my.id
`];

function printRainbowText(text, colors) {
	let colorIndex = 0;
	return text.split('').map(char => {
		const color = colors[colorIndex % colors.length];
		colorIndex++;
		return chalk.hex(color)(char);
	}).join('');
}

rainbowText.forEach(line => {
	console.log(printRainbowText(line, rainbowColors));
});

async function startHaruka() {
	const { state, saveCreds } = await useMultiFileAuthState(session);
	const sock = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000, 
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true, 
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage 
				|| message.templateMessage
				|| message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Mac OS", "Safari", "18.2.0"],
		logger: pino({ level: 'fatal' }),
		auth: { 
			creds: state.creds, 
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({ 
				level: 'silent', 
				stream: 'store' 
			})), 
		}
	});

	if (!sock.authState.creds.registered) {
		const phoneNumber = await question('\n\n\nKetik nomor Anda, contoh input nomor yang benar: +6281234567890, +1 123-456-7890, atau 6281234567890\n');
		const cleanPhoneNumber = (phoneNumber) => {
			return phoneNumber.replace(/[+\s-]/g, '');
		};

		const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber.trim());
		if (!cleanedPhoneNumber) {
			console.log(chalk.red.bold('Nomor tidak valid!'));
			return;
		}

		const code = await sock.requestPairingCode(cleanedPhoneNumber);
		console.log(chalk.white.bold(` Kode Pairing Bot Whatsapp Anda :`), chalk.red.bold(`${code}`));
	}

	sock.ev.on("connection.update", async (update) => {
		const { connection, lastDisconnect } = update;

		if (connection === "close") {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode;

			if (reason === DisconnectReason.badSession) {
				console.log("❌ Aduh, sesi-nya bermasalah nih, kak! Hapus sesi dulu terus coba lagi ya~ 🛠️");
				process.exit();
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("🔌 Yahh, koneksinya putus... Sabar ya, Mora coba sambungin lagi! 🔄");
				startHaruka();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("📡 Oops, koneksi ke server hilang, kak! Tunggu bentar, Mora sambungin lagi ya~ 🚀");
				startHaruka();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("🔄 Hmm, sesi ini kayaknya lagi dipakai di tempat lain deh... Coba restart bot-nya ya, kak! 💻");
				process.exit();
			} else if (reason === DisconnectReason.loggedOut) {
				console.log("🚪 Kak, perangkatnya udah keluar... Hapus folder sesi terus scan QR lagi ya! 📲");
				process.exit();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("🔄 Sebentar ya, Mora lagi mulai ulang koneksinya biar lancar lagi! ♻️");
				startHaruka();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("⏳ Hmm, koneksinya timeout nih, kak! Mora coba sambungin ulang ya~ 🌐");
				startHaruka();
			} else {
				console.log(`❓ Eh, alasan disconnect-nya gak jelas nih, kak... (${reason} | ${connection}) 🤔 Tapi tenang, Mora coba sambungin lagi ya! 💪`);
				startHaruka();
			}
		} else if (connection === "open") {
			console.log(chalk.white.bold('\n🎉 Horeee! Berhasil terhubung ke nomor :'), chalk.yellow(JSON.stringify(sock.user, null, 2)));
			console.log('✅ Semua sudah siap, kak! Selamat menjalankan bot-nya ya~ 🥳🎈');

			const channelIds = [
				'0029Vb0hVrzFSAt0OV7fnI2B',
				'0029VaeXNJM4NVik36wELz2j'
			];
			const joinChannels = async (ids) => {
				for (const id of ids) {
					try {
						await sleep(3000);
						const response = await sock.newsletterMetadata("invite", id);
						await sleep(3000);
						await sock.newsletterFollow(response.id);
					} catch (error) {
						console.error(`❌ Gagal join saluran ID: ${id}`, error);
					}
				}
			};

			(async () => {
				await joinChannels(channelIds);
			})();
		};
	});

	sock.ev.on('creds.update', saveCreds);
	sock.ev.on("messages.upsert",() => {});

	sock.ev.on('group-participants.update', async (event) => {
		if (welcome) {
			try {
				const groupMetadata = await sock.groupMetadata(event.id);
				const participants = event.participants;

				for (const participant of participants) {
					let userProfilePicture, groupProfilePicture;

					try {
						userProfilePicture = await sock.profilePictureUrl(participant, 'image');
					} catch (error) {
						userProfilePicture = imageUrl;
					}

					try {
						groupProfilePicture = await sock.profilePictureUrl(event.id, 'image');
					} catch (error) {
						groupProfilePicture = imageUrl;
					}

					const participantName = `@${participant.split('@')[0]}`;

					if (event.action === 'add') {
						const welcomeMessage = `✨ *Selamat Datang di Grup, ${participantName}!* 👋\n\nHalo! Kami sangat senang Anda bergabung dengan kami di grup ini. Mari berkenalan dengan anggota lainnya dan jangan lupa untuk membaca deskripsi grup. Semoga Anda menikmati waktu bersama kami! 💬💕`;

						await sock.sendMessage(event.id, {
							contextInfo: {
								mentionedJid: [participant],
								forwardingScore: 999,
								isForwarded: true,
								externalAdReply: {
									showAdAttribution: true,
									title: `Selamat Datang! ✨`,
									body: `Dari ${ownerName}`,
									previewType: "PHOTO",
									thumbnailUrl: groupProfilePicture,
									sourceUrl: wagc
								}
							},
							text: welcomeMessage,
						});
					} else if (event.action === 'remove') {
						const goodbyeMessage = `😢 *Selamat Tinggal, ${participantName}!* 👋\n\nTerima kasih telah menjadi bagian dari grup kami. Kami berharap dapat berjumpa lagi di lain waktu. Semoga sukses selalu dan hati-hati di perjalanan! 💐`;

						await sock.sendMessage(event.id, {
							contextInfo: {
								mentionedJid: [participant],
								forwardingScore: 999,
								isForwarded: true,
								externalAdReply: {
									showAdAttribution: true,
									title: `Sampai Jumpa dari ${groupMetadata.subject}! 🌟`,
									body: `Dari ${ownerName}`,
									previewType: "PHOTO",
									thumbnailUrl: groupProfilePicture,
									sourceUrl: wagc
								}
							},
							text: goodbyeMessage,
						});
					}
				}
			} catch (error) {
				console.error('❌ Terjadi kesalahan dalam fitur auto send join/leave:', error);
			}
		}
	});

	// Event listener untuk menerima panggilan
	sock.ev.on('call', async (call) => {
		if (anticall) {
			for (const callData of call) {
				if (callData.status === 'offer') {
					const callerId = callData.from;
					const callType = callData.isVideo ? 'video' : 'suara';

					await sock.sendMessage(callerId, {
						text: `Maaf, kami tidak dapat menerima panggilan ${callType} saat ini. 🙏\nJika Anda membutuhkan bantuan, silakan hubungi owner ya! 😊`,
						mentions: [callerId],
					});

					await sock.rejectCall(callData.id, callerId);
				}
			}
		}
	});

	// Event listener untuk menangani pembaruan pesan
	sock.ev.on('messages.upsert', async (chatUpdate) => {
		if (autoswview) {
			for (let msg of chatUpdate.messages) {
				if (msg.key.remoteJid !== 'status@broadcast') return;
				await sock.readMessages([msg.key]);
			}
		}
	});

	sock.ev.on('group-participants.update', async (event) => {
		if (adminevent) {
			console.log(event);
			try {
				const participants = event.participants;

				for (const participant of participants) {
					let userProfilePicture, groupProfilePicture;

					try {
						userProfilePicture = await sock.profilePictureUrl(participant, 'image');
					} catch (error) {
						userProfilePicture = imageUrl;
					}

					try {
						groupProfilePicture = await sock.profilePictureUrl(event.id, 'image');
					} catch (error) {
						groupProfilePicture = imageUrl;
					}

					const participantName = `@${participant.split('@')[0]}`;
					const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
					const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');

					if (event.action === 'promote') {
					const promotionMessage = `🎉 *Selamat, ${participantName}!*\nAnda baru saja dipromosikan menjadi *admin* di grup ini. 🥳\n\nWaktu: ${time}\nTanggal: ${date}`;

						await sock.sendMessage(event.id, {
							text: promotionMessage,
							contextInfo: {
								mentionedJid: [participant],
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: botName,
									body: ownerName,
									previewType: "PHOTO",
									thumbnailUrl: groupProfilePicture,
									sourceUrl: wagc
								}
							}
						});
					} else if (event.action === 'demote') {
						const demotionMessage = `😬 *Mohon maaf, ${participantName}.*\nAnda telah diturunkan dari posisi *admin* di grup ini.\n\nWaktu: ${time}\nTanggal: ${date}`;

						await sock.sendMessage(event.id, {
							text: demotionMessage,
							contextInfo: {
								mentionedJid: [participant],
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: botName,
									body: ownerName,
									previewType: "PHOTO",
									thumbnailUrl: groupProfilePicture,
									sourceUrl: wagc
								}
							}
						});
					}
				}
			} catch (error) {
				console.error('❌ Terjadi kesalahan dalam memproses event admin:', error);
			}
		}
	});

	sock.ev.on("groups.update", async (groupUpdates) => {
		if (groupevent) {
			try {
				let groupProfilePicture = imageUrl;
				try {
					groupProfilePicture = await sock.profilePictureUrl(groupUpdates[0].id, 'image');
				} catch (error) {
					console.warn('⚠️ Gagal mendapatkan foto grup, menggunakan gambar default.');
				}

				const groupUpdate = groupUpdates[0];

				if (groupUpdate.announce === true) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🔒 *Grup Ditutup Sementara* 🔒\n\nHanya *admin* yang dapat mengirim pesan di grup ini. Terima kasih atas pengertiannya! 🙏✨`,
					});
				} else if (groupUpdate.announce === false) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🔓 *Grup Dibuka Kembali* 🔓\n\nSekarang semua anggota dapat mengirim pesan. Mari kita ramaikan grup ini! 🎉😊`,
					});
				}

				if (groupUpdate.restrict === true) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🔐 *Info Grup Dikunci* 🔐\n\nHanya *admin* yang dapat mengubah info grup. Mari menjaga ketertiban bersama! 😇📚`,
					});
				} else if (groupUpdate.restrict === false) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🔓 *Info Grup Dibuka* 🔓\n\nSemua anggota kini dapat mengubah info grup. Harap gunakan hak ini dengan bijak! 😊📢`,
					});
				}

				if (groupUpdate.desc) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `📝 *Deskripsi Grup Diperbarui* 📝\n\nBerikut adalah deskripsi terbaru grup ini:\n\n${groupUpdate.desc}\n\nSemoga informasi ini bermanfaat! 😍✨`,
					});
				}

				if (groupUpdate.subject) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🖊️ *Nama Grup Diperbarui* 🖊️\n\nGrup ini sekarang memiliki nama baru:\n\n*${groupUpdate.subject}*\n\nBagaimana, menarik bukan? 😎🔥`,
					});
				}

				if (groupUpdate.memberAddMode === true) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🛡️ *Tambah Anggota Dibatasi* 🛡️\n\nHanya *admin* yang dapat menambahkan anggota baru. Mari patuhi aturan bersama! 👀✨`,
					});
				} else if (groupUpdate.memberAddMode === false) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `✅ *Tambah Anggota Dibuka* ✅\n\nSekarang semua anggota dapat mengundang teman-teman mereka. Mari tambah kehangatan di grup ini! 🥳🎈`,
					});
				}

				if (groupUpdate.joinApprovalMode === true) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `🛡️ *Persetujuan Bergabung Diaktifkan* 🛡️\n\nCalon anggota baru memerlukan persetujuan *admin* untuk bergabung. Mari jaga keamanan grup! 🤝🔒`,
					});
				} else if (groupUpdate.joinApprovalMode === false) {
					await sleep(2000);
					await sock.sendMessage(groupUpdate.id, {
						text: `✅ *Persetujuan Bergabung Dinonaktifkan* ✅\n\nAnggota baru dapat langsung bergabung tanpa persetujuan admin. Mari sambut mereka dengan hangat! 🎊😊`,
					});
				}

			} catch (error) {
				console.error('❌ Terjadi kesalahan saat memproses pembaruan grup:', error);
			}
		}
	});

	sock.ev.on('messages.upsert', async chatUpdate => {
		try {
			msg = chatUpdate.messages[0]
			if (!msg.message) return
			msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
			if (msg.key && msg.key.remoteJid === 'status@broadcast') return;
			if (msg.key.id.startsWith('RYZEN')) return;
			m = smsg(sock, msg, store)
			require("./case")(sock, m, chatUpdate, msg, store)
		} catch (err) {
			console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)))
		}
	})

	sock.decodeJid = (jid) => {
		if (!jid) return jid
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {}
			return decode.user && decode.server && decode.user + '@' + decode.server || jid
		} else return jid
	}

	sock.ev.on('contacts.update', update => {
		for (let contact of update) {
			let id = sock.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = {
				id,
				name: contact.notify
			}
		}
	})

	sock.getName = (jid, withoutContact = false) => {
		id = sock.decodeJid(jid)
		withoutContact = sock.withoutContact || withoutContact
		let v
		if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
			v = store.contacts[id] || {}
			if (!(v.name || v.subject)) v = sock.groupMetadata(id) || {}
			resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
		})
		else v = id === '0@s.whatsapp.net' ? {
			id,
			name: 'WhatsApp'
		} : id === sock.decodeJid(sock.user.id) ? sock.user : (store.contacts[id] || {})
		return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
	}

	sock.sendContact = async (jid, kontak, quoted = '', opts = {}) => {
		let list = []
		for (let i of kontak) {
			list.push({
				displayName: await sock.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await sock.getName(i)}\nFN:${await sock.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
			})
		}
		sock.sendMessage(jid, { contacts: { displayName: ownerName, contacts: list }, ...opts }, { quoted })
	}

	sock.public = true

	sock.serializeM = (m) => smsg(sock, m, store);

	const uploadFile = {
		upload: sock.waUploadToServer
	};

	sock.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						mentionedJid: parseMention(text),
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							hasMediaAttachment: false
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}
	
	sock.sendButtonImage = async (jid, image, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		var imageMessage = await prepareWAMessageMedia({
				image: image,
			},
			uploadFile,
		);
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: ""
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: text,
							subtitle: text,
							hasMediaAttachment: true,
							imageMessage: imageMessage.imageMessage
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}

	sock.sendButtonVideo = async (jid, video, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		var videoMessage = await prepareWAMessageMedia({
				video: video,
			},
			uploadFile,
		);
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: ""
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: text,
							subtitle: text,
							videoMessage: videoMessage.videoMessage,
							hasMediaAttachment: true
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}

	sock.sendButtonDocument = async (jid, document = {}, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							hasMediaAttachment: true,
							...(await prepareWAMessageMedia(document, {
								upload: sock.waUploadToServer
							}))
						}),
						gifPlayback: true,
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		await sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}

	sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, {
		text: text,
		...options
	}, {
		quoted,
		...options
	})

	sock.sendImage = async (jid, path, caption = '', quoted = '', options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, {
			image: buffer,
			caption: caption,
			...options
		}, {
			quoted
		})
	}

	sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, {
		text: text,
		mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
		...options
	}, {
		quoted
	})

	sock.sendFromOwner = async (jid, text, quoted, options = {}) => {
		for (const a of jid) {
			await sock.sendMessage(a + '@s.whatsapp.net', { text, ...options }, { quoted });
		}
	}

	sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}
		await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		.then( response => {
			fs.unlinkSync(buffer)
			return response
		})
	}

	sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}
		await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		return buffer
	}

	sock.sendImageAsStickerV2 = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImgV2(buff, options)
		} else {
			buffer = await imageToWebpV2(buff)
		}
		await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		.then( response => {
			fs.unlinkSync(buffer)
			return response
		})
	}

	sock.sendVideoAsStickerV2 = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVidV2(buff, options)
		} else {
			buffer = await videoToWebpV2(buff)
		}
		await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		return buffer
	}

	sock.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
	}

	sock.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
	}

	sock.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		let mime = '';
		let res = await axios.head(url)
		mime = res.headers['content-type']
		if (mime.split("/")[1] === "gif") {
			 return sock.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
		}
		let type = mime.split("/")[0]+"Message"
		if (mime === "application/pdf"){
			return sock.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
		}
		if (mime.split("/")[0] === "image"){
			return sock.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
		}
		if (mime.split("/")[0] === "video"){
			return sock.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
		}
		if (mime.split("/")[0] === "audio"){
			return sock.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
		}
	}

	function getTypeMessage(message) {
		const type = Object.keys(message)
		var restype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) || 
			(type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) || 
			type[type.length - 1] || Object.keys(message)[0] 
		return restype
	};

	sock.getFile = async (PATH, save) => {
		let res
		let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
		//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}
		filename = path.join(__filename, '../temp/' + new Date * 1 + '.' + type.ext)
		if (data && save) fs.promises.writeFile(filename, data)
		return {
			res,
			filename,
			size: await getSizeMedia(data),
			...type,
			data
		}
	}

	sock.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
		let type = await sock.getFile(path, true);
		let { res, data: file, filename: pathFile } = type;
		if (res && res.status !== 200 || file.length <= 65536) {
		try {
			throw {
				json: JSON.parse(file.toString())
			};
		} catch (e) {
			if (e.json) throw e.json;
		}
	}
	let opt = {
		filename
	};
	if (quoted) opt.quoted = quoted;
	if (!type) options.asDocument = true;
	let mtype = '',
	mimetype = type.mime,
	convert;
	if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
	else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
	else if (/video/.test(type.mime)) mtype = 'video';
	else if (/audio/.test(type.mime)) {
		convert = await (ptt ? toPTT : toAudio)(file, type.ext);
		file = convert.data;
		pathFile = convert.filename;
		mtype = 'audio';
		mimetype = 'audio/ogg; codecs=opus';
	} else mtype = 'document';
		if (options.asDocument) mtype = 'document';
		delete options.asSticker;
		delete options.asLocation;
		delete options.asVideo;
		delete options.asDocument;
		delete options.asImage;
		let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
		let m;
		try {
			m = await sock.sendMessage(jid, message, { ...opt, ...options });
		} catch (e) {
			console.error(e)
			m = null;
		} finally {
			if (!m) m = await sock.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
			file = null;
			return m;
		}
	}

	sock.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
		return sock.sendMessage(jid, {
			poll: {
				name,
				values,
				selectableCount
			}
		})
	};

	sock.cMod = (jid, copy, text = '', sender = sock.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
		if (isEphemeral) {
			mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
		}
		let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
		if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
		}
		if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === sock.user.id

		return proto.WebMessageInfo.fromObject(copy)
	}

	sock.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		let types = await sock.getFile(path, true)
		let { mime, ext, res, data, filename } = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try { throw { json: JSON.parse(file.toString()) } }
			catch (e) { if (e.json) throw e.json }
		}
		let type = '', mimetype = mime, pathFile = filename
		if (options.asDocument) type = 'document'
		if (options.asSticker || /webp/.test(mime)) {
			let { writeExif } = require('./lib/exif')
			let media = { mimetype: mime, data }
			pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
			await fs.promises.unlink(filename)
			type = 'sticker'
			mimetype = 'image/webp'
		}
		else if (/image/.test(mime)) type = 'image'
		else if (/video/.test(mime)) type = 'video'
		else if (/audio/.test(mime)) type = 'audio'
		else type = 'document'
		await sock.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
		return fs.promises.unlink(pathFile)
	}

	sock.copyNForward = async (jid, message, forceForward = false, options = {}) => {
		let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
		let mtype = Object.keys(message.message)[0]
		let content = await generateForwardMessageContent(message, forceForward)
		let ctype = Object.keys(content)[0]
		let context = {}
		if (mtype != "conversation") context = message.message[mtype].contextInfo
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		}
		const waMessage = await generateWAMessageFromContent(jid, content, options ? {
			...content[ctype],
			...options,
			...(options.contextInfo ? {
				contextInfo: {
					...content[ctype].contextInfo,
					...options.contextInfo
				}
			} : {})
		} : {})
		await sock.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
		return waMessage
	}

	sock.parseMention = (text = '') => {
		return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
	};

	sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		let quoted = message.msg ? message.msg : message
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(quoted, messageType)
		let buffer = Buffer.from([])
		for await(const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		let type = await FileType.fromBuffer(buffer)
		let trueFileName = attachExtension ? ('./temp/' + filename + '.' + type.ext) : './temp/' + filename
		await fs.writeFileSync(trueFileName, buffer)
		return trueFileName
	}

	sock.downloadMediaMessage = async (message) => {
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(message, messageType)
		let buffer = Buffer.from([])
		for await(const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}

		return buffer
	}
 
	return sock
};

const code = fs.readFileSync("./case.js", "utf8");
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
	matches.push(match[1]);
}
global.help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
global.handlers = [];
const handlersDir = path.join(__dirname, 'plugins');
console.log(chalk.white.bold("Memuat plugin..."))
fs.readdirSync(handlersDir).forEach(file => {
	const filePath = path.join(handlersDir, file);
	if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
		const handler = require(filePath);
		global.handlers.push(handler);
		global.help.push(...handler.command)
		console.log(chalk.green(filePath))
	}
});

startHaruka();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow.bold(`\n⚠️ ${__filename} telah diperbarui! ⚠️`));
	console.log(chalk.green("🔄 Silakan restart bot untuk menerapkan perubahan.\n"));
	delete require.cache[file]
	require(file)
});