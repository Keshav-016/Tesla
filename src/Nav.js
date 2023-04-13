import React from "react"
import { FaTimes } from "react-icons/fa";
import {useRef} from "react"
export default function Nav() {
    const navRef=useRef();
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <div className="temp">
            <nav className="nav-title">
                Until March 2023, new Model 3 and Model Y vehicles qualify for li  $7,500 federal tax credit for eligible buyers. <a  href="https://www.tesla.com/support/incentives">Learn More</a>
            </nav>
            <nav className="nav-box">
                <div>
                    <img src="https://drive.google.com/uc?export=view&id=1TY958X3So3YdILRWkwSNgzQoRRhrQ0Io" className="nav-logo" alt="not present" />
                </div>

                <div className="nav-product">
                    <p>Model S</p>
                    <p>Model 3</p>
                    <p>Model X</p>
                    <p>Model Y</p>
                    <p>Solar Roof</p>
                    <p>Solar Panels</p>
                </div>
                <div className="nav-menu">
                    <div>Shop</div>
                    <div>Account</div>
                    <header>
                    <div onClick={showNavbar} className="dropdown-button">Menu
                    </div>
                        <ul className="dropdown-list " ref={navRef}>
                            <button onClick={showNavbar} className="nav-close-btn">
					          <FaTimes /></button>
                            <li >Existing Inventory</li>
                            <li >Used Inventory</li>
                            <li >Trade-In</li>
                            <li >Demo Drive</li>
                            <li >Insurance</li>
                            <li >Cybertruck</li>
                            <li >Roadster</li>
                            <li >Semi</li>
                            <li >Charging</li>
                            <li >Powerwall</li>
                            <li >Commercial Energy</li>
                            <li >Utilities</li>
                            <li >Find Us</li>
                            <li >Support</li>
                            <li >Investor Relations</li>
                            <li >United States</li>
                        </ul>
                    </header>
                </div>
            </nav>
        </div>
    )
}