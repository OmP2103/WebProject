/* This is the admin login page. When the user enters the correct email and password it will redirect them to the admin page */
import {React, useRef} from 'react'
import {auth} from '@/library/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const adminLogin = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useRouter();

    async function loginFunction(){
        const email = emailRef.current.value
        const password = passRef.current.value

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            const user = userCredential.user;
            console.log(`User ${user.email} logged in successfully`);
            navigate.push("/adminPage");
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    return (
        <Container>
            <LoginBox>
                <Admin>Admin Login:</Admin>
                <Input
                    type='email'
                    placeholder="Email" 
                    ref={emailRef}
                />
                <Input
                    type='password'
                    ref={passRef}
                    placeholder="Password" 
                />
                <Button onClick={loginFunction}>Login</Button>
            </LoginBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF7F00;
`;

const LoginBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 20px;
    background-color: #ffffff;
`;

const Admin = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #FF7F00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #87CEEB;
        transform: scale(1.03)
    }
`;

export default adminLogin;
