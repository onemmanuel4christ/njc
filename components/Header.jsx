import React, { useState } from 'react'
import styled from 'styled-components'
import "antd/dist/antd.css";
import { Menu, Dropdown } from 'antd';
import { MenuItems } from './MenuItems';
import Link from 'next/link';

const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 9px 89px;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    @media only screen and (max-width: 800px) {
    padding: 10px;
    }
`
const Left = styled.div`
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    width: 158px;
    height: 132px;
    @media only screen and (max-width: 800px) {
    width: 100px;
    height: 90px;
}
   
`
const Title = styled.h3`
    font-weight: 700;
    font-size: 36px;
    color: #041730;
    text-transform: capitalize;
    margin-left: 20px;
    @media only screen and (max-width: 800px) {
    font-size: 24px;
    margin: 10px;
    }
    
`
const Right = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    /* display: none; */
}
`
const MenuBtn = styled.div`
    width: 20px;
    height: 15px;
    background: url('./img/HamburgerBtn.svg');
`

const Phone = styled.div`
    display: flex;
    color: #05A850;
    align-items: center;
    svg{
        margin-right: 10px;
        width: 17px;
        height: 17px;
    }
    span{
        font-weight: 400;
        font-size: 14px;
    }
`
const Mail = styled.div`
    display: flex;
    color: #05A850;
    align-items: center;
    margin-left: 23px;
    svg{
        margin-right: 10px;
        width: 17px;
        height: 17px;
    }
    span{
        font-weight: 400;
        font-size: 14px;
    }
`
const MenuList = styled.div`
    /* position: absolute; */
    background-color: #05A850;
    padding: 41px 20px;
    align-items: center;
    /* top: 150px; */
    /* left: 218px; */
    /* right: 218px; */
    display: flex;
    justify-content: center;
    gap: 15px;
    color: #FFF;
    text-transform: uppercase;
    
`
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState(false);
console.log(openMenu)
  return (
      <>
    <Container>
           <Left>
        <Link href="/">
            <a>
                 <Logo src="./img/njc-logo.png" alt="NJC LOGO" />
            </a>
        </Link>
            <Title>
            National Judicial council.
            </Title>
        </Left>
        <Right>
            {openMenu ? <div onClick={()=>setOpenMenu(open => !openMenu)}>X</div> : <MenuBtn onClick={()=>setOpenMenu(open => !openMenu)}/>}
           
        </Right>
      </Container>
     {
         openMenu &&  
         <MenuList>
            <Menu>Menu 1</Menu>
            <Menu>Menu 1</Menu>
            <Menu>Menu 1</Menu>
            <Menu>Menu 1</Menu>
         </MenuList>
     }
      </>
  )
}

export default Header