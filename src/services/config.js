import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/'
})