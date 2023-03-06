import { useState } from "react"
import {Container, Form, Button} from "react-bootstrap"


function Login(){
    const [form, setForm] = useState({
        email: "",
        password: ""
    }
        
    )

    const handleChange = (event) => {
        const {value, name} = event.target;
        setForm((values) => ({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const {email, password} = Form;
    let massage = [];

    //manual check
    if (email.length === 0) massage.push("input email");
    if (password.length === 0) massage.push("input password");


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
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        );
}
