import './footer.css';

function Footer() {
    return (
        <div className="home-page-footer">
            <div className="home-page-about">
                <a
                    href="https://github.com/fangruz114/Lizuvia"
                    className="source-code"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <p>Source Code</p>
                </a>
                <a href="https://github.com/fangruz114/Lizuvia"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <div className="connect-with-us-container">
                <p className="connect-with-us">Connect with me</p>
                <div className="linkedin-container">
                    <a
                        href="https://www.linkedin.com/in/fangru-zhou-6937934a/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                        <p className="developer-name">Fangru Zhou</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
