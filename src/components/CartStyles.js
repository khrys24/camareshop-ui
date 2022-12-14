import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: block;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 5px;
  font-size: 20px;
  // color: #ffffff;
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: -5px;
  right: -5px;
  padding: 0px 7px;
  border-radius: 50px;
  background: #f05454;
  // color: #ffffff;
  font-size: 10px;
  font-weight: 600;
`;

export const CartSideBar = styled.div`
  z-index: 1000;
  width: 400px;
  background: #f2a537;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;
  color: black !important;

  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }

  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -402px;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

export const SideBarHeader = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-transform: uppercase;
  position: relative;
  padding: 15px 0;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: #000000;
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  margin: 20px 0px 19px;
`;

export const CardImage = styled.img`
  flex: 1 1 0%;
  height: 65px;
  width: 65px;
  max-width: 65px;
  border-radius: 36px;
`;

export const CardBody = styled.div`
  flex: 2;
  margin-left: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

export const CardRemove = styled(FontAwesomeIcon)`
    font-size: 16px:
    color: #000000;
    cursor: pointer;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// export const ClearButton = styled.button`
//   width: 50%;
//   padding: 18px 24px;
//   background: #9c27b0;
//   color: #ffffff;
//   cursor: pointer;
//   border: none;
//   font-family: "Varela Round";
// `;
