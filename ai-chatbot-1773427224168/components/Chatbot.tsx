import axios from 'axios';

interface Message {
    id: number;
    text: string;
    user: string;
}

function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const response = await axios.post('/api/messages', { text: inputValue, user: 'AI Chatbot' });

        setMessages(prevMessages => [...prevMessages, { id: response.data.id, text: inputValue, user: 'AI Chatbot' }]);
        setInputValue('');
    };

    const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="container mt-5">
            <h1>Chatbot</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <b>{message.user}:</b> {message.text}
                    </li>
                ))}
            </ul>
            <input type="text" value={inputValue} onChange={handleInputValueChange} />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default Chatbot;