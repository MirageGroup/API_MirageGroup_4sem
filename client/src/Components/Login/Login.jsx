import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';

import video from '../../LoginAssets/video.mp4'; 
import logo from '../../LoginAssets/Logo API.png'; 

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
    return (
        <div className="loginPage flex">
        <div className="container flex">

            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className="title">Sistema de Reuniões SIATT</h2>
                    <p>Sistemas Integrados de Alto Teor Tecnológico</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Não tem uma conta? </span>
                    <Link to={'/register'}>
                    <button className="btn">Inscreva-se</button>
                    </Link>
                 </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image"/>
                    <h3>Bem-vindo novamente!</h3>
                </div>

                <form action="" className="form grid">
                    <span className="showMessage">Aqui vai o status do Login</span>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                        <FaUserShield className='icon'/>
                        <input type="text" id="username" placeholder="Entrar com usuario"></input>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Senha</label>
                        <div className="input flex">
                        <BsFillShieldLockFill className='icon'/>
                        <input type="password" id="password" placeholder="Senha"></input>
                        </div>
                    </div>

                    <button type="submit" className="btn flex">
                        <span>Login</span>
                        <AiOutlineSwapRight className='icon' />
                    </button>

                    <span className="forgotPassword">
                        Esqueceu o caraio da senha? <a href="">Click Aqui</a>

                    </span>

                </form>

            </div>

        </div>
        </div>

    )
}

export default Login