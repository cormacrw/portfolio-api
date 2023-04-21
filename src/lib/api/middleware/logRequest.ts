import { NextFunction, Request, Response } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
    console.log('Incoming request!')
    console.log(req.path)

    next()
}