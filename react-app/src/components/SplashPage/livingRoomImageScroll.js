import './imageScrollSec.css';

function LivingRoomImageScroll() {

    const scrolll = () => {
        var left = document.querySelector(".scroll-images");
        left.scrollBy(-350, 0);
    }

    const scrollr = () => {
        var right = document.querySelector(".scroll-images");
        right.scrollBy(350, 0);
    }

    return (
        <div className='main-scroll-div2'>
            <div>
                <button class='scroll-btn' onClick={scrolll}><i className="fa-solid fa-angle-left"></i></button>
            </div>
            <div className='scroll-images'>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/1422/001/004.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/020.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/1422/001/001.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/016.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/011.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/012.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/014.jpg' alt='img-scroll' />
                </div>
                <div className='scroll-image-child2'>
                    <img className="scroll-child" src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/017.jpg' alt='img-scroll' />
                </div>
            </div>
            <div>
                <button class='scroll-btn' onClick={scrollr}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default LivingRoomImageScroll;
