import { Link } from 'react-router-dom';
import ImageScrollSec from './imageScrollSec';
import LivingRoomImageScroll from './livingRoomImageScroll';
import './splashPage.css';

function HomePage() {

    return (
        <div className='main-page'>
            <ImageScrollSec />
            <div className='cozy-season-sec'>
                <p>The Season of Cozy</p>
                <Link to='/sign-up'>Sign Up to Shop</Link>
            </div>
            <img className='living-room-essentials' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202234/1188/001/001.jpg' alt='living-room-essentials' />
            <LivingRoomImageScroll />
            <img className='homepage-subtitle' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/010.jpg' alt='subtitle' />
            <img className='fall-bed' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/1146/001/003.jpg' alt='fall-bed' />
            <div className='two-bedding'>
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/034.jpg' alt='bedding-1' />
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/037.jpg' alt='bedding-1' />
            </div>
            <img className='conversation-starters' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202234/0929/001/002.jpg' alt='conversation-starters' />
            <div className='throw-cabinet'>
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/030.jpg' alt='bedding-1' />
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/026.jpg' alt='bedding-1' />
            </div>
            <div className='decorating-must-have'>
                <div className='left'>
                    <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/038.jpg' alt='decorating-left' />
                </div>
                <div className='right'>
                    <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/028.jpg' alt='decorating-right-top' />
                    <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/013.jpg' alt='decorating-right-bottom' />
                </div>
            </div>
            <img className='home-for-holidays' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/003.jpg' alt='home-for-holidays' />
            <div className='two-halloween'>
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/047.jpg' alt='bedding-1' />
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/036.jpg' alt='bedding-1' />
            </div>
            <img className='room-for-all' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/043.jpg' alt='room-for-all' />
            <div className='two-dining'>
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/044.jpg' alt='bedding-1' />
                <img src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/033.jpg' alt='bedding-1' />
            </div>
            <img className='fireside-lounge' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202233/0861/001/045.jpg' alt='fireside-lounge' />
        </div >
    )
}

export default HomePage;
