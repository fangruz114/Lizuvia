import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/order';
import './OrderHistoryPage.css';

function OrderHistoryPage() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch]);

    const convertDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const yr = date.getFullYear();
        return `${month} ${day}, ${yr}`;
    }

    return (
        <div className='order-history-wrapper'>
            <div className='order-history-page'>
                <div className='order-history-title'>
                    <h3>Orders</h3>
                    <p>You can edit your ordered items or cancel your order within <span>5 hours</span> after it's placed.</p>
                    <p>No change can be made after 5 hours of placing it.</p>
                    <p>You can always place a second order for any additional items you want.</p>
                </div>
                <div className='order-history-order-list'>
                    {orders && Object.values(orders).map(order => (
                        <div key={order.id} className='order-history-ind-order'>
                            <div className='order-history-ind-order-info'>
                                <div className='order-history-ind-number-date'>
                                    <p className='order-history-ind-order-number'>Order Number: {order.id}</p>
                                    <p className='order-history-ind-order-date'>Order Date: {convertDate(order.createdAt)}</p>
                                </div>
                                <Link to={`/orders/${order.id}`}>VIEW ORDER DETAILS</Link>
                            </div>
                            <div className='order-history-ind-order-image-list'>
                                {order.orderProducts && order.orderProducts.map(product => (
                                    <img key={product.id} src={product.imageUrl} alt='order-img-list' onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryPage;
