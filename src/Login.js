import React, {useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import "./styles/stylesLogin.css"



import one from "./styles/img/falling_figures/1.png";
import two from "./styles/img/falling_figures/2.png";
import three from "./styles/img/falling_figures/3.png";
import four from "./styles/img/falling_figures/4.png";
import five from "./styles/img/falling_figures/5.png";
import six from "./styles/img/falling_figures/6.png";
import a from "./styles/img/falling_figures/a.png";
import b from "./styles/img/falling_figures/b.png";
import c from "./styles/img/falling_figures/c.png";
import d from "./styles/img/falling_figures/d.png";
import e from "./styles/img/falling_figures/1.png";
import f from "./styles/img/falling_figures/1.png";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true)
            
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError('Failed to sign in')
            setLoading(false)
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            <div class='set'>
                <div><img src={one}/></div>
                <div><img src={f}/></div>
                <div><img src={two}/></div>
                <div><img src={e}/></div>
                <div><img src={three}/></div>
                <div><img src={d}/></div>
                <div><img src={four}/></div>
                <div><img src={c}/></div>
                <div><img src={five}/></div>
                <div><img src={b}/></div>
                <div><img src={six}/></div>
                <div><img src={a}/></div>
        </div>
        <div class='set set2'>
            <div><img src={one}/></div>
            <div><img src={f}/></div>
            <div><img src={two}/></div>
            <div><img src={e}/></div>
            <div><img src={three}/></div>
            <div><img src={d}/></div>
            <div><img src={four}/></div>
            <div><img src={c}/></div>
            <div><img src={five}/></div>
            <div><img src={b}/></div>
            <div><img src={six}/></div>
            <div><img src={a}/></div>
        </div>
    </div>
    )
}
