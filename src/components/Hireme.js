import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { CartState } from "../reducer/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Hireme = () => {
    const formRef = useRef();
    const history = useHistory();
    const [userData, setUserData] = useState({
        name: "",
        id: "",
        email: "",
<<<<<<< HEAD
        phone: "",
        amount: "",
        state:"",
=======
        altEmail: "",  // New field for alternative email
        phone: "",
        altPhone: "",  // New field for alternative phone
        amount: "",
        state: "",
>>>>>>> origin/main
        city: "",
        stime: "",
        date: "",
        etime: "",
        address: "",
<<<<<<< HEAD
        service:"",
=======
        service: "",
>>>>>>> origin/main
    });
    const [total, setTotal] = useState();
    const [service, setService] = useState();
    const {
        state: { cart },
        dispatch,
    } = CartState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    useEffect(() => {
        setService(
            cart.reduce((acc, curr) => acc + String(curr.service) + ":" + String(curr.catagory) + "," ,"")
        );
    }, [cart]);

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAboutPage();
    }, []);

    const postUserData = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

<<<<<<< HEAD
=======
    const convertDateTime = (date, time) => {
        const [hours, minutes] = time.split(':');
        const newDate = new Date(date);
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
        return newDate;
    };

>>>>>>> origin/main
    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                'service_atgjewh', // Replace with your EmailJS service ID
                'template_xxew3mt', // Replace with your EmailJS template ID
                e.target,
                '5dNBwGLVf_4otvCwZ' // Replace with your EmailJS user ID
            );
            console.log('Email successfully sent!', result.status, result.text);
        } catch (error) {
            console.error('There was an error sending the email:', error);
        }
    }

    const submitData = async (event) => {
        event.preventDefault();
<<<<<<< HEAD
        const { name, phone, email, amount, id, city,state, etime, stime, date, address, service } = userData;

        const res = await fetch('/delivery', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, phone, email, amount, id, city, state, stime, etime, date, address, service
            })
        });
        const data = await res.json();

        if (!name || !id || !email || !phone || !amount || !city ||!state || !stime || !etime || !date || !address || !service) {
            toast.error("Please Fill data", {
=======
        const { name, phone, altPhone, email, altEmail, amount, id, city, state, etime, stime, date, address, service } = userData;

        const startDateTime = convertDateTime(date, stime);
        const endDateTime = convertDateTime(date, etime);
        const currentDateTime = new Date();

        const timeDifference = (endDateTime - startDateTime) / (1000 * 60 * 60); // Difference in hours

        if (!name || !id || !email || !phone || !amount || !city || !state || !stime || !etime || !date || !address || !service) {
            toast.error("Please fill in all required fields", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        } else if (startDateTime < currentDateTime || endDateTime < currentDateTime) {
            toast.error("Date and time should not be before the current date and time", {
>>>>>>> origin/main
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        } else if (timeDifference < 1) {
            toast.error("End time must be at least one hour after the start time", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        } else {
<<<<<<< HEAD
            toast.success("Go forward", {
=======
            toast.success("Your booking has been submitted successfully", {
>>>>>>> origin/main
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
            setUserData({ ...userData });
            await sendEmail(event);
<<<<<<< HEAD
        }
    };

=======

            const res = await fetch('/delivery', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, phone, altPhone, email, altEmail, amount, id, city, state, startDateTime: startDateTime.toISOString(), endDateTime: endDateTime.toISOString(), date, address, service
                })
            });
            const data = await res.json();
        }
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

>>>>>>> origin/main
    return (
        <>
            <section className="contactus-section left">
                <div className="container" style={{ marginTop: "1rem" }}>
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-rightside col-12 col-lg-12">
                                    <form method="POST" ref={formRef} onSubmit={submitData}>
                                        <div className="row">
                                            <div className="col-md-12" style={{ marginTop: "2rem", marginBottom: "3rem", color: "#121212" }}>
                                                <h3>BOOK NOW</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>FirstName</p>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control card-5"
                                                    placeholder=""
                                                    value={userData.name}
<<<<<<< HEAD
                                                    
=======
                                                    onChange={postUserData}
>>>>>>> origin/main
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>User ID</p>
                                                <input
                                                    type="text"
                                                    name="id"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.id = userData._id}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>City</p>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={[userData.state, userData.city]}
<<<<<<< HEAD
                                                    
=======
                                                    onChange={postUserData}
>>>>>>> origin/main
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Email</p>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Alternative Email</p>
                                                <input
                                                    type="email"
                                                    name="altEmail"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.altEmail}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Phone Number</p>
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Alt. Phone Number</p>
                                                <input
                                                    type="number"
                                                    name="altPhone"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.altPhone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Amount</p>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.amount = total}
<<<<<<< HEAD
                                                    
=======
                                                    onChange={postUserData}
>>>>>>> origin/main
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
<<<<<<< HEAD
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Address</p>
=======
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Phone Number</p>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.phone}
<<<<<<< HEAD
                                                    
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Email</p>
=======
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Alt. Phone Number</p>
                                                <input
                                                    type="text"
                                                    name="altPhone"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.altPhone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Email ID</p>
>>>>>>> origin/main
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.email}
                                                    onChange={postUserData}
<<<<<<< HEAD
                                                    
                                                />
                                            </div>
                                        </div>
=======
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Alternative Email ID</p>
                                                <input
                                                    type="text"
                                                    name="altEmail"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.altEmail}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Address</p>
>>>>>>> origin/main
                                                <input
                                                    type="text"
                                                    name="address"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
<<<<<<< HEAD
=======

>>>>>>> origin/main
>>>>>>> origin/main
                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Booking Date</p>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    className="form-control"
                                                    placeholder=""
<<<<<<< HEAD
                                                    value={userData.date}
                                                    min={getCurrentDateTime().split('T')[0]}
=======
                                                    value={userData.stime}
<<<<<<< HEAD
=======
                                                    min={getCurrentDateTime().split('T')[1]} // Minimum time set to current time
>>>>>>> origin/main
>>>>>>> origin/main
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Booking Time (Start)</p>
                                                <input
                                                    type="time"
                                                    name="stime"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.stime}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        
                                        
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Booking Time (End)</p>
                                                <input
                                                    type="time"
                                                    name="etime"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.etime}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            
=======
                                                    min={userData.stime} // Minimum time set to start time
>>>>>>> origin/main
                                                    onChange={postUserData}
                                                />
                                            
                                            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/main
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Date</p>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.date}
<<<<<<< HEAD
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Address</p>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
=======
                                                    min={getCurrentDateTime().split('T')[0]} // Minimum date set to current date
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        
>>>>>>> origin/main
                                        <div className="row">
>>>>>>> origin/main
                                            <div className="col-12 col-lg-12 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "26px", fontFamily: "poppins" }}>Service Required</p>
                                                <input
                                                    type="text"
                                                    name="service"
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.service = service}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12" style={{ marginTop: "-2rem" }}>
                                                <button type="submit" className="btn btn-style w-100">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hireme;
<<<<<<< HEAD
=======


>>>>>>> origin/main
    // Razorpay code commented out
    // function loadRazorpay(total) {
    //     const script = document.createElement('script');
    //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    //     script.onerror = () => {
    //         alert('Razorpay SDK failed to load. Are you online?');
    //     };
    //     script.onload = async () => {
    //         try {
    //             const result = await axios.post('/create-order', {
    //                 amount: total + '00',
    //             });
    //             const { amount, id: order_id, currency } = result.data;
    //             const {
    //                 data: { key: razorpayKey },
    //             } = await axios.get('/get-razorpay-key');

    //             const options = {
    //                 key: razorpayKey,
    //                 amount: total,
    //                 currency: currency,
    //                 name: 'example name',
    //                 description: 'example transaction',
    //                 order_id: order_id,
    //                 handler: async function (response) {
    //                     notifysuc();

    //                     const result = await axios.post('/order', {
    //                         amount: amount / 100,
    //                         id: userData._id,
    //                         razorpayPaymentId: response.razorpay_payment_id,
    //                         razorpayOrderId: response.razorpay_order_id,
    //                         razorpaySignature: response.razorpay_signature,
    //                     });
    //                     alert(result.data.msg);

    //                     history.push('./showorder');
    //                     window.location.reload();
    //                 },
    //                 prefill: {
    //                     name: 'example name',
    //                     email: 'email@example.com',
    //                     contact: '111111',
    //                 },
    //                 notes: {
    //                     address: 'example address',
    //                 },
    //                 theme: {
    //                     color: '#80c0f0',
    //                 },
    //             };

    //             const paymentObject = new window.Razorpay(options);
    //             paymentObject.open();
    //         } catch (err) {
    //             alert(err);
    //         }
    //     };
    //     document.body.appendChild(script);
    // }