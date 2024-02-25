import {React,useRef} from 'react'
import {auth} from '@/library/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import {collection, addDoc, doc, setDoc} from "firebase/firestore";
import {database} from '@/library/firebaseConfig';
import { useRouter } from 'next/router';
const docMenu = doc(database, "Product", "gas",);
const docItem = doc(database, "Product", "productDocument");
let gas = {credit: "$3.35",Cash: "$3.25" , Diesel: "4.29"}
const Items = {
  array: [
    { name: 'Candy', price: 'Regular: $1.50 Large: $2.50', imageUrl: 'candy.jpg' },
    { name: 'Chips', price: 'Small: $1.99 Large $4.99', imageUrl: 'chips.jpg' },
    { name: 'Drinks', price:'Can: $1.25 20OZ: $2:50 2Liter: $2.99', imageUrl: 'sodaa.jpg' },
    { name: 'Ice Cream', price: 'Pint: $3.99 Tub: $5.99', imageUrl: 'creamsss.jpg' },
    { name: 'Coffee', price: '12OZ: $1.25 16OZ: $1.50 20OZ: $1.75', imageUrl: 'coffee.jpg' },
    { name: 'Laundry', price: '$7.99', imageUrl: 'laundry.jpg' },
    { name: 'Frozen Food', price: 'Prices vary', imageUrl: 'forzen.jpg' },
    { name: 'Beer', price: 'Prices vary', imageUrl: 'beer.jpg' },
    { name: 'Cigarettes', price: 'Prices vary', imageUrl: 'cig.jpg' }
]};

const menuItems = {
  array: [
    { name: 'Chicken Wings', price: '$6.99', imageUrl: 'chicken.jpg' },
    { name: 'Mozzerella Sticks', price: '$6.99', imageUrl: 'mozz.jpg' },
    { name: 'Chicken Cutlet', price: '$6.99', imageUrl: 'cutlet.jpg' },
    { name: 'Popcorn Chicken', price: '$5.99', imageUrl: 'popcornChicken.jpg' },
    { name: 'Popcorn Shrimp', price: '$6.99', imageUrl: 'shrimp.jpg' },
    { name: 'gyro', price: '$7.99', imageUrl: 'gyro.jpg' },
    { name: 'Cheeseburger and fries', price: '$7.99', imageUrl: 'burger.jpg' },
    { name: 'CheeseSteak', price: '$9.99', imageUrl: 'cheesesteak.jpg' },
    { name: 'Sandwhich', price: '$6.99-8.99', imageUrl: 'sandwhich.jpg' }
]};

const menu = () =>{
  setDoc(docMenu,gas)
  .then(()=>{
    console.log("Document successfully written!");
  })
  .catch((error)=>{
    console.error("Error writing document: ",error);
  });
}
const item = () => {
  setDoc(docItem,Items)
  .then(()=>{
    console.log("Document successfully written!");
  })
  .catch((error)=>{
    console.error("Error writing document: ",error);
  });
}
const adminLogin = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useRouter();
    async function loginFunction(){
        const email = emailRef.current.value
        const password = passRef.current.value
        console.log(email)
        console.log(password)
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
      <input
      type='email'
      placeholder="Email" 
      ref={emailRef}
      />
      <input
      type='password'
      ref={passRef}
      placeholder="Password" 
      />
      <button onClick={loginFunction}>Login</button>
    </LoginBox>
    </Container>
    
  )
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FF7F00;
`;
const LoginBox = styled.div`
  width: 200px;
  hieght: 200px;
  border-radius: 8px;
  justify-content:center;
  align-items: center;
  border-radius = 8px;
`
const Admin = styled.p`
font-size: 20px;
`

export default adminLogin
