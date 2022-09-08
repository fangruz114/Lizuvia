import { Modal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import DeleteProductConf from './DeleteProductConf';
import { useState } from 'react';
import EditProductForm from '../ProductForm/EditProductForm';

function UserProductInd({ product }) {
    const [showConfirmationModel, setShowConfirmationModel] = useState(false);
    const [showEditProductModel, setShowEditProductModel] = useState(false);

    return (
        <div className='user-products-ind' key={product.id}>
            <div className='user-product-img'>
                <Link to={`/products/${product.id}`}>
                    <img src={product.images[0].url} alt='user-product-display' />
                </Link>
            </div>
            <div className='user-product-info'>
                <Link to={`/products/${product.id}`}>
                    <p className='user-product-name'>{product.name}</p>
                </Link>
                <p className='user-product-number'>Item #: {product.id}</p>
                <p>${product.price}</p>
            </div>
            <div className='user-product-edit-delete-btn'>
                <button className='user-product-edit-btn' onClick={() => setShowEditProductModel(true)}>EDIT</button>
                {showEditProductModel && (
                    <div className='edit-product-form-modal'>
                        <Modal onClose={() => setShowEditProductModel(false)} product={product}>
                            <EditProductForm onClose={() => setShowEditProductModel(false)} product={product} />
                        </Modal>
                    </div>
                )}
                <button className='user-product-delete-btn' onClick={() => setShowConfirmationModel(true)}>DELETE</button>
                {showConfirmationModel && (
                    <div className='delete-product-confirm-modal'>
                        <Modal onClose={() => setShowConfirmationModel(false)} id={product.id}>
                            <DeleteProductConf onClose={() => setShowConfirmationModel(false)} id={product.id} />
                        </Modal>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserProductInd;
