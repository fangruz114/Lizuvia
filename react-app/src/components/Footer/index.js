import './footer.css';

function Footer() {
    return (
        <div className="home-page-footer">
            <div className="home-page-about">
                <a
                    href="https://github.com/fangruz114/Lizuvia"
                    className="source-code"
                >
                    <p>Source Code</p>
                </a>
                <a href="https://github.com/fangruz114/Lizuvia">
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
                    </a>
                    <p className="developer-name">Fangru Zhou</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
