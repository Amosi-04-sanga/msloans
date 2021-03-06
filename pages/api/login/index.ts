import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'


export default async function (req: NextApiRequest, res: NextApiResponse) {

    const { email, password } = req.body
  const KEY = process.env.KEY

    if (!req.body) {
        res.statusCode = 404
        res.end("invalid credentials")
        return
    }

    res.json({
        token: jwt.sign({
            email,
            user: email === process.env.EMAIL && password === process.env.PASSWORD
        }, KEY )
    })


}

