import ServerlessAPIApp from '../../lib/api/CWServerlessAPIApp'
import resources from "./resources"

const app = ServerlessAPIApp.getApp()

app.registerResources(resources)

export const handler = app.getServerlessHandler()