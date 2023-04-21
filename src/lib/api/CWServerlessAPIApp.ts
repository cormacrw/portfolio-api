import express from 'express'
import serverless from 'serverless-http'
import EndpointI from './types/EndpointI'
import logRequest from './middleware/logRequest'

export default class CWServerlessAPIApp {
    private static instance: CWServerlessAPIApp

    private app

    private constructor () {
        this.app = express()

        this.app.use(express.json())

        this.app.use(logRequest)
    }

    static getApp () {
        if (!this.instance) {
            this.instance = new CWServerlessAPIApp()
        }

        return this.instance
    }

    getServerlessHandler () {
        return serverless(this.app)
    }

    registerResources (resources: Array<EndpointI>) {
        resources.forEach(r => {
            switch(r.method) {
                case 'GET':
                    this.app.get(r.route, r.handler)
                    break
                case 'POST':
                    this.app.post(r.route, r.handler)
                    break
                case 'PATCH':
                    this.app.patch(r.route, r.handler)
                    break
                case 'DELETE':
                    this.app.delete(r.route, r.handler)
                    break
                case 'PUT':
                    this.app.put(r.route, r.handler)
                    break
            }
        })
    }
}