import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const priceId = 'price_1M2HUbER2BGNjftzZeQDIJmi';
    const success_url = `${process.env.NEXT_URL}/success`
    const cancel_url = `${process.env.NEXT_URL}/`

    const checkOutSession = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ],
    })

    return res.status(201).json({
        checkOutUrl: checkOutSession.url,
    })
}