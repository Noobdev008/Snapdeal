import "./Header.css";
import logo from "../assets/images/sdLatestLogo.svg"
import cart from "../assets/images/cart.png"
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import item from '../redux/actions/productsActions'






const Navbar = () => {
    const state = useSelector((state) => state.addItems)
    const history = useHistory()
    const myOptions = ['Men', 'Women', 'Jwellery', 'Shirts', 't-shirts'];
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => option,
    });

    // Sample options for search box


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

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/men');

    };



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
                        <Autocomplete className="input"
                            style={{ width: 500 }}
                            freeSolo
                            filterOptions={filterOptions}
                            options={myOptions}
                            renderInput={(params) => (
                                <TextField {...params}
                                    variant="outlined"
                                    label="Search Box"
                                />
                            )}
                        />
                        <button type="search" onSubmit={handleSubmit} >Search</button>
                    </div>
                    <div className="login">
                        <Link to={'/product/cart'}>
                            <button className="cart" >Cart({state.length})</button>
                        </Link>
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
