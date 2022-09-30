import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate  } from 'react-router-dom';
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';

import "../css/Checkout.css";

const useStyles = makeStyles({
    input: {
      width: "98%",
      height: "150px",
      border: "1px solid #9c27b0",
      
      
    },
  });
  
  
function Checkout()
{

    const navigate = useNavigate ();
    if(!localStorage.getItem('cartItems')){
        navigate('/products');
        swal("Warning","Empty Cart","error");
    }
    
    // const [loading, setLoading] = useState(true);
    // const [cart, setCart] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [checkoutInput, setCheckoutInput] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });

    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem("User_Details")));
    }, [])

    const handleInput = (e) => {
        e.persist();
        setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value });
    }

  
    const getCities = async () => {
        const { data } = await axios.get("http://localhost:3001/users/cities");
        console.log("cities: ", data);
        setCities(data);
      };
    

    useEffect(() => {
        getCities();
      }, []);
    

    const [cities, setCities] = useState([]); //City list from Api
    const [user, setUser] = useState({
      first_name: "",
      last_name: "",
      phone_number: "",
      address: "",
      city: "",
      country: "",
      email: "",
      password: "",
      confirm_password: "",
      error_list: {},
    });
  

    const onInputChange = (e, field) => {
        setUser({ ...user, [field]: e.target.value });
      };
    
      
    const classes = useStyles();

    const [cartItems, setCartItems] = useState([]);
    var totalCartPrice = 0;
    var totalQty = 0;
 


    useEffect(() => {
      let items = localStorage.getItem("cartItems");
  
      if(items) {
        setCartItems(JSON.parse(items)); 
      }
    }, [])

    const submitOrder = (e) => {
        e.preventDefault();
        setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value });

        let items = JSON.parse(localStorage.getItem("cartItems"));
        let total = 0;

        for(let i in items) {
            items[i]['total'] = items[i].price * items[i].quantity;
            total += items[i]['total'];
        }

        var data = {
            user_id: userDetails.user_id,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: user.city,
            state: checkoutInput.state,
            total: total,
            items: items
        };

        console.log(data);

        axios
            .post(`${process.env.REACT_APP_API_URL}/orders/placeorder`, data)
            .then((res) => {
                localStorage.removeItem("cartItems");
            swal("Order Submitted!", "Thank you for ordering!", "success");
                navigate('/');
                console.log(res.params);
            setCheckoutInput({
                firstname: "",
                lastname: "",
                phonenumber: "",
                address: "",
                city: "",
                country: "",
                email: "",
                error_list: {},
        });
      })
      .catch((err) => {
        console.log("error:", err);
        setUser({ ...user, error_list: err.response.data });
      });
       
    }


    return (
        <div>
            <div className="row checkout" onSubmit={submitOrder}>

            <div className="col-md-7">
                <div className="card">
                    <form>
                            <div className="card-header">
                                <h4>Contact Information</h4>
                            </div>

                            <div className="card-body">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label > First Name</label>
                                        <input type="text" name="firstname" 
                                        onChange={handleInput} 
                                        value={userDetails ? userDetails.first_name : ''} 
                                        className="form-control inputCheckout" 
                                        required
                                        aria-readonly/>
                                        <small className="text-danger">
                                            {/* {error.firstname} */}
                                            </small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label> Last Name</label>
                                        <input type="text" name="lastname" 
                                        onChange={handleInput} 
                                        value={userDetails ? userDetails.last_name : ''} 
                                        className="form-control inputCheckout"
                                        required 
                                        aria-readonly/>
                                        <small className="text-danger">
                                            {/* {error.lastname} */}
                                            </small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label> Phone Number*</label>
                                        <input type="text" name="phone" 
                                        onChange={handleInput} 
                                        value={checkoutInput.phone} 
                                        className="form-control"
                                        required />
                                        <small className="text-danger">
                                            {/* {error.phone} */}
                                            </small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label>Email Address</label>
                                        <input type="email" name="email" 
                                        onChange={handleInput} 
                                        value={userDetails ? userDetails.email : ''} 
                                        className="form-control" 
                                        required
                                        aria-readonly/>
                                        <small className="text-danger">
                                            {/* {error.email} */}
                                            </small>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label style={{ fontSize: "18px" }}>Shipping Address*</label>
                                        <textarea rows="1" name="address" 
                                        onChange={handleInput} 
                                        value={checkoutInput.address} 
                                        className="form-control inputShip"
                                        required></textarea>
                                        <small className="text-danger">
                                            {/* {error.address} */}
                                            </small>
                                    </div>
                                </div>

                                <TextField 
                                    className={`form-control `}
                                    id="dropdownCity"
                                    select
                                    label="City"
                                    value={user.city}
                                    name="city"
                                    required
                                    fullWidth
                                    // InputProps={{
                                    //     className: classes.input,
                                    //   }}
                                    onChange={(e) => onInputChange(e, "city")}
                                 
                                    sx={{
                                        mb: 1,
                                        mx: 1,
                                        mt: 2 ,
                                        width: "98%",
                                        textAlign: "left",
                                        height: "60px"
                                    }}
                                >
                                {cities.map((city) => (
                                <MenuItem key={city.city_id} value={city.city_id}>
                                    {city.name}
                                </MenuItem>
                                ))}
                                </TextField>
                                
                                
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label>Country</label>
                                        <input type="text" name="state" 
                                        onChange={handleInput} 
                                        value="PHILIPPINES" 
                                        sx={{
                                            width: "100%"
                                        }}
                                        className="form-control" aria-readonly/>
                                        <small className="text-danger">
                                            {/* {error.state} */}
                                            </small>
                                    </div>
                                </div>
                                                            
                                <div className="col-md-12">
                                    <div className="form-group text-end">
                                        <button type="submit" className="btn btn-primary mx-1" 
                                        // onClick={ (e) => submitOrder() }
                                        >Place Order</button>
                                       
                                    </div>
                                </div>
                            </div>
                                                            
                            </div>

                    </form>
                    
                </div>
            </div>

            <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={4} className="tableTitle">YOUR ORDERS</th>
                        </tr>
                    </thead>
                    <thead className='tableHead'>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map( (cartItem, index) => {
                            totalCartPrice += cartItem.price * cartItem.quantity;
                            totalQty += (parseInt(cartItem.quantity));
                            
                            return (
                                <tr key={index}>
                                    <td>{cartItem.name}</td>
                                    <td>₱{cartItem.price}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td>₱{cartItem.price * cartItem.quantity}</td>
                                </tr>
                            )
                        })}
                        <tr className='tableHead'>
                            <td colSpan="2" className="text-end fw-bold">Sub Total</td>
                            <td className="text-center fw-bold ">{totalQty}</td>
                            <td className="text-center fw-bold totalCartPrice">₱{totalCartPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    )
}


export default Checkout;
