import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import './styles.css'

function Register() {
    return (


        <div className="register-container">
            <section>
                <form>
                    <h1>Registro</h1>
                    <input placeholder="Nome" />
                    <input placeholder="Email" type="email" />
                    <button type="submit">Registrar</button>
                    <Link to="/">Ir para Login</Link>
                </form>
            </section>
        </div>    
    )
}

export default Register