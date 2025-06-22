import React from "react";
import API from "../Api/api";
import { useNavigate } from "react-router-dom";

const handleRegister: async () => {
    const data = {
        username  = enterdName,
        email = enterdEmail,
        password = enterdPassword
    };
    try {
        const res = await API.post("/register", data);
        console.log("✅ Registered:", res.data);
    } catch (err) {
        console.error("❌ Register error:", err);
    }
};

const Register: React.FC = () => {
    const Navigate = useNavigate();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 pt-5">
                    <h1 className="text-light mt-3">Create yor account</h1>
                </div>
                <div className="col-md-6 pt-5">
                    <div className="container-xl bg-light rounded pt-4 pb-4 shadow ms-3">
                        <h2 className="text-center">
                            Sign Up
                        </h2>
                        <div className="mb-3">
                            <label className="form-input">Username</label>
                            <input className="form-control" type="text" placeholder="Username"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-input">Email</label>
                            <input className="form-control" type="email" placeholder="name@gmail.com"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-input">Pasword</label>
                            <input className="form-control" type="passowrd" placeholder="password"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-input"> Confirm Pasword</label>
                            <input className="form-control" type="passowrd" placeholder="password"></input>
                        </div>
                        <div className="row gx-5 ps-5">
                            <div className="col ps-5 pt-1">
                                <button className="btn btn-primary text-light shadow rounded">Sign UP</button>
                            </div>
                            <div className="col pt-2">
                                <p>Or</p>
                            </div>
                            <div className="col pe-5 pt-2">
                                <p onClick={() => Navigate("/")} className="text-primary">Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
