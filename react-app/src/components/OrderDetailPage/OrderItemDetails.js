import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editOrder, removeItem } from '../../store/order';

function OrderItemDetails({ item, onClose, editStatus }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    const [errors, setErrors] = useState([]);

    const updateQuantity = async (e) => {
        e.preventDefault();

        const newQty = { quantity };
        const data = await dispatch(editOrder(item.id, newQty));

        if (data) {
            setErrors(data);
        } else {
            setErrors([])
        }
    }

    const deleteItem = async (e) => {
        e.preventDefault();
        const data = await dispatch(removeItem(item.id))
        if (data) {
            setErrors(data);
        } else {
            setErrors([])
        }
    }

    return (
        <div className='order-detail-item-ind'>
            <div className='order-detail-item-img'>
                <img src={item.imageUrl} alt='order-detail-ind-item-display' />
                <button onClick={deleteItem}>Remove</button>
            </div>
            <div className='order-detail-item-ind-info'>
                <Link className='order-detail-ind-item-name' to={`/products/${item.productId}`}>{item.productName}</Link>
                <p className='order-detail-ind-item-sku'>SKU: {item.productId}</p>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div key={ind} className="form-errors">{error}</div>
                    ))}
                </div>
                {!editStatus && (
                    <div className='order-detail-ind-price-qty-total'>
                        <p>Price: ${item.productPrice}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ${(Number(item.productPrice) * Number(item.quantity)).toFixed(2)}</p>
                    </div>
                )}
                {editStatus && (
                    <div className='order-detail-edit-qty-wrapper'>
                        <div className='order-detail-edit-price'>
                            <p>Price</p>
                            <p>${item.productPrice}</p>
                        </div>
                        <div className='order-detail-edit-qty'>
                            <input
                                type='number'
                                step='1' min='0' max='99'
                                maxLength='2'
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}
                            />
                            <button onClick={updateQuantity}>Update</button>
                        </div>
                        <div className='order-detail-edit-total'>
                            <p>Total</p>
                            <p>${(Number(item.productPrice) * Number(item.quantity)).toFixed(2)}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className='order-detail-ind-item-review-btn'>
                <button>WRITE A REVIEW</button>
            </div>
        </div >
    )
}

export default OrderItemDetails;
