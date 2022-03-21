import React, { useState } from 'react'
import styled from 'styled-components'
import "antd/dist/antd.css";
import { Menu, Dropdown } from 'antd';
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/Ai";

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
    background-color: #05A850;
    padding: 41px 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 15px;
    color: #FFF;
    gap: 30px;
    text-transform: uppercase;
    @media only screen and (max-width: 800px) {
    padding: 30px 0;
    flex-direction: column;
    justify-content: flex-start;
    }
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
            {openMenu ? <div onClick={()=>setOpenMenu(open => !openMenu)}> <AiOutlineClose /> </div> : <MenuBtn onClick={()=>setOpenMenu(open => !openMenu)}/>}
           
        </Right>
      </Container>
     {
         openMenu &&  
         <MenuList>
            <Menu style={{
                color: '#FFF',
                }}>
                <Link href='/'>
                        <a style={{
                        color: '#FFF',
                }}>
                            Home
                        </a>
                </Link>
            </Menu>
            <Dropdown 
              overlay={(
                <Menu>
                    <Menu.Item>
                <Link href='profile'>
                    <a>
                      Porfile of NJC
                    </a>
                </Link>

                    </Menu.Item>   
                    <Menu.Item>
                    Composition of NJC
                    </Menu.Item>    
                    <Menu.Item>
                    Structure of NJC
                    </Menu.Item>
                    <Menu.Item>
                    Committee of NJC
                    </Menu.Item>
                    <Menu.Item>
                    Current council Members
                    </Menu.Item>
                    <Menu.Item>
                    Management Staff
                    </Menu.Item>
                </Menu>
              )}
              trigger={['hover']}>
                <div>
                        About NJC
                      <i className='fas fa-caret-down' style={{marginLeft: '15px'}}/>
                </div>
            </Dropdown>
            <Dropdown 
              overlay={(
                <Menu>
                    <Menu.Item>
                    Current Council Chairman
                    </Menu.Item>   
                    <Menu.Item>
                    Past Council Chairmen
                    </Menu.Item>    
                </Menu>
              )}
              trigger={['hover']}>
                <div>
                        Judiciary
                      <i className='fas fa-caret-down' style={{marginLeft: '15px'}}/>
                </div>
            </Dropdown>
            <Dropdown 
              overlay={(
                <Menu>
                    <Menu.Item>
                    NJC Guidelines & Procedural Rules
                    </Menu.Item>   
                    <Menu.Item>
                    Code of Conducts
                    </Menu.Item>    
                    <Menu.Item>
                    Discipline Regulations
                    </Menu.Item>   
                    <Menu.Item>
                    NJC Policy
                    </Menu.Item>    
                </Menu>
              )}
              trigger={['hover']}>
                <div>
                NJC Guidelines
                      <i className='fas fa-caret-down' style={{marginLeft: '15px'}}/>
                </div>
            </Dropdown>
            <Dropdown 
              overlay={(
                <Menu>
                    <Menu.Item>
                    News & Events
                    </Menu.Item>   
                    <Menu.Item>
                    Press Release
                    </Menu.Item>    
                    <Menu.Item>
                    Picture Gallary
                    </Menu.Item>   
                    <Menu.Item>
                    Video Gallery
                    </Menu.Item>    
                </Menu>
              )}
              trigger={['hover']}>
                <div>
               MEDIA
                      <i className='fas fa-caret-down' style={{marginLeft: '15px'}}/>
                </div>
            </Dropdown>
            <Menu style={{
                color: '#FFF',
                }}>
                    FAQ
            </Menu>
            <Menu style={{
                color: '#FFF',
                }}>
                    CONTACT US
            </Menu>
         </MenuList>
     }
      </>
  )
}

export default Header