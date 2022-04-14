import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const ProductItem = (props) => {

    // useDispatch -> to update to reducer state
    // useSelector -> to access the reducer state.

    const dispatch = useDispatch();

    const  {product, isAddedToCart} = props;
   
    return (<div className='col mt-5'>
        <div className='card p-2'>
            <Link to={ { pathname: `brand/${product.brandId}/product/${product.id}`, product:{...product} } }>
                <img src={product.images[0]} alt={'Product Image'} />
            </Link>
            <div className='card-body' style={{fontSize:'0.7rem', textDecoration: 'none'}}>
               {product.title}
            </div>
            <h4 style={{textAlign:'center'}}>${product.price.toFixed(2)}</h4>
            <p className='card-text' style={{fontSize:'0.7rem', textDecoration: 'none'}}>
                {product.description}
            </p>
            <div style={{marginLeft: '50px'}}>
               {isAddedToCart ?  (
                   <button 
                   type="button" 
                   class="btn btn-primary" 
                   onClick={() => dispatch((dispatch) => removeFromCart(dispatch, product))}
               >
                   Remove From Cart
               </button>
               ) : (
                   <button 
                    type="button" 
                    class="btn btn-primary" 
                    onClick={() => dispatch((dispatch) => addToCart(dispatch, product))}
                    >
                   Add to Cart
                </button>
                )
               }
            </div>
        </div>
    </div>);
};

export default ProductItem;



// mt-5: margin-top : 5px
// p-2: padding: 2px