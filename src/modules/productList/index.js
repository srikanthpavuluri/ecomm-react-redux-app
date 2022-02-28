import React, { useState } from 'react';
import LeftSide  from '../../components/LeftSide';
import ProductItem from './productItem';

const ProductList = () => {
    
    const color = {color: '#1E90FF'}; //Blue

    const [columnCount, setColumnCount] = useState(3);
    const layoutClassName = `row row-cols-${columnCount}`;

    const productsData = [{
        id: 12,
        name: "iPhone",
    }, {
        id: 123,
        name: "Samsung",
    },  {
        id: 124,
        name: "OnePlus",
    }, {
        id: 12,
        name: "iPhone",
    },  {
        id: 124,
        name: "OnePlus",
    }, {
        id: 12,
        name: "iPhone",
    }, {
        id: 123,
        name: "Samsung",
    },  {
        id: 124,
        name: "OnePlus",
    }, ];

    return (
        <div className='container' style={{ 
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <LeftSide />    {/* 25% * */}
            <div style={{width:'75%'}}>   {/* 75 */}
                <div className='alert alert-secondary' style={{ display:'flex', justifyContent:"flex-end"}}>
                    <div>
                        <span>Change Layout:</span>
                        <span className='layout-button'
                            style={columnCount === 3 ? color : {color:'grey'}}
                            onClick={() => setColumnCount(3)}>
                                <i className='fas fa-square'></i>
                                <i className='fas fa-square'></i>
                                <i className='fas fa-square'></i>
                        </span>
                        <span className='layout-button'
                            style={columnCount === 4 ? color : {color:'grey'}}
                            onClick={() => setColumnCount(4)}>
                                <i className='fas fa-square'></i>
                                <i className='fas fa-square'></i>
                                <i className='fas fa-square'></i>
                                <i className='fas fa-square'></i>
                        </span>
                    </div>
                </div>
                <div>
                    <div className={layoutClassName}>
                        {productsData.map(product => <ProductItem data={product} />)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductList;