<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { MdCleaningServices } from 'react-icons/md';
import { Button, Form } from "react-bootstrap";
import Card from './Card';
import Data from "../db.json";
import { BsFilterSquare } from 'react-icons/bs';
import { AiFillFormatPainter } from 'react-icons/ai';
import { MdPlumbing } from 'react-icons/md';

const HomeMaid = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [data, setData] = useState(Data.product);

    const filterResult = (catItem) => {
        const result = Data.product.filter((curData) => curData.service === catItem);
        setData(result);
    };

    return (
        <>
            <div className='container'>
                <div className='row' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' style={{ marginLeft: "-3rem", marginTop: "-1.6rem" }}>
                        <div className="filters">
                            <span className="title"> <BsFilterSquare fontSize="30px" /> All Service</span>
                            <hr />
                            <span>
=======

import React from 'react';
// import { Link } from 'react-router-dom'
// import image from "../image/maid11.jpg"
// import image1 from "../imageforday/11.jpg"
// import image2 from "../imageforday/12.jpg"
// import image3 from "../imageforday/13.jpg"
// import image4 from "../imageforday/14.jpg"
// import image6 from "../imageforday/longcookimage3.jpg"
import { useState, useEffect } from 'react';
import { MdCleaningServices } from 'react-icons/md'
import { Button, Form } from "react-bootstrap"
import { CartState } from "../reducer/Context";
import Card from './Card';
import Data from "../db.json"
import { BsFilterSquare } from 'react-icons/bs'
import {AiFillFormatPainter} from 'react-icons/ai'

import {MdPlumbing} from 'react-icons/md'
const HomeMaid = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [data, setData] = useState(Data.product);


    // const {
    //     state: { products },
    //     dispatch,

    // } = CartState();

    const filterResult = (catItem) => {
        const result = Data.product.filter((curData) => {
            return curData.service === catItem;
        });
        setData(result);
    }


    // const allservice = 600;

    // var formatter = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "INR",

    //     // These options are needed to round to whole numbers if that's what you want.
    //     minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //     //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    // });
    return (


        <>
            <div className='container' >
                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' style={{ marginLeft: "-3rem", marginTop: "-1.6rem" }} >
                        <div className="filters" >
                            <span className="title"> <BsFilterSquare fontSize="30px" /> All Service</span>
                            <hr></hr>


                            {/* 
                            <span>



                              <h1>  <Link style={{ textDecoration:"none"}} onClick={() => filterResult('Home Maid')}>Home Maid</Link>  </h1>  
                            </span>
                            <hr></hr> */}

                            <span>



>>>>>>> origin/main
                                <Form.Check
                                    inline
                                    label="Home Maid"
                                    name="group1"
                                    type="radio"
                                    id={`inline-1`}
                                    onClick={() => filterResult('Home Maid')}
<<<<<<< HEAD
=======

>>>>>>> origin/main
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Driver"
                                    name="group1"
                                    type="radio"
                                    id={`inline-3`}
                                    onClick={() => filterResult('Driver')}
<<<<<<< HEAD
                                />
                            </span>
=======



                                />
                            </span>

                         

>>>>>>> origin/main
                            <span>
                                <Form.Check
                                    inline
                                    label="Electrician"
                                    name="group1"
                                    type="radio"
                                    id={`inline-6`}
                                    onClick={() => filterResult('Electrician')}
<<<<<<< HEAD
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="All category"
=======

                                />
                            </span>
                            
                            <span>
                                <Form.Check
                                    inline
                                    label="All catogory"
>>>>>>> origin/main
                                    name="group1"
                                    type="radio"
                                    id={`inline-7`}
                                    onClick={() => setData(Data.product)}
<<<<<<< HEAD
                                />
                            </span>
                            <hr />

                            <span className="title2"> <MdCleaningServices fontSize="30px" /> Cleaning Service</span>
                            <hr />
=======

                                />
                            </span>
                            <hr></hr>

                            <span className="title2">  <MdCleaningServices fontSize="30px" /> Cleaning Service</span>
                            <hr></hr>
>>>>>>> origin/main
                            <span>
                                <Form.Check
                                    inline
                                    label="Full Home Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-8`}
                                    onClick={() => filterResult('Cleaning')}
<<<<<<< HEAD
                                />
                            </span>
                            <span>
=======

                                />
                            </span>
                            <span>

>>>>>>> origin/main
                                <Form.Check
                                    inline
                                    label="Bathroom Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-9`}
                                    onClick={() => filterResult('BathroomCleaning')}
<<<<<<< HEAD
                                />
                            </span>
=======

                                />
                            </span>

>>>>>>> origin/main
                            <span>
                                <Form.Check
                                    inline
                                    label="Kitchen Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-10`}
                                    onClick={() => filterResult('KitchenCleaning')}
<<<<<<< HEAD
=======

>>>>>>> origin/main
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="1 Room Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-11`}
                                    onClick={() => filterResult('Oneroom')}
<<<<<<< HEAD
                                />
                            </span>
                            <hr />

                            <span className="title2"> <AiFillFormatPainter fontSize="30px" /> Painter Service</span>
                            <hr />
=======

                                />
                            </span>


                            <hr></hr>

                            <span className="title2">  <AiFillFormatPainter fontSize="30px" /> Painter Service</span>
                            <hr></hr>

>>>>>>> origin/main
                            <span>
                                <Form.Check
                                    inline
                                    label="Kitchen Painting"
                                    name="group1"
                                    type="radio"
                                    id={`inline-4`}
                                    onClick={() => filterResult('Kitchenpainting')}
<<<<<<< HEAD
=======

>>>>>>> origin/main
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="1 hall"
                                    name="group1"
                                    type="radio"
                                    id={`inline-4`}
                                    onClick={() => filterResult('onehall')}
<<<<<<< HEAD
=======

>>>>>>> origin/main
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Painter"
                                    name="group1"
                                    type="radio"
                                    id={`inline-4`}
                                    onClick={() => filterResult('Painter')}
<<<<<<< HEAD
                                />
                            </span>
                            <hr />

                            <span className="title2"> <MdPlumbing fontSize="30px" /> Plumbing Service</span>
                            <hr />
=======

                                />
                            </span>
                            <hr></hr>
                            <span className="title2">  <MdPlumbing fontSize="30px" /> Plumbing Service</span>
                            <hr></hr>

>>>>>>> origin/main
                            <span>
                                <Form.Check
                                    inline
                                    label="Bathroom Plumbing"
                                    name="group1"
                                    type="radio"
                                    id={`inline-5`}
                                    onClick={() => filterResult('Bathroomplumber')}
<<<<<<< HEAD
=======

>>>>>>> origin/main
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Kitchen Plumbing"
                                    name="group1"
                                    type="radio"
                                    id={`inline-5`}
                                    onClick={() => filterResult('KitchenPlumber')}
<<<<<<< HEAD
=======

>>>>>>> origin/main
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Full Plumber"
                                    name="group1"
                                    type="radio"
                                    id={`inline-5`}
                                    onClick={() => filterResult('Plumber')}
<<<<<<< HEAD
                                />
                            </span>
                            <hr />

                            {/* New Cooking Services Section */}
                            <span className="title2"> <AiFillFormatPainter fontSize="30px" /> Cooking Services</span>
                            <hr />
                            <span>
                                <Form.Check
                                    inline
                                    label="Cook Provider"
                                    name="group1"
                                    type="radio"
                                    id={`inline-12`}
                                    onClick={() => filterResult('cook provider')}
                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Baker"
                                    name="group1"
                                    type="radio"
                                    id={`inline-13`}
                                    onClick={() => filterResult('baker')}
                                />
                            </span>
                            <hr />

                            {/* New Carpenter Services Section */}
                            <span className="title2"> <AiFillFormatPainter fontSize="30px" /> Carpenter Services</span>
                            <hr />
                            <span>
                                <Form.Check
                                    inline
                                    label="Carpenter"
                                    name="group1"
                                    type="radio"
                                    id={`inline-14`}
                                    onClick={() => filterResult('carpenter')}
                                />
                            </span>
                            <hr />

=======

                                />
                            </span>

                            


                            <br></br>
                            <hr></hr>
>>>>>>> origin/main
                            <Button
                                variant="light"
                                style={{ width: "100%" }}
                                className="btn btn-dark"
                                onClick={() => setData(Data.product)}
                            >
                                Clear Filters
                            </Button>
                        </div>
<<<<<<< HEAD
                    </div>

                    <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12'>
                        <div className='row margin4 mx-2' style={{ width: "100%" }}>
                            {data.length > 0 ? (
                                data.map((prod) => (
                                    <Card prod={prod} key={prod.id} />
                                ))
                            ) : (
                                <p>No services available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeMaid;
=======


                    </div>

                    <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 ' >
                        <div className='row margin4 mx-2' style={{ width: "100%" }} >
                            {data.map((prod) => {
                                return (
                                    <>
                                        <Card prod={prod} key={prod.id} />

                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </div>

        </>

    );
}

export default HomeMaid;








>>>>>>> origin/main
