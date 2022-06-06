import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import {Grid} from "@mui/material";
import {apiGetIncident, apiLogin} from "../../api/APICalls";
import axios from "axios";
export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        let data = {
           username, password
        }
        console.log(data)
        // {
        //     headers: {
        //
        //     },
        axios.post('http://localhost:8080/api/login',
            data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }},
        ).then((data) => {
            // {
            //     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3NoIiwicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwiZXhwIjoxNjU0NTM5OTQ1fQ.akZt8dT5ZQaKs9wZf9VHsY1w1dRdOhUvw2uSoOekXdE",
            //     "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3NoIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1NDU0MTE0NX0.8OFI7lMK349vgPDTC4qB9Zll3PXUSKccUQrlyFhSxlE"
            // }
        console.log(data)
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
            <Grid item xs={6}>
                <div>
                    <img className="loginImage" alt="loginImage" src="/login.jpeg" />
                </div>
            </Grid>
        </Grid>
    );
}