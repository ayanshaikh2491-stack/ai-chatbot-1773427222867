import { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '../../../components/Chatbot';

const messages: Message[] = [
    { id: 1, text: 'Hello!', user: 'AI Chatbot' },
    { id: 2, text: 'Hi!', user: 'User' },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { text, user } = req.body;
        const newMessage = { id: messages.length + 1, text, user };
        messages.push(newMessage);
        res.status(201).json(newMessage);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}