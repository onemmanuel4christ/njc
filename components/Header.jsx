import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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
    display: none;
}
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
    position: absolute;
    background-color: #05A850;
    padding: 41px 20px;
    align-items: center;
    top: 150px;
    left: 218px;
    right: 218px;
    display: flex;
    justify-content: center;
    gap: 15px;
    color: #FFF;
    text-transform: uppercase;
    
`
const Header = () => {
  return (
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
            <Phone>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.26327 17.7568C6.13064 16.5693 6.19552 15.3988 6.42361 14.2884C6.4618 14.1141 6.45009 13.9326 6.38982 13.7647C6.32955 13.5969 6.22316 13.4493 6.08284 13.3391L4.01044 12.0356C5.00943 9.15784 7.18709 6.32454 9.86556 4.64747L11.6795 6.35124C11.9791 6.58174 12.3645 6.61694 12.6907 6.47302C13.7231 5.99618 14.8522 5.68449 16.0405 5.55194C16.5621 5.49374 16.9483 5.01079 16.8901 4.48943L16.517 1.14891C16.4588 0.627555 16.1568 0.0258644 15.4323 0.106691C6.45773 1.10786 -0.166593 9.40291 0.834096 18.3625C0.910657 19.048 1.54946 19.2504 2.08078 19.1911L5.41364 18.8193C5.9353 18.7611 6.3215 18.2782 6.26327 17.7568Z" fill="#05A850"/>
                </svg>
                <span>Quick Contact: <strong>09-4603190 </strong></span>
            </Phone>
            <Mail>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#05A850"/>
                </svg>
                <span>Email Address: <strong>info@njc.gov.ng</strong></span>
            </Mail>    
        </Right>
    </Container>
  )
}

export default Header