import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
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
    Grid
} from '@mui/material';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getOrderList();
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #9c27b0',
        boxShadow: 24,
        p: 4,
    };

    const handleOpen = (order) => {
        // if (user.is_admin == '0' && order.status == 'pending') {
        //     axios.delete('http://localhost:3001/orders/cancelorder')
        //         .then(
        //             swal("Are you sure you want to cancel this Order?", "", "warning")
        //         )

        // } else {
            axios.get('http://localhost:3001/orders/items', {
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
        // }
        setSelectedOrder(order);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const orderUpdate = () => {
        axios.post('http://localhost:3001/orders/statuschange', {
            status: selectedOrder.status,
            order_id: selectedOrder.order_id
        })
            .then((response) => {
                handleClose();
                swal("Status Updated!", "", "success");
                getOrderList();
            })
    }

    const getOrderList = () => {
        const details = JSON.parse(localStorage.getItem("User_Details"));
        setUser(details);

        axios.get('http://localhost:3001/orders/list', {
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
            <Typography variant="h2"
                sx={{
                    marginTop: "100px",
                    color: "#ce65cc",
                    fontWeight: "bold",
                    fontFamily: "Varela Round"
                }}
            >
                Orders
            </Typography>
            <TableContainer sx={{ marginTop: "50px", height: "50vh" }}>
                <Table sx={{ fontFamily: "Varela Round" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Zipcode</TableCell>
                            <TableCell>Date Delivered</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center"
                                }}
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map((order) => (
                                <TableRow>
                                    <TableCell>{order.order_id}</TableCell>
                                    <TableCell>{order.name}</TableCell>
                                    <TableCell>{order.contact_number}</TableCell>
                                    <TableCell>{order.address}</TableCell>
                                    <TableCell>{order.city}</TableCell>
                                    <TableCell>{order.zipcode}</TableCell>
                                    <TableCell>{order.date_delivered}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center"
                                    }}
                                    >
                                        {(user && user.is_admin == '0') ?
                                            <Button variant="outlined" color="error">
                                                Cancel
                                            </Button> :
                                            <Button onClick={() => handleOpen(order)} sx={{ color: "#ce65cc" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </Button>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))
                        }
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Order
                    </Typography>
                    <Grid id="modal-modal-description">
                        <Typography sx={{ mt: 2 }}>
                            Order #: {selectedOrder ? selectedOrder.order_id : ''}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            User: {selectedOrder ? selectedOrder.name : ''}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Contact Number: {selectedOrder ? selectedOrder.contact_number : ''}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Address: {selectedOrder ? selectedOrder.address : ''}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Date Delivered: {selectedOrder ? selectedOrder.date_delivered : ''}
                        </Typography>
                        <Typography variant='h6'
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "#ce65cc",
                                fontWeight: "bold",
                                fontFamily: "Varela Round"
                            }}
                        >
                            Items:
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        orderItems.map((orderItem) => (
                                            <TableRow>
                                                <TableCell>{orderItem.name}</TableCell>
                                                <TableCell>{orderItem.price}</TableCell>
                                                <TableCell>{orderItem.quantity}</TableCell>
                                                <TableCell>{orderItem.total}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    <TableRow>
                                        <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell>{selectedOrder ? selectedOrder.total : 0}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                            <Grid sx={{ display: "flex", flexDirection: "row"}}>
                                <Typography sx={{ alignSelf: "center" }}>
                                    Status:
                                </Typography>
                                <TextField
                                    id="status"
                                    name="status"
                                    select
                                    label="select"
                                    value={selectedOrder ? selectedOrder.status : ""} //cancelled
                                    onChange={(e) => setSelectedOrder({ ...selectedOrder, status: e.target.value })}
                                    sx={{ width: "50%", marginLeft: "10px" }}
                                >
                                    <MenuItem value="pending">Pending</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                    <MenuItem value="cancelled">Cancelled</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "10px"
                            }}>
                                <Button
                                    variant='contained'
                                    onClick={orderUpdate}
                                    sx={{
                                        backgroundColor: "#9c27b0",
                                        "&:hover": { backgroundColor: "#ce65cc" }
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
    )
}

export default Order;
