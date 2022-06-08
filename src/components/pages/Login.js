import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import {Grid} from "@mui/material";
import axios from "axios";
import {API_URL} from "../../constants/Constants";
export default function Login({userAuthorized, ...props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(API_URL + 'login',`username=${username}&password=${password}`
        ).then((data) => {
            //TODO call state to set Logged in to true
            props.userAuthorized(data);
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <Grid container spacing={0} columns={12} justifyContent="center">
            <Grid item xs={6} style={{verticalAlign:'center'}}>
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
            </Grid>
            <Grid item xs={0} md={6}>
                <div>
                    <img className="loginImage" alt="loginImage" src="/login.jpeg" />
                </div>
            </Grid>
        </Grid>
    );
}