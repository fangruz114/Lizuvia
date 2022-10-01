import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getFavors, updateFavor, resetFavors } from '../../store/favorite';
import './Favor.css';

function Favor({ id }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const favors = useSelector(state => Object.values(state.favorites));
    // const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (user) dispatch(getFavors());
        else dispatch(resetFavors());
    }, [dispatch, user]);

    const checkFavor = () => {
        if (!favors) return false;
        const productFav = favors.filter(favor => favor.productId === +id);
        if (productFav.length > 0) return true;
        else return false;
    };

    const favorite = async (e) => {
        e.preventDefault();
        if (user) dispatch(updateFavor(id));
        else history.push('/login');
    }

    return (
        <>
            <button className='favor-btn' onClick={favorite}>{checkFavor() ?
                (<i className="fa-solid fa-heart"></i>) :
                (<i className="fa-regular fa-heart"></i>)}
            </button>
            {/* {showMenu && (

            )} */}
        </>
    )
}

export default Favor;
