import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import './styles.css'

function Login(){
    return (
        <div className="login-container">
            <section>
                <form>
                    <h1>Login</h1>
                    <input placeholder="Email" type="email" />
                    <button type="submit">Login</button>
                    <Link to="/register">Não tenho conta</Link>
                </form>
            </section>
        </div>
    )
}

export default Login