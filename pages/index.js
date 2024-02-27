/* This is the index page. This page has a picture of the store as well as the gas prices. The gas prices are stored within a database and pulled from there*/
import Head from "next/head";
import styled,{keyframes} from "styled-components";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from 'next/router'
import { database } from '@/library/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
export default function Home() {
  const navigate = useRouter();
function goAdmin(){
    navigate.push("/adminLogin");
}
const [gas, setMenuItems] = useState([]);

useEffect(() => {
  async function fetchMenu() {
    const menuData = await getMenu();
    setMenuItems(menuData);
  }

  fetchMenu();
}, []);

async function getMenu() {
  const menRef = doc(database, 'Product', 'gas');
  const docSnap = await getDoc(menRef);
  const men = docSnap.data();
  console.log(men);
  return men;
}
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Container>
          <LeftSide>
            <Image 
            src="/storepic.jpeg"
            width={800}
            height={781}
            />
          </LeftSide>
          <Rightside>
          <GasPricesContainer>
              <Title>Gas Prices</Title>
              <Price>Credit: {gas.credit}</Price>
              <Price>Cash: {gas.Cash}</Price>
              <Price>Diesel: {gas.Diesel}</Price>
            </GasPricesContainer>         
          </Rightside>
        </Container>
        <ButtonContainer>
        <Log onClick={goAdmin}>
          admin
        </Log>
        </ButtonContainer>
      </main>
    </>
  );
}
const fadeIn = keyframes`
  from {
    opacity: .1;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
width: 100%
height: 100%;
display: flex;
flex-direction: row;
background-color: #FF7F00;
`

const LeftSide = styled.div`
height: 100%;
width: 100%;
background-color: #FF7F00;
animation: ${fadeIn} 1s ease;
`

const Rightside = styled.div`
height: 100%;
width: 100%;
background-color: #FF7F00;
`
const GasPricesContainer = styled.div`
  font-family: sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40vw;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h2`
  font-size: 100px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 100px;
  margin-bottom: 10px;
`;
const ButtonContainer = styled.div`
background-color: #FF7F00;
`

const Log = styled.button`
padding: .05vw;
font-size: .5vw;
background-color: gainsboro;
border: none;
`;
