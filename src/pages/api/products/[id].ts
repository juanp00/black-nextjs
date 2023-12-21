import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../../database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query //Busca o parametro passado na url dentro de products

    const product = products.find(prod => prod.id === Number(id))
    res.status(200).json(product)
}