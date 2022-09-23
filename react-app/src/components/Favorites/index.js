import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFavors, updateFavor } from '../../store/favorite';
import './Favor.css';

function Favor({ id }) {
    const dispatch = useDispatch();
    const favors = useSelector(state => Object.values(state.favorites));
    // const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        dispatch(getFavors());
    }, [dispatch]);

    const checkFavor = () => {
        if (!favors) return false;
        const productFav = favors.filter(favor => favor.productId === +id);
        if (productFav.length > 0) return true;
        else return false;
    };

    return (
        <>
            <button className='favor-btn' onClick={() => dispatch(updateFavor(id))}>{checkFavor() ?
                (<i className="fa-solid fa-heart"></i>) :
                (<i className="fa-regular fa-heart"></i>)}
            </button>
            {/* {showMenu && (

            )} */}
        </>
    )
}

export default Favor;
