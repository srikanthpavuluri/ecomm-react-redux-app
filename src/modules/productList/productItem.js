import React from 'react';

const ProductItem = (props) => {
    return <div style={{
        width: '250px', 
        height: '250px', 
        border: '1px red solid', 
        margin: '10px', 
        padding:'10px'
    }}>
        Product Name:{props.data.name}
    </div>
};

export default ProductItem;