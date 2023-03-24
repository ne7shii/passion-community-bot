// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchWhiteListCount } from '../../utils/discord'

type Data = {
    count: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader('Cache-Control', 's-maxage=30');
    res.status(200).json({ count: await fetchWhiteListCount() })
}
