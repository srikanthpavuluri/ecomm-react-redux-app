import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './cart.css';
import { removeFromCart } from '../../redux/actions/cartActions';

const CartList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartData.items);
   
    return  <div className='container' style={{marginTop: '100px'}}>
           <table className={styles.cartList}>
            <tr><td>Sl</td>
                <td>Product Name</td>
                <td></td>
            </tr> 
            {cartItems.map((cartItem, i) => {
                return (
                    <tr>
                        <td>{i+1}</td>
                        <td>{cartItem.title}</td>
                        <td onClick={() => dispatch((dispatch) => removeFromCart(dispatch, cartItem))}> 
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
};

export default CartList;