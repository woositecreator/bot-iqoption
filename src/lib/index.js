const API = require("./api")
const WebSocket = require("./WebSocket")
const Http = require("./http")

/* eslint-disable import/no-anonymous-default-export */
export default async function({ email, password }) {
    const websocket = new WebSocket()
    await websocket.init()
    
    const api = new API(websocket, Http)
    await api.login(email, password)
    await api.connect()
    await api.timeSync()
    api.heartbeat()
    api.setBalance("PRACTICE")

    return api
}