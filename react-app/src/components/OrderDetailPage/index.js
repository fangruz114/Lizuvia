import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, getOrders } from '../../store/order';
import OrderItemDetails from './OrderItemDetails';
import { Modal } from '../../context/Modal';
import CancelorderConfirm from './CancelOrderConfirm';
import './OrderDetailPage.css';

function OrderDetailPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orders = useSelector(state => state.orders.orders);
    const items = useSelector(state => state.orders.orderProducts);
    const [edit, setEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getOrders())
            .then(() => dispatch(getOrderDetails(id)))
    }, [dispatch, id]);

    const subtotal = (items) => {
        let total = 0;
        for (let item of items) {
            let sub = Number(item.quantity) * Number(item.productPrice);
            total += sub;
        }
        return total.toFixed(2);
    };

    const convertDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const yr = date.getFullYear();
        return `${month} ${day}, ${yr}`;
    };

    const verifyTimeForEditing = (timeString) => {
        const time = new Date(timeString);
        time.setHours(time.getHours() + 5);
        console.log(time)
        if (time < new Date()) {
            return false
        } else return true;
    }

    const closeEdit = () => {
        setEdit(false);
    };

    return (
        <div className='order-details-wrapper'>
            {(orders && items) && (
                <div className='order-details-page'>
                    <div className='order-detail-top-buttons'>
                        <Link to='/orders'>{`< All orders`}</Link>
                        {verifyTimeForEditing(orders[id]?.createdAt) ? (
                            <div className='order-detail-edit-cancel-buttons'>
                                <button onClick={() => setEdit(!edit)} className='order-detail-edit-button'>{edit ? `SAVE` : `EDIT ORDER`}</button>
                                {edit ? null : (
                                    <>
                                        <button className='order-detail-cancel-button' onClick={() => setShowModal(true)}>CANCEL ORDER</button>
                                        {showModal && (
                                            <div className='cancel-order-confirm-modal'>
                                                <Modal onClose={() => setShowModal(false)} id={id}>
                                                    <CancelorderConfirm onClose={() => setShowModal(false)} id={id} />
                                                </Modal>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ) : null}
                    </div>
                    <div className='order-detail-page-title'>
                        <p>Order Details</p>
                        {verifyTimeForEditing(orders[id]?.createdAt) ? null : (
                            <p className='order-detail-change-warning'>Orders can only be edited or cancelled within 5 hours of placing it.</p>
                        )}
                    </div>
                    <div className='order-detail-main'>
                        <div className='order-detail-info'>
                            <div className='order-detail-number-date'>
                                <p>Order Number: <span>{orders[id]?.id}</span></p>
                                <p>Order Date: <span>{convertDate(orders[id]?.createdAt)}</span></p>
                            </div>
                            <div className='order-detail-item-list'>
                                <p className='order-detail-item-list-title'>Item(s)</p>
                                {Object.values(items).length > 0 && Object.values(items).map(item => (
                                    <OrderItemDetails key={item.id} item={item} onClose={closeEdit} editStatus={edit} />
                                ))}
                            </div>
                        </div>
                        <div className='order-detail-order-summary'>
                            <p className='order-detail-summary-title'>Order Summary</p>
                            <div className='order-detail-summary-merchandise'>
                                <p>Merchandise:</p>
                                <p>${subtotal(Object.values(items))}</p>
                            </div>
                            <div className='order-detail-summary-shipping'>
                                <p>Shipping:</p>
                                <p>$0.00</p>
                            </div>
                            <div className='order-detail-summary-total'>
                                <p>Order Total:</p>
                                <p>${subtotal(Object.values(items))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderDetailPage;
