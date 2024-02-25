import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
    const navigate = useRouter();
    function goHome(){
        navigate.push("/");
    }
    function goToItems(){
        navigate.push("/items");
    }
    function goToMenu(){
        navigate.push("/menu");
    }
    function goToContact(){
        navigate.push("/contact");
    }
  return (
    <Container>
        <LogoBox>
            QuickMart
        </LogoBox>
        <NavigationButtonHolder>
            <NavigationElement onClick={goHome}>
                Home
            </NavigationElement>
            <NavigationElement onClick={goToMenu}>
                Menu
            </NavigationElement>
            <NavigationElement onClick={goToItems}>
                items
            </NavigationElement>
            <NavigationElement onClick={goToContact}>
                Contact/Hours
            </NavigationElement>
        </NavigationButtonHolder>
    </Container>
  )
}
const Container = styled.div`
    width: 88vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 2vw;
    padding-bottom: 2vw;
    background-color: gainsboro;
    padding-left: 6vw;
    padding-right: 6vw;
    background-color: #FF7F00;
`

const LogoBox = styled.div`
    font-size: 4vw;
    font-weight: bold;
`

const NavigationButtonHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 3vw;   
`

const NavigationElement = styled.button`
    padding: .8vw;
    background-color: gainsboro;
    border: none;
    font-size: 1.5vw;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 0.5vw;

    &:hover{
        background-color: blue;
    }
`
export default Navbar
