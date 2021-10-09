export default function(name, callback) {
	this.emitter.on(name, callback)
}