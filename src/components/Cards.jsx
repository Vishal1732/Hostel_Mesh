import MenuCard  from "./MenuCard.jsx";
import "./Style.css" 
import Menu from "./MenuApi.js";
import { useState } from "react";
import Navbar from "./Navbar.jsx";

const uniqueList=[...new Set(Menu.map((currElement)=>{
  return currElement.category;
  
})),"All"];


const Cards = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);

  const itemFilter = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((currElement) => {
      return currElement.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Navbar itemFilter={itemFilter} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Cards;