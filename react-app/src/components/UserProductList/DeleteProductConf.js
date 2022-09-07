import { useDispatch } from 'react-redux';
import { removeProduct } from '../../store/product';
import '../ProductDetailpage/AddToCartConfirm.css';

function DeleteProductConf({ onClose, id }) {
    const dispatch = useDispatch();

    const deleteProduct = async (e) => {
        e.preventDefault();
        await dispatch(removeProduct(id))
            .then(() => onClose())
    };

    return (
        <div className='cancel-order-confirmation'>
            <div className='cancel-order-confirm-title'>
                <p>Delete product listing</p>
                <button className='cancel-order-confirm-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <p className='cancel-order-confirm-message'>Are you sure you want to delete this product? This CANNOT be undone.</p>
            <div className='cancel-order-confirm-btns'>
                <button className='cancel-order-cancel-btn' onClick={onClose}>CANCEL</button>
                <button className='cancel-order-confirm-btn' onClick={deleteProduct}>DELETE</button>
            </div>
        </div>
    )
}

export default DeleteProductConf;
