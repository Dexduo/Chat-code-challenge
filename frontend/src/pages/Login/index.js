import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Login(){
    return (
        <div className="login-container">
            <section>
                <form>
                    <h1>Login</h1>
                    <input placeholder="Email" type="email" />
                    <button type="submit">Login</button>
                    <Link to="/register">Ir para Cadastro</Link>
                </form>
            </section>
        </div>
    )
}

export default Login