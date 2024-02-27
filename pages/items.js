/* This page gets the items and prices from a database and displays them into a grid form. */
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import {styled,keyframes} from 'styled-components';
import { database } from '@/library/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
const items = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const menuData = await getMenu();
      setMenuItems(menuData);
    }

    fetchMenu();
  }, []);

  async function getMenu() {
    const menRef = doc(database, 'Product', 'productDocument');
    const docSnap = await getDoc(menRef);
    const men = docSnap.data().array;
    console.log(men);
    return men;
  }
  return (
    <div>
      <Navbar />
      <MenuContainer>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <ItemImage src={(`/${item.imageUrl}`)}/>
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemInfo>
          </MenuItem>
        ))}
      </MenuContainer>
    </div>
  );
};
const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  animation: ${fade} 1.5s ease;
  background-color: #FF7F00;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemInfo = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const ItemName = styled.div`
  font-weight: bold;
`;

const ItemPrice = styled.div`
  color: white;
`;

const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  font-style: italic;
  animation: ${fade} 1.5s ease;
`;
const Order = styled.p`
  margin-top: 20px;
  text-align: center;
  animation: ${fade} 1.5s ease;
`;
export default items;