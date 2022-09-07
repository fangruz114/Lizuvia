import { Link } from 'react-router-dom'
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className='not-found-page'>
            <p className='not-found-page-title'>So sorry, we can't find the page you're looking for.</p>
            <p className='not-found-page-subtitle'>If you are looking for a specific product, it might be discontinued.</p>
            <Link to='/products'>
                <img src='https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202141/1804/068/352.jpg' alt='404-display' />
            </Link>
        </div>
    )
}

export default PageNotFound;
