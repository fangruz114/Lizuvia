import { Link } from 'react-router-dom';
import './imageScrollSec.css';

function ImageScrollSec() {

    const scrolll = () => {
        var left = document.querySelector(".scroll-images");
        left.scrollBy(-350, 0);
    }

    const scrollr = () => {
        var right = document.querySelector(".scroll-images");
        right.scrollBy(350, 0);
    }

    return (
        <div className='main-scroll-div'>
            <div>
                <button className='scroll-btn' onClick={scrolll}><i className="fa-solid fa-angle-left"></i></button>
            </div>
            <div className='scroll-images'>
                <Link to='/products/categories/furniture' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/iT1hn8y.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/outdoor' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/PoLrvSy.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/furniture' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/HjzA5WR.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/furniture' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/0bKUh4b.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/decor' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/UonZHHR.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/decor' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/xpGGZIG.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/bath' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/53mnipN.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/decor' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/Kkrjzuq.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products' className='scroll-image-child'>
                    <img className="scroll-child" src='https://i.imgur.com/h5SyJ6G.png' alt='img-scroll' />
                </Link>
            </div>
            <div>
                <button className='scroll-btn' onClick={scrollr}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div >
    )
}

export default ImageScrollSec;
