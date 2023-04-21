import { Request, Response } from "express"

export default interface EndpointI {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
    route: string
    handler: (req: Request, res: Response) => void
}