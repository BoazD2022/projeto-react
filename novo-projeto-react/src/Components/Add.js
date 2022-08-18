import React, { useState ,useEffect} from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [telephone,setTelephone] = useState("")
const navigate = useNavigate();

const data={
    name: name, 
    email: email,
telephone: telephone
}

function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:5000/user", data)
    .then(res=>{
        if (res.status === 200) {
            navigate('/')
        }
    })
}

    return (
        <div>
            <h2>Digite seu Contato😀</h2>
            <form onSubmit={handleSubmit}>
                <b><div>Nome:</div></b>
                <input type="text"
                    value={name} onChange={(e) => setName(e.target.value)}
                required/>
                <br></br>
                <br></br>
                <b><div>Email:</div></b>
                <input type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} required
                />
                <br></br>
                <br></br>
                <b><div>Telefone:</div></b>
                <input type="text"
                    value={telephone} onChange={(e) => setTelephone(e.target.value)} required
                />
                <br></br>
                <br></br>

                <input type="submit" />
            </form><br></br>

            <b><div>Nota Importante:</div></b>
            <div>Favor digitar: http://localhost:3000/  para voltar ao menu principal</div>
        </div>
    )
}