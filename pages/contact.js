/* This is the contact page. It holds the hours and information of the store as well as the phone number */
import React from 'react'
import Navbar from '@/components/Navbar'
import styled from "styled-components";
const contact = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Title>Contact and Hours:</Title>
        <Address>Address: 1141 State route 52</Address>
        <Address>Phone: (845)-434-5957</Address>
        <Hours>Hours:</Hours>
        <Hours>Sunday: 6:30am-11:30pm</Hours>
        <Hours>Monday: 7:00am-11:30pm</Hours>
        <Hours>Tuesday: 7:00am-11:30pm</Hours>
        <Hours>Wednesday: 7:00am-11:30pm</Hours>
        <Hours>Thursday: 6:30am-11:30pm</Hours>
        <Hours>Friday: 6:30am-12:00am</Hours>
        <Hours>Saturday: 6:30am-12:00am</Hours>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FF7F00;
`;

const Address = styled.p`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Hours = styled.p`
  font-size: 35px;
`;
const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;
export default contact