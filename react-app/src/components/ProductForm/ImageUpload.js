import React, { useState } from 'react';
import './ImageUpload.css';

function ImageUpload({ images, setImages }) {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [urls, setUrls] = useState([])
    const [urlsValidationErrors, setUrlsValidationErrors] = useState([]);
    const [showImagesErrors, setShowImagesErrors] = useState(false);

    // useEffect(() => {
    //     const errors = [];
    //     if (urls.length === 0) errors.push("Images are required");
    //     setUrlsValidationErrors(errors);
    // }, [urls])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlsValidationErrors([]);
        if (images.length >= 5) {
            const errors = [...urlsValidationErrors];
            errors.push('You have reached maximum number of images allowed.')
            setUrlsValidationErrors(errors);
        } else {
            setShowImagesErrors(true);
            const formData = new FormData();
            formData.append("image", image);

            setImageLoading(true);

            const res = await fetch('/api/products/addImages', {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                setImageLoading(false);
                const newUrls = [...urls];
                newUrls.push(data.url);
                setUrls(newUrls);
                setImages(newUrls);
                setImage(null);
            }
            else {
                setImageLoading(false);
                const data = await res.json();
                setUrlsValidationErrors([data.errors])
            }
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleRemove = (url) => {
        const newUrls = urls.filter(ele => ele !== url);
        setUrls(newUrls);
        setImages(newUrls);
        setUrlsValidationErrors([]);
    }

    return (
        <div className='image-upload-wrapper'>
            <>
                {showImagesErrors && urlsValidationErrors.map((error, idx) => (
                    <li key={idx} className='form-errors'>{error}</li>
                ))}
            </>
            <div className="image-upload-sec">
                <input
                    id='file-upload'
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />

                <button className="upload-picture-button" onClick={handleSubmit}>Upload</button>
                {(imageLoading) && <p>Loading...</p>}
            </div>
            <div className="upload-picture-image-container">
                {urls.map((url, idx) =>
                    <div className='existing-uploaded-images-wrapper' key={idx}>
                        <button className="remove-image-button" onClick={() => handleRemove(url)}>X</button>
                        <img className="existing-uploaded-images" alt='uploaded-images' src={url} />
                    </div>
                )}
            </div>
        </div>

    )
};

export default ImageUpload;
