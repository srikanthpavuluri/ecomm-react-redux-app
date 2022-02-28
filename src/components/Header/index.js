import React from "react";
import { Link } from "react-router-dom";
import './header.css';

// Functional Component
const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-secondary mb-5">
                <div className="container">
                    {/* <Link className="navbar-brand" to="/"> */}
                       <div className="logo">E-comm</div>
                    {/* </Link>    */}
                    <i className="fas fa-shopping-cart"></i>
                    <span
                        className="badge bg-container"
                        style={{
                            display: "inline-block",
                            position: "absolute",
                            borderRadius: "50%",
                            width: "20px",
                            fontSize: "10px",
                            textAlign: "10px",
                            lineHeight: "12px"
                        }}
                    >
                        10
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Header;