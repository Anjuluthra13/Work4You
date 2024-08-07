import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbarhori from './Navbarhori';
import { deldata, updatedata } from '../reducer/ContextProvider';

const Users = () => {
    const [getuserdata, setUserdata] = useState([]);
    const [alertMessage, setAlertMessage] = useState(""); // State for alert message
    const { updata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);

    const getdata = async () => {
        const res = await fetch("/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            console.log("Error fetching data");
        } else {
            setUserdata(data);
            console.log("Data fetched successfully");
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    const deleteuser = async (id) => {
        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        if (res2.status === 422 || !deletedata) {
            console.log("Error deleting user");
        } else {
            console.log("User deleted");
            setDLTdata(deletedata);
            setAlertMessage(`User ${deletedata.name} deleted successfully!`); // Set alert message
            getdata();
        }
    };

    return (
        <>
            {updata && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{updata.name}</strong> Updated successfully!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            {alertMessage && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {alertMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertMessage("")}></button>
                </div>
            )}

            <div className='container' style={{ fontFamily: "Poppins" }}>
                <div className='row' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.2rem", marginTop: "-1.6rem" }}>
                        <Navbarhori />
                    </div>

                    <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12'>
                        <br />

                        <div className='row mx-2' style={{ width: "100%" }}>
                            <br />
                            <br />
                            <br />
                            <div className='card-8 rounded-border'>
                                <h1 className='mt-4'><i className="fa fa-user" style={{ fontSize: "40px" }}></i> User Details</h1>
                                <hr />
                            </div>
                            <br /><br /><br /><br />
                            <br />

                            <div className="card-5 mt-4 rounded-border">
                                <div className="container">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className="table-active">
                                                <th scope="col"><h4>Username</h4></th>
                                                <th scope="col"><h4>Email</h4></th>
                                                <th scope="col"><h4>Number</h4></th>
                                                <th scope="col"><h4>City</h4></th>
                                                <th scope="col"><h4>User ID</h4></th>
                                                <th scope="col"><h4>Operations</h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getuserdata.map((element, id) => (
                                                <tr key={element._id}>
                                                    <td style={{ fontSize: "17px" }}>{element.name}</td>
                                                    <td style={{ fontSize: "17px" }}>{element.email}</td>
                                                    <td style={{ fontSize: "17px" }}>{element.phone}</td>
                                                    <td style={{ fontSize: "17px" }}>{element.city}</td> {/* Display City */}
                                                    <td style={{ fontSize: "17px" }}>{element._id}</td>
                                                    <td className='d-flex'>
                                                        <Link to={`update/${element._id}`}>
                                                            <button type="button" className="btn btn-dark" style={{ width: "5rem" }}>
                                                                Edit
                                                            </button>
                                                        </Link>
                                                        <button className='btn btn-danger mx-2' onClick={() => deleteuser(element._id)} style={{ width: "5rem" }}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
