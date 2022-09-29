import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

import useOnClickOutside from "./hooks/useOnClickOutside";

import {
  Wrapper,
  Icon,
  CartCount,
  CartSideBar,
  EmptyCart,
  SideBarHeader,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardRemove,
  CardRow,
  ClearButton,
} from "./CartStyles";
import { Typography, TextField, Button } from "@mui/material";

export default function Cart({
  isToggle,
  setToggle,
  carts
}) {
  const $sideBarRef = useRef();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let items = localStorage.getItem("cartItems");

    if(items) {
      setCartItems(JSON.parse(items)); 
    }
  }, [])
  

  // # handle the onclick outside
  useOnClickOutside($sideBarRef, () => setToggle(false));

  const onQtyChange = (quantity, index) => {
    let items = [...cartItems];
    items[index].quantity = quantity;

    setCartItems(items); 
    localStorage.setItem("cartItems", JSON.stringify(items));   
  }

  const removeItem = (index) => {

    swal({
      title: "Are you sure you want to remove this item from your cart?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        let items = [...cartItems];
        items.splice(index, 1);

        setCartItems(items);
        localStorage.setItem("cartItems", JSON.stringify(items));
      }
    });
  }

  const clearCart = () => {
    swal({
      title: "Are you sure you want to remove all items from your cart?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setCartItems([]);
        localStorage.removeItem("cartItems");
      }
    });
  };

  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <Icon icon={faShoppingCart} />
        <CartCount>{cartItems.length}</CartCount>
      </Wrapper>

      <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"} sx={{backgroundColor: "#f2a537", minWidth: "400px"}}>
        <SideBarHeader>
          <Typography
            sx={{
              color: "#ce65cc",
              fontWeight: "bold",
              fontFamily: "Varela Round"
            }}>
            shopping cart
          </Typography>
        </SideBarHeader>
        {cartItems.length === 0 ? (
          <EmptyCart>
            <Typography 
              sx={{
                color: "#ce65cc",
                fontWeight: "bold",
                fontFamily: "Varela Round"
              }}>
              Empty Cart
            </Typography>
          </EmptyCart>
        ) : (
          cartItems.map(( cartItem, index ) => (
            // <Typography>{cartItem.name}</Typography>
            <Card key={cartItem.product_id}>
              <CardImage src={process.env.REACT_APP_IMAGE_URL + '/' + cartItem.image} /> 
              <CardBody>
                <CardRow>
                  <CardTitle>{cartItem.name}</CardTitle>
                  <CardRemove
                    icon={faTimes}
                    onClick={() => removeItem(index)}
                  />
                </CardRow>
                <CardRow>
                  <Typography sx={{marginTop: "10px"}}>
                      ₱{cartItem.price}
                  </Typography>
                  <CardTitle>
                    <TextField
                      type='number'
                      size='small'
                      sx={{ width: '80px'}}
                      value={cartItem.quantity}
                      onChange={(e) => onQtyChange(e.target.value, index)}
                    />
                  </CardTitle>
                </CardRow>
              </CardBody>
            </Card>
          ))
        )}

        {cartItems.length !== 0 && (
          <Button
            onClick={() => clearCart()}
            sx={{
              width: "50",
              padding: "18px 24px",
              backgroundColor: "#9c27b0",
              "&:hover": { backgroundColor: "#ce65cc" },
              color: "#ffffff",
              cursor: "pointer",
              border: "none",
              fontFamily: "Varela Round",
              margin: "5px",
            }}
          >
              Clear Cart
          </Button>         
        )}

      {cartItems.length !== 0 && (
        <Link to='/checkout'>
        <Button
            
            sx={{
              width: "50",
              padding: "18px 24px",
              backgroundColor: "#9c27b0",
              "&:hover": { backgroundColor: "#ce65cc" },
              color: "#ffffff",
              cursor: "pointer",
              border: "none",
              fontFamily: "Varela Round",
              margin: "5px",
            }}
          >
              Proceed to checkout
          </Button>      </Link>
             
        )}

      </CartSideBar>
    </>
  );
}