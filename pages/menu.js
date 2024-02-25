import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { styled, keyframes } from 'styled-components';
import { database } from '@/library/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const menuData = await getMenu();
      setMenuItems(menuData);
    }

    fetchMenu();
  }, []);

  async function getMenu() {
    const menRef = doc(database, 'Product', 'menuDoc');
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
            <ItemImage src={`/${item.imageUrl}`} />
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemInfo>
          </MenuItem>
        ))}
      </MenuContainer>
      <Message>* All fried food prices are included with a side of fries. A side of fries is $2.99</Message>
      <Message>* Menu items are only available from 8 am to 10 pm</Message>
      <Order>Order By phone: (845)-434-5957</Order>
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
  background-color: #ff7f00;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
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

export default Menu;
