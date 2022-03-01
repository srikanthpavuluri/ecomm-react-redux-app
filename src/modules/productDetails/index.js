import React, {useState} from 'react';

const ProductDetails = (props) => {
    const product = {
        "title": "Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)",
        "category": "phone",
        "images": [
            "https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1", 
            "https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1", 
            "https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1", 
            "https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1"
        ],
        "brandId": 1,
        "price": 4241.499828399639,
        "cpu": "1.3GHz Apple A6",
        "camera": "8mp (3264x2448)",
        "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        "weight": "132 grams (4.7 ounces) with battery",
        "display": "4.0 326 pixel density",
        "battery": "1480 mAh",
        "memory": "16GB, 32GB and RAM 1 GB",
        "id": 1,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    };;

    return (
        <div className='container' 
        style={{
            height:'90vh', 
            display:'flex', 
            justifyContent:'center',
            alignItems: 'center',
            marginTop: '10%'
        }}>
            <div>
                <div className='big-name'>
                    <img src={product.images[0]} />
                </div>
                <div className='small-images' style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '30px'}}>
                    {product.images.map((productImg, index) => {
                        return (
                            <div>
                                <img
                                    src={productImg}
                                    key={index}
                                    alt="Product image"
                                    style={{
                                        width:"30px",
                                        border: "1px solid grey",
                                        cursor: "pointer",
                                        padding: '3px'
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='product-content'>
                <h3>{product.title}</h3>
                <h3 style={{color: 'grey'}}>${product.price.toFixed(2)}</h3>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;