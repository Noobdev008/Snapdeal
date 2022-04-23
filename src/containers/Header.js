import "./Header.css";
import logo from "../assets/images/sdLatestLogo.svg"
import cart from "../assets/images/cart.png"
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Link } from "react-router-dom";





const Navbar = () => {

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => option,
    });

    // Sample options for search box
    const myOptions = ['Men', 'Women', 'Jwellery', 'Shirts', 't-shirts'];

    // <Autocomplete
    //                         style={{ width: 500 }}
    //                         freeSolo
    //                         filterOptions={filterOptions}
    //                         options={myOptions}
    //                         renderInput={(params) => (
    //                             <TextField {...params}
    //                                 variant="outlined"
    //                                 label="Search Box"
    //                             />
    //                         )}
    //                     />



    return (
        <>
            <div className="headdiv">
                <div className="sub_headdiv">
                    <div className="head-details">
                        <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                    </div>

                </div>
            </div>
            <hr />
            <div className="maindiv">
                <div className="sub-div">
                    <div className="logo">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div className="inputbox">
                        <input type="text" placeholder="Search products & brands" name="search" filterOptions={filterOptions}  options={myOptions}
                            renderInput={(params) => (
                                <TextField {...params}
                                    variant="outlined"
                                    label="Search Box"
                                />
                            )} />
                        <button type="search">Search</button>
                    </div>
                    <div className="login">
                        <p className="cart" >Cart</p>
                      <Link to={'/'}>
                      <p className="cart">Logout</p>
                      </Link> 
                       
                      
                       
                    </div>
                </div>

            </div>

        </>
    )
}



export default Navbar
