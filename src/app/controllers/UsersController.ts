import { Request, Response } from "express"

let db = []

class UsersController {

    async create(req: Request, res: Response) {
        let body = await req.body

        db.push(body)

        return res.json({ message: "create success" })
    }

    async getAll(req: Request, res: Response) {
        const body = await db

        if (!body.length) {
            return res.json({ message: "without data" })
        }

        return res.json(body)
    }
}

export default new UsersController