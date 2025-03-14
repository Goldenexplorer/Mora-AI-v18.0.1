const axios = require('axios');

let handler = async (m, { text, usedPrefix, command }) => {
	try {
		if (!text) {
			return m.reply(`📌 *Cara penggunaan:* ${usedPrefix + command} <pertanyaan_anda>\n\n💡 *Contoh:*\n${usedPrefix + command} Apa itu JavaScript?`);
		}

		const prompt = text.trim();
		const { text: responseText } = await fetchBlackboxAI(prompt);

		if (responseText) {
			m.reply(responseText);
		} else {
			m.reply('⚠️ Maaf, tidak ada respons yang diterima dari Blackbox AI.');
		}
	} catch (error) {
		console.error(error);
		m.reply(`❌ Terjadi kesalahan saat memproses pertanyaan Anda. Pesan kesalahan: ${error.message}`);
	}
};

handler.command = ["blackbox", "bbai"];
handler.tags = ["ai"];
handler.help = [
	"blackbox <pertanyaan>",
	"bbai <pertanyaan>"
].map(cmd => `${cmd} *Ajukan pertanyaan kepada Blackbox AI*`);

module.exports = handler;

async function fetchBlackboxAI(prompt) {
	const url = 'https://www.blackbox.ai/api/chat';
	const headers = {
		'authority': 'www.blackbox.ai',
		'accept': '*/*',
		'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
		'content-type': 'application/json',
		'origin': 'https://www.blackbox.ai',
		'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
	};

	const data = {
		"messages": [{ "role": "user", "content": prompt, "id": "54lcaEJ" }],
		"agentMode": {},
		"id": "RDyqb0u",
		"previewToken": null,
		"userId": null,
		"codeModelMode": true,
		"trendingAgentMode": {},
		"isMicMode": false,
		"userSystemPrompt": null,
		"maxTokens": 1024,
		"playgroundTopP": null,
		"playgroundTemperature": null,
		"isChromeExt": false,
		"githubToken": "",
		"clickedAnswer2": false,
		"clickedAnswer3": false,
		"clickedForceWebSearch": false,
		"visitFromDelta": false,
		"isMemoryEnabled": false,
		"mobileClient": false,
		"userSelectedModel": null,
		"validated": "00f37b34-a166-4efb-bce5-1312d87f2f94",
		"imageGenerationMode": false,
		"webSearchModePrompt": true,
		"deepSearchMode": false,
		"domains": null,
		"vscodeClient": false,
		"codeInterpreterMode": false,
		"customProfile": {
			"name": "",
			"occupation": "",
			"traits": [],
			"additionalInfo": "",
			"enableNewChats": false
		},
		"session": null,
		"isPremium": false,
		"subscriptionCache": null,
		"beastMode": false
	};

	try {
		const response = await axios.post(url, data, { headers, responseType: 'stream' });

		let output = '';
		let search = [];

		for await (const chunk of response.data) {
			const chunkStr = chunk.toString();
			output += chunkStr;

			const match = output.match(/\$~~~\$(.*?)\$~~~\$/);
			if (match) {
				search = JSON.parse(match[1]);
				output = output.replace(match[0], '').split('\n\n\n\n')[1];
			}
		}

		return { search, text: output.replace('**', '*').trim() };
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}