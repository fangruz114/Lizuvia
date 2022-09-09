import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCarts } from '../../store/cart';
import './AddToCartConfirm.css';

function AddToCartConfirm({ onClose, product, quantity }) {
    const dispatch = useDispatch();
    const carts = useSelector(state => Object.values(state.cart));

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch])

    const totalItem = (items) => {
        let count = 0;
        for (let item of items) {
            count += Number(item.quantity);
        }
        return count;
    }

    const subtotal = (items) => {
        let total = 0;
        for (let item of items) {
            let sub = Number(item.quantity) * Number(item.product.price);
            total += sub;
        }
        return total.toFixed(2);
    }

    return (
        <div className="cart-confirmation-modal">
            <div className='cart-confirmation-modal-close'>
                <button className='cart-confirmation-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className='cart-confirmation-content'>
                <div className='cart-confirmation-left'>
                    <p className='cart-confirmation-left-title'>Added to your cart</p>
                    <div className='cart-confirmation-item'>
                        <img src={product?.images[0].url} alt='cart-cnfirmation-item' onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} />
                        <div className='cart-confirmation-item-info'>
                            <p className='cart-confirmation-item-name'>{product?.name}</p>
                            <p>Item: {product?.id}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Price: ${product.price} each</p>
                        </div>
                    </div>
                </div>
                <div className='cart-confirmation-right'>
                    <p className='cart-confirmation-right-title'>Your Cart: {totalItem(carts)} item(s)</p>
                    <p className='cart-confirmation-amount-total'>Subtotal: ${carts ? subtotal(carts) : 0}</p>
                    <p className='cart-confirmation-not-include-warning'>(Subtotal does not include shipping and processing, gift wrap, discounts or tax)</p>
                    <button className='continue-shopping' onClick={onClose}>CONTINUE SHOPPING</button>
                    <Link to='/cart'>VIEW SHOPPING CART</Link>
                    <p className='cart-confirmation-review-warning'>You’ll still have a chance to review your order.</p>
                </div>
            </div>
        </div>
    )
}

export default AddToCartConfirm;
