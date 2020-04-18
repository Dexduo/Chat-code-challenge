import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

function Login(){

    const [email, setEmail] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        if(!email) {
            alert("Digite seu email")
        } else {
            const res = await api.get('/login', {
                email
            })
            console.log(res.data)
            // try {
            //     const res = await api.get('/login', {
            //         email
            //     })
            //     console.log(res)
            // } catch(err) {
            //     alert("Email não existe")
            // }
        }

    }

    return (
        <div className="login-container">
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit">Login</button>
                    <Link to="/register">Não tenho conta</Link>
                </form>
            </section>
        </div>
    )
}

export default Login