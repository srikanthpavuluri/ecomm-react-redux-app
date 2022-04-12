import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeftSide  from '../../components/LeftSide';
import ProductItem from './productItem';
import { fetchProducts } from '../../redux/actions/productActions';

const color = {color: '#1E90FF'}; //Blue

const ProductList = () => {
    const products = useSelector((state) => state.productsData.products);
    const cartItems = useSelector((state) => state.cartData.items);
    console.log(cartItems, 'cartItems');
    const dispatch = useDispatch();

    const [fitleredProducts, setFitleredProducts] = useState(products); // excute for first time is mounted.
    
    const [columnCount, setColumnCount] = useState(3);
    const layoutClassName = `row row-cols-${columnCount}`; // row row-cols-3 | row row-cols-4

    useEffect(() => {
        dispatch(fetchProducts);    // API call is initiated once component is mounted .
    }, []);

    useEffect(() => {
        setFitleredProducts(products);   // code will execute when the change in dependency
    }, [products]);


    const filterProductsBySelectedBrands = (selectedBrands) => {
        if (selectedBrands.length > 0) {
            const updatedProducts = products.filter(product => selectedBrands.includes(product.brandId));
            setFitleredProducts(updatedProducts);
        } else {
            setFitleredProducts(products);
        };
    };

    console.log(products, 'products');

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


// ProductList is mounted we should request an API call to get the products.

