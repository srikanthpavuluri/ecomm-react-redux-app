import React, { useState } from 'react';
import LeftSide  from '../../components/LeftSide';
import ProductItem from './productItem';
import ProductListData from './sampleData';

const ProductList = () => {
    const {phones: products}  = ProductListData;
    const [fitleredProducts, setFitleredProducts] = useState(products)
    const color = {color: '#1E90FF'}; //Blue

    const [columnCount, setColumnCount] = useState(3);
    const layoutClassName = `row row-cols-${columnCount}`; // row row-cols-3 | row row-cols-4

    const filterProductsBySelectedBrands = (selectedBrands) => {
        if (selectedBrands.length > 0) {
            const updatedProducts = products.filter(product => selectedBrands.includes(product.brandId));
            setFitleredProducts(updatedProducts);
        } else {
            setFitleredProducts(products);
        };
    };

    console.log(fitleredProducts, 'fitleredProducts');

    return (
        <div className='container' style={{ 
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <LeftSide 
                updateSelectedBrands={
                    (selectedBrands) => filterProductsBySelectedBrands(selectedBrands)
                }
            />    {/* 25% * */}
            <div style={{width:'75%'}}>   {/* 75 */}
                <div className='alert alert-secondary' 
                    style={{ display:'flex', justifyContent:"flex-end"}}>
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
                        {fitleredProducts.map(item => <ProductItem product={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductList;