import React from 'react';
import LeftSide  from '../../components/LeftSide';

const ProductList = () => {
    return (
        <div className='container' style={{ 
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'flex-start'
        }}>
            <LeftSide />
        </div>
    )
};

export default ProductList;