/* This is the admin page. From here the prices of any item, menu item, and gas price can be changed. The page
reads data from the data base and changes the price anytime a price change is added.
*/
import React, { useRef } from 'react';
import styled from 'styled-components';
import { database } from '@/library/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
const AdminPage = () => {
    const menuRef = useRef();
    const menuPrice = useRef();
    const menRef = doc(database,"Product","menuDoc");
    const Click = () => {
        const menu = menuRef.current.value;
        const menprice = menuPrice.current.value;
        getDoc(menRef)
        .then((docSnap)=>{
        if(docSnap.exists()){
            console.log("document data:", docSnap.data());
        let data = docSnap.data().array;
        const Item1 = data.find(item => item.name == menu);
        if (Item1) {
          Item1.price = menprice;
        } else {
          console.log(`${menu} not found in the menu`);
        }
        data = {array: data}
        setDoc(menRef,data)
        .then(()=>{
          console.log("Document successfully written!");
        })
        .catch((error)=>{
          console.error("Error writing document: ",error);
        });
    }
        else{
            console.log("error");
        }
        })
      };
    const itemRef = useRef();
    const priceRef = useRef();
    const itRef = doc(database,"Product","productDocument");
    const handleClick = () => {
      const itemer = itemRef.current.value;
      const itemprice = priceRef.current.value;
      getDoc(itRef)
      .then((docSnap)=>{
        if(docSnap.exists()){
            console.log("document data:", docSnap.data());
        let data = docSnap.data().array;
        const Item1 = data.find(item => item.name == itemer);
        if (Item1) {
          Item1.price = itemprice;
        } 
        data = {array: data}
        setDoc(itRef,data)
        .then(()=>{
          console.log("Document successfully written!");
        })
        .catch((error)=>{
          console.error("Error writing document: ",error);
        });
    }
        else{
            console.log("error");
        }
        })   
    };
    const creditRef = useRef();
    const cashRef = useRef();
    const DieselRef = useRef();
    const theRef = doc(database,"Product","gas");
    const gasClick = () => {
      const credit = creditRef.current.value;
      const cash = cashRef.current.value;
      const disel = DieselRef.current.value
      getDoc(theRef)
      .then((docSnap)=>{
        if(docSnap.exists()){
            console.log("document data:", docSnap.data());
        let data = docSnap.data();
        if (credit) {
          data.credit = credit;
        }
        if (cash){
          data.Cash = cash;
        }
        if (disel){
          data.Diesel = disel;
        }
        setDoc(theRef,data)
        .then(()=>{
          console.log("Document successfully written!");
        })
        .catch((error)=>{
          console.error("Error writing document: ",error);
        });
    }
        else{
            console.log("error");
        }
        })   
    };
  return (
    <Back>
    <AdminPageContainer>
      <Title>Admin Page</Title>
      <TextBoxContainer>
        <label>Menu Items:</label>
        <TextBox 
        type="text" 
        placeholder="Enter Item to change" 
        ref={menuRef}
        />
        <TextBox 
        type="text" 
        placeholder="Enter New price"
        ref={menuPrice}
        />
        <Button onClick={Click}>Change Price</Button>
      </TextBoxContainer>
      <TextBoxContainer>
      <label>Items:</label>
        <TextBox 
        type="text" 
        placeholder="Enter Item to change" 
        ref={itemRef}
        />
        <TextBox 
        type="text" 
        placeholder="Enter New price"
        ref={priceRef}
        />
        <Button onClick={handleClick}>Change Price</Button>
      </TextBoxContainer>
      <TextBoxContainer>
      <label>Gas:</label>
        <TextBox 
        type="text" 
        placeholder="Credit" 
        ref={creditRef}
        />
        <TextBox 
        type="text" 
        placeholder="Cash"
        ref={cashRef}
        />
        <TextBox 
        type="text" 
        placeholder="Diesel"
        ref={DieselRef}
        />
        <Button onClick={gasClick}>Change Price</Button>
      </TextBoxContainer>
    </AdminPageContainer>
    </Back>
  );
};

const Back = styled.main`
background-color: orange;
height: 100vh;
`

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const TextBox = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;
export default AdminPage;
