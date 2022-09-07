import { Link } from 'react-router-dom';
import './imageScrollSec.css';

function LivingRoomImageScroll() {

    const scrolll = () => {
        var left = document.querySelector(".scroll-living-images");
        left.scrollBy(-350, 0);
    }

    const scrollr = () => {
        var right = document.querySelector(".scroll-living-images");
        right.scrollBy(350, 0);
    }

    return (
        <div className='main-scroll-div2'>
            <div>
                <button className='scroll-btn' onClick={scrolll}><i className="fa-solid fa-angle-left"></i></button>
            </div>
            <div className='scroll-living-images'>
                <Link to='/products/categories/decor' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/1422/001/004.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/decor' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/020.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/furniture' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/1422/001/001.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/furniture' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/016.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/mirrors-wall-art' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/011.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/decor' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/012.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/furniture' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/014.jpg' alt='img-scroll' />
                </Link>
                <Link to='/products/categories/decor' className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/017.jpg' alt='img-scroll' />
                </Link>
            </div>
            <div>
                <button className='scroll-btn' onClick={scrollr}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default LivingRoomImageScroll;
