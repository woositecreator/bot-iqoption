// const WebSocket = require("ws")
const Settings = require("../settings")

module.exports = function() {
	const {
		protocol,
		host,
		port,
		path
	} = Settings.WEBSOCKET.GATEWAY

	this.socket = new WebSocket(protocol + "://" + host + ":" + port + "/" + path)

	this.socket.onmessage = message => {
		//MODS
		const payload = message.data;
		//
		message = JSON.parse(payload) //message to payload
		this.emitter.emit(message.name, message)
	}

	return new Promise((resolve, reject) => {
		this.socket.onopen = resolve
		this.socket.onerror = reject
	})
}