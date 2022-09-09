import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCarts } from '../../store/cart';
import { editProduct } from '../../store/product';
import './ProductForm.css';

function EditProductForm({ onClose, product }) {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(product.name);
    const [category, setCategory] = useState(product.category);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [url1, setUrl1] = useState(product.images[0].url)

    const updateProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            category,
            description,
            price,
            url1,
        };
        const data = await dispatch(editProduct(product.id, newProduct)).then(() => dispatch(getCarts()));

        if (data) {
            setErrors(data);
        } else {
            setErrors([]);
            onClose();
        }
    };

    return (
        <div className="edit-product-form-page">
            <div className='edit-product-form-close-btn-wrapper'>
                <button className='edit-product-model-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className='product-form-title'>
                <h3>Update your product</h3>
                <p>Update your product below to reflect most recent products' information and prices</p>
            </div>
            <form onSubmit={updateProduct}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind} className="form-errors">{error}</div>
                    ))}
                </div>
                <div className="product-form-element">
                    <label htmlFor='name'>Name <span className='required'>(required)</span></label>
                    <input
                        name="name"
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength='100'
                    />
                </div>
                <div className="product-form-element">
                    <label htmlFor='category'>Category <span className='required'>(required)</span></label>
                    <select
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value='Furniture'>Furniture</option>
                        <option value={`Outdoor & Garden`}>{`Outdoor & Garden`}</option>
                        <option value='Bedding'>Bedding</option>
                        <option value='Bath'>Bath</option>
                        <option value={`Pillows & Decor`}>{`Pillows & Decor`}</option>
                        <option value={`Art & Mirrors`}>{`Art & Mirrors`}</option>
                        <option value='Halloween'>Halloween</option>
                    </select>
                </div>
                <div className='product-form-element product-form-description'>
                    <label htmlFor='description'>Description <span className='required'>(required)</span></label>
                    <textarea
                        rows='6'
                        cols='74'
                        value={description}
                        maxLength='2000'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='product-form-element'>
                    <label htmlFor='price'>Unit Price <span className='required'>(required)</span></label>
                    <input
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min='0.01'
                        max='9999'
                        step='0.01'
                    />
                </div>
                <button className='product-form-btn' type="submit">SAVE</button>
            </form>
        </div>
    )
}

export default EditProductForm;
