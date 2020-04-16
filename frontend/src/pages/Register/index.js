import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import './styles.css'

function Register() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if(!name || !email) {
            console.log("Não foi possivel criar usuario, falta informações")
        } else {
            const res = await api.post('/register', {
                name,
                email
            })
            console.log(res.data)
        }
    }
    
    return (
        <div className="register-container">
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <input placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
                    <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit">Registrar</button>
                    <Link to="/">Ir para Login</Link>
                    <Link to="/home">Teste component home</Link>
                </form>
            </section>
        </div>    
    )
}

export default Register