  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import swal from "sweetalert";
  import { styled } from "@mui/material/styles";
  import { tableCellClasses } from "@mui/material/TableCell";
  import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TextField,
    MenuItem,
    Modal,
    Button,
    Box,
    Grid,
  } from "@mui/material";
  // import { minHeight } from '@mui/system';

  const Order = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
      getOrderList();
    }, []);

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      bgcolor: "background.paper",
      border: "2px solid #9c27b0",
      boxShadow: 24,
      p: 4,
      padding: "0px",
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgb(242, 165, 55)",
        color: theme.palette.common.white,
        padding: "5px",
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: "5px",
      },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    }));

    const orderUpdate = () => {
      update(selectedOrder, "Status Updated!");
    };

    const handleOpen = (order) => {
        axios.get(`${process.env.REACT_APP_API_URL}/orders/items`, {
            params: {
                order_id: order.order_id,
            }
        })
            .then((response) => {
                setOrderItems(response.data);
            }).catch((err) => {
                console.log("error", err);
                swal("Error", err.message, "error");
            });
        setSelectedOrder(order);
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const cancelOrder = (order) => {
        setSelectedOrder(order);
        swal({
            title: "Are you sure to cancel this order?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                order.status = 'cancelled';
                update(order, 'Order has been cancelled!');
            } else {
              swal("Cake it is!", "Let's get the party started again!");
            }
          });
    }

    const update = (order, message) => {
        axios.post(`${process.env.REACT_APP_API_URL}/orders/statuschange`, {
            status: order.status,
            order_id: order.order_id
        })
            .then((response) => {
                handleClose();
                swal(message, "", "success");
                getOrderList();
            })
    }

    const getOrderList = () => {
        const details = JSON.parse(localStorage.getItem("User_Details"));
        setUser(details);

        axios.get(`${process.env.REACT_APP_API_URL}/orders/list`, {
            params: {
                user_id: details.user_id,
                is_admin: details.is_admin
            }
        })
            .then((response) => {
                setOrders(response.data);
            }).catch((err) => {
                console.log("error", err);
                swal("Error", err.message, "error");
            });
    }

    return (
      <div>
        <Typography
          variant="h2"
          sx={{
            marginTop: "100px",
            color: "#ce65cc",
            fontWeight: "bold",
            fontFamily: "Varela Round",
          }}
        >
          Orders
        </Typography>
        <TableContainer
          sx={{ marginTop: "50px", height: "50vh", padding: "0px 90px" }}
        >
          <Table sx={{ fontFamily: "Varela Round" }}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Order ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Contact Number</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
                <StyledTableCell>Zipcode</StyledTableCell>
                {/* <StyledTableCell>Date Delivered</StyledTableCell> */}
                <StyledTableCell>Total</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <StyledTableRow>
                  <StyledTableCell>{order.order_id}</StyledTableCell>
                  <StyledTableCell>{order.name}</StyledTableCell>
                  <StyledTableCell>{order.contact_number}</StyledTableCell>
                  <StyledTableCell>{order.address}</StyledTableCell>
                  <StyledTableCell>{order.city}</StyledTableCell>
                  <StyledTableCell>{order.zipcode}</StyledTableCell>
                  {/* <StyledTableCell>{order.date_delivered}</StyledTableCell> */}
                  <StyledTableCell>{order.total}</StyledTableCell>
                  <StyledTableCell>{order.status}</StyledTableCell>
                  <StyledTableCell
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {user && user.is_admin == "0" ? (
                      order.status == "pending" && (
                        <Button
                          onClick={() => cancelOrder(order)}
                          variant="outlined"
                          color="error"
                        >
                          Cancel
                        </Button>
                      )
                    ) : (
                      <Button
                        onClick={() => handleOpen(order)}
                        sx={{ color: "#ce65cc" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Varela Round",
                padding: "10px",
                backgroundColor: "rgb(242, 165, 55)",
              }}
            >
              Order
            </Typography>
            <Grid
              id="modal-modal-description"
              sx={{ padding: "10px 30px 30px 30px" }}
            >
              <Typography sx={{ mt: 2 }}>
                <b>Order #:</b> {selectedOrder ? selectedOrder.order_id : ""}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <b>Customer name:</b> {selectedOrder ? selectedOrder.name : ""}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <b>Contact Number:</b>{" "}
                {selectedOrder ? selectedOrder.contact_number : ""}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <b>Address:</b> {selectedOrder ? selectedOrder.address : ""}
              </Typography>
              {/* <Typography sx={{ mt: 2 }}>
                              Date Delivered: {selectedOrder ? selectedOrder.date_delivered : ''}
                          </Typography> */}
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#ce65cc",
                  fontWeight: "bold",
                  fontFamily: "Varela Round",
                  marginTop: "15px",
                }}
              >
                Items:
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Product</StyledTableCell>
                      <StyledTableCell>Price</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell>Total</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {orderItems.map((orderItem) => (
                      <StyledTableRow>
                        <StyledTableCell>{orderItem.name}</StyledTableCell>
                        <StyledTableCell>{orderItem.price}</StyledTableCell>
                        <StyledTableCell>{orderItem.quantity}</StyledTableCell>
                        <StyledTableCell>{orderItem.total}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                    <StyledTableRow>
                      <StyledTableCell colSpan={3}>
                        <b>Total</b>
                      </StyledTableCell>
                      <StyledTableCell>
                        <b>{selectedOrder ? selectedOrder.total : 0}</b>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                  paddingTop: "10px",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "10px",
                  }}
                >
                  <Typography sx={{ alignSelf: "center" }}>
                    <b>Status:</b>
                  </Typography>
                  <TextField
                    size="small"
                    id="status"
                    name="status"
                    select
                    label="select"
                    value={selectedOrder ? selectedOrder.status : ""} //cancelled
                    onChange={(e) =>
                      setSelectedOrder({
                        ...selectedOrder,
                        status: e.target.value,
                      })
                    }
                    sx={{ width: "50%", marginLeft: "10px" }}
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </TextField>
                </Grid>
                {/* <Grid sx={{ display: "flex", flexDirection: "row" }}>
                                  <Typography sx={{ alignSelf: "center", marginRight: "10px"}}>
                                      Date Delivered:
                                  </Typography>
                                  <TextField
                                      size='small'
                                      variant='outlined'
                                      label='Date Delivered'
                                      required
                                      sx={{
                                          width: "36%"
                                      }}
                                  />
                              </Grid> */}
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      marginRight: "7px",
                      backgroundColor: "#9c27b0",
                      "&:hover": { backgroundColor: "#ce65cc" },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={orderUpdate}
                    sx={{
                      backgroundColor: "#9c27b0",
                      "&:hover": { backgroundColor: "#ce65cc" },
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  };

  export default Order;
