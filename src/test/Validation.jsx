import { useState } from "react"
import {Container, Form, Button} from "react-bootstrap"
import * as Validator from 'validatorjs';


function Login(){
    const [form, setForm] = useState({
        email: "",
        password: "",
        errors: [],
    })
    const handleChange = (event) => {
        const {value, name} = event.target
        setForm((values) => ({...values, [name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    

    const {email, password} = form

    //manual validation
    // let message = []
    // if (email.length === 0) message.push("input email");

    // if (password.length === 0) message.push("input password");

    // setForm({email, password, errors: message})

    //librari validator
    let data = {
        email, password,
    };

    let rules = {
        email: "required|email",
        password: "required|min:8"
    };

    let validation = new Validator(data, rules, {
        required: "data :attribute tidak boleh kosong",
        email: "email harap di isi dengan benar",
        min: ":attribute sedikitnya :min karakter"
    })
    validation.passes();

    setForm({
        email, 
        password, 
        errors: [
            ...validation.errors.get("email"),
            ...validation.errors.get("password"),
        ]
    })

    if (validation.passes()) {
        alert("email: " + email +"\npassword: " + password)
    }
    
}


    return (
        <Container onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    />
                </Form.Group>

                <ul>
                    {
                        form.errors.map((item, i) => (
                            <li key={i} className="text-danger">{item}</li>
                        ))
                    }
                </ul>

                <Button variant="primary" type="submit" id="done">
                    Submit
                </Button>
            </Form>
        </Container>
        );

        
}

export default Login