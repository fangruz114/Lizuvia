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
                <button class='scroll-btn' onClick={scrolll}><i className="fa-solid fa-angle-left"></i></button>
            </div>
            <div className='scroll-images'>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/007.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/005.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/004.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/006.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/008.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/009.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/003.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0882/001/010.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202235/0901/001/001.png' alt='img-scroll' />
                </div>
            </div>
            <div>
                <button class='scroll-btn' onClick={scrollr}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default ImageScrollSec;
