import React, { useRef } from "react";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";

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

export default function Cart({
  isToggle,
  setToggle,
  carts,
  removeProductFromCart,
  clearCart,
}) {
  const $sideBarRef = useRef();

  // # handle the onclick outside
  useOnClickOutside($sideBarRef, () => setToggle(false));

  console.log(carts);

  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <Icon icon={faShoppingCart} />
        <CartCount>{carts.length}</CartCount>
      </Wrapper>

      <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>shopping cart</SideBarHeader>
        {carts.length === 0 ? (
          <EmptyCart>Empty Cart</EmptyCart>
        ) : (
          carts.map(({ product, quantity }) => (
            <Card key={product.product_id}>
              <CardImage src={product.image} />
              <CardBody>
                <CardRow>
                  <CardTitle>{product.name}</CardTitle>
                  <CardRemove
                    icon={faTimes}
                    onClick={() => removeProductFromCart(product.product_id)}
                  />
                </CardRow>
                <CardRow>
                  <CardTitle>
                    QTY ({quantity}) - ${product.price * quantity}
                  </CardTitle>
                </CardRow>
              </CardBody>
            </Card>
          ))
        )}

        {carts.length !== 0 && (
          <ClearButton onClick={() => clearCart()}>Clear Cart</ClearButton>
        )}
      </CartSideBar>
    </>
  );
}
