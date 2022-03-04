import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = (props) => {
    const { key, product } = props.location
    const [activeImage, setActiveImage] = useState(product.images[0]);

     console.log(props.location, 'location');
     const {brandId, productId} = useParams();
     console.log(brandId, 'brandId')
     console.log(productId, 'productId')

    const updateMainProductImage = (e) => {
      //  console.log(e.target.src);
        const productImage = e.target.src;
        setActiveImage(productImage);
    };

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
                    <img src={activeImage} alt="product image"/>
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
                                   // onClick={updateMainProductImage}   //without parenthesis
                                   onClick={(e) => setActiveImage(e.target.src)}
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
                    <p style={{margin: '0'}}>
                        <b>Description</b>
                        <p style={{margin: '0'}}>{product.description}</p>
                    </p>
                </div>
                <div>
                    <p style={{margin: '0'}}>
                        <b>Brand</b>
                        <p style={{margin: '0'}}>{'Yet to do'}</p>
                    </p>
                </div>
                <div>
                    <p style={{margin: '0'}}>
                        <b>Camera</b>
                        <p style={{margin: '0'}}>{product.camera}</p>
                    </p>
                </div>
                <div>
                    <p style={{margin: '0'}}>
                        <b>CPU/Memory</b>
                        <p style={{margin: '0'}}>{product.cpu}</p>
                        <p style={{margin: '0'}}>{product.memory}</p>
                    </p>
                </div>
                <div>
                    <p style={{margin: '0'}}>
                        <b>Display</b>
                        <p style={{margin: '0'}}>{product.display}</p>
                        <p style={{margin: '0'}}>{product.weight} | {product.size}</p>
                    </p>
                </div>
                <div>
                    <p style={{margin: '0'}}>
                        <b>Battery</b>
                        <p style={{margin: '0'}}>{product.battery}</p>
                        <p style={{margin: '0'}}>{product.memory}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;