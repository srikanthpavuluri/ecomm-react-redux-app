import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './header.css';

// Functional Component
const Header = () => {
    const cartItems = useSelector((state) => state.cartData.items);
   
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-secondary mb-5">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                       <div className="logo">E-comm</div>
                    </Link>    
                    <Link to="/cart"> 
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <span
                        className="badge bg-container"
                        style={{
                            display: "inline-block",
                            position: "relative",
                            borderRadius: "50%",
                            width: "20px",
                            fontSize: "16px",
                            textAlign: "10px",
                            lineHeight: "12px"
                        }}
                    >
                        {cartItems.length}
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Header;