import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../components/Header';

const users: User[] = [
    { id: 1, name: 'John Doe', role: 'Frontend' },
    { id: 2, name: 'Jane Doe', role: 'Security' },
    { id: 3, name: 'Bob Smith', role: 'DevOps' },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(users);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}