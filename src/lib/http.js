const request = require("request")

module.exports = function(host, endpoint, method, body, headers) {
	return new Promise(function(resolve, reject) {
		request({
			url: "http://" + host + "/" + endpoint,
			method,
			json: true,
			body,
			headers
		}, (error, response, body) => {
			if (error) return reject(error)
			resolve(body)
		})
	})
}