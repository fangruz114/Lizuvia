import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cancelOrder, getOrders } from '../../store/order';
import './CancelOrderConfirm.css';

function CancelorderConfirm({ onClose, id }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const cancel = async (e) => {
        e.preventDefault();
        await dispatch(cancelOrder(id))
            .then(() => dispatch(getOrders()))
            .then(() => history.push('/orders'))
    };

    return (
        <div className='cancel-order-confirmation'>
            <div className='cancel-order-confirm-title'>
                <p>Cancel order</p>
                <button className='cancel-order-confirm-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <p className='cancel-order-confirm-message'>Are you sure you want to cancel your order? This CANNOT be undone.</p>
            <div className='cancel-order-confirm-btns'>
                <button className='cancel-order-cancel-btn' onClick={onClose}>CANCEL</button>
                <button className='cancel-order-confirm-btn' onClick={cancel}>DELETE</button>
            </div>
        </div>
    )
}

export default CancelorderConfirm;
