import React, { useState } from "react";
import API from "../Api/api";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("❌ Passwords do not match");
            return;
        }

        const data = {
            username,
            email,
            password,
        };

        try {
            const res = await API.post("/register", data);
            console.log("✅ Registered:", res.data);
            alert("🎉 Registration Successful!");
            navigate("/");
        } catch (err) {
            console.error("❌ Register error:", err);
            alert("❌ Registration failed");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 pt-5">
                    <h1 className="text-light mt-3">Create your account</h1>
                </div>
                <div className="col-md-6 pt-5">
                    <div className="container-xl bg-light rounded pt-4 pb-4 shadow ms-3">
                        <h2 className="text-center">Sign Up</h2>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                className="form-control"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@gmail.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="row gx-5 ps-5">
                            <div className="col ps-5 pt-1">
                                <button onClick={handleRegister} className="btn btn-primary text-light shadow rounded">
                                    Sign Up
                                </button>
                            </div>
                            <div className="col pt-2">
                                <p>Or</p>
                            </div>
                            <div className="col pe-5 pt-2">
                                <p onClick={() => navigate("/")} className="text-primary" style={{ cursor: "pointer" }}>
                                    Login
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
