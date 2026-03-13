import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/" passHref>
                    <a className="navbar-brand">AI Chatbot</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/frontend" passHref>
                                <a className="nav-link active" aria-current="page">Frontend</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/security" passHref>
                                <a className="nav-link">Security</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/devops" passHref>
                                <a className="nav-link">DevOps</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;