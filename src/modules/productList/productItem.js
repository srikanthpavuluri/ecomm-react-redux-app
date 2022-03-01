import React, {useState} from 'react';

const ProductItem = (props) => {

    const  {product} = props;

    return (<div className='col mt-5'>
        <div className='card p-2'>
            <img src={product.images[0]} alt={'Product Image'} />
            <div className='card-body' style={{fontSize:'0.7rem', textDecoration: 'none'}}>
               {product.title}
            </div>
            <h4 style={{textAlign:'center'}}>${product.price.toFixed(2)}</h4>
            <p className='card-text' style={{fontSize:'0.7rem', textDecoration: 'none'}}>
                {product.description}
            </p>
            <div style={{marginLeft: '50px'}}>
                <button type="button" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>);
};

export default ProductItem;



// mt-5: margin-top : 5px
// p-2: padding: 2px