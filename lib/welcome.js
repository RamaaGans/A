const fs = require("fs");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
module.exports = async (conn, msg) => {
	require("moment").locale("id");
	let groupData = await conn.groupMetadata(msg.id);
	let participant = msg.participants;
	let dataLeft = db.cekDatabase("left", "id", msg.id) || { id: "" };
	let dataWelcome = db.cekDatabase("welcome", "id", msg.id) || { id: "" };
	for (let i of participant) {
		let ppimg;
		try {
			ppimg = await conn.profilePictureUrl(i, "image");
		} catch {
			ppimg = config.thumb;
		}
		if (msg.action == "add") {
			await conn.sendMessage(msg.id, {
				image: { url: ppimg },
				withTag: true,
				caption: `Welcome @${i.split("@")[0]} in grup ${groupData.subject}\n${readmore}\n${groupData.desc} `,
				footer: `Rama GamTeNk`,
					templateButtons: [
						//{ urlButton: { displayText: "GC BOT", url: "http://bit.ly/Bot-Wa" } },
						//{ urlButton: { displayText: "Downloader", url: "https://downloader.rzkyfdlh.tech" } },
						//{ quickReplyButton: { displayText: "SC BOT", id: "#script" } },
						{ quickReplyButton: { displayText: `OKE \n\n Aku emang anak haram 🥺🥺`, id: "#dah" } }],
					
					/*dataWelcome.teks
						.replace("@ownergc", `${groupData.owner.split("@")[0]}`)
						.replace(
							"@creation",
							require("moment")(new Date(parseInt(groupData.creation) * 1000)).format(
								"DD MMM YYYY HH:mm:ss"
							)
						)
						.replace("@user", `@${i.split("@")[0]}`)
						.replace("@desc", groupData.desc ? groupData.toString() : "no description")
						.replace("@subject", groupData.subject) +
					`${
						dataWelcome.lastUpdate
							? `\n\n*Last Modified:* ${require("moment")(dataWelcome.lastUpdte).format(
									"dddd, DD/MM/YYYY"
							  )}`
							: ""
					}`,*/
			});
		} else if (msg.action == "remove") {
			await conn.sendMessage(msg.id, {
				image: { url: ppimg },
				withTag: true,
				caption: `Leave @${i.split("@")[0]} from ${groupData.subject} `
					/*dataLeft.teks
						.replace("@ownergc", `${groupData.owner.split("@")[0]}`)
						.replace(
							"@creation",
							require("moment")(new Date(parseInt(groupData.creation) * 1000)).format(
								"DD MMM YYYY HH:mm:ss"
							)
						)
						.replace("@user", `@${i.split("@")[0]}`)
						.replace("@desc", groupData.desc ? groupData.desc.toString() : "no description")
						.replace("@subject", groupData.subject) +
					`${
						dataLeft.lastUpdate
							? `\n\n*Last Modified:* ${require("moment")(dataLeft.lastUpdte).format("dddd, DD/MM/YYYY")}`
							: ""
					}`,*/
			});
		}
	}
};
