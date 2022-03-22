import React from 'react'
import styled from 'styled-components'
import Tweeter from './Tweeter'
import Image from 'next/image'

const Main = styled.div`
  background-color: #041730;
  padding-top: 80px;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 50px;
  @media only screen and (max-width: 800px) {
      padding: 10px;
    }
`
const Container = styled.div`
   display: flex;
   gap: 20px;
   width: 100%;
   @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
`
const Left = styled.div`
flex: 50%;
@media only screen and (max-width: 800px) {
  flex: 1;

    }

`
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
`
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #FFF;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 17px;
`
const IntroText = styled.p`
  text-align: left;
  word-wrap: break-word;
  width: 250px;
  font-weight: 400;
  font-size: 16px;
  color: #FFF;
  margin-bottom: 50px;
  line-height: 24px;
`
const BtnReadMore = styled.a`
  text-decoration: none;
  padding: 15px 50px;
  background-color: #05A850;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;


`
const MenuList = styled.ul`
 font-weight: 400;
  font-size: 16px;
  color: #FFF;
  padding-left: 15px;
`

const ListItem = styled.li`
  padding: 10px;
`
const Right = styled.div`
flex: 50%;

`
const TwitterHolder = styled.div`
 @media only screen and (max-width: 800px) {
     /* width: 100%; */
    }
`
const NewsletterForm = styled.form`
display: flex;
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
`
const Input = styled.input`
flex: 1;
padding: 15px 22px;
border-radius: 5px;
outline: none;
border: 0;
width: 100%;

`
const SendBtn = styled.button`
padding: 19px 36px;
background-color: #05A850;
text-transform: uppercase;
display: flex;
align-items: center;
border: 0;
border-radius: 5px;
color: #FFF;
gap: 10px;
font-size: 16px;
font-weight: 400;
cursor: pointer;
`
const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

`
const SocialIconImage = styled.img`
    cursor: pointer;
`
const Footer = () => {
  return (
    <Main>
    <Container>
      <Left>
          <LeftContainer>
                <div>
                <Title>NJc at a glance</Title>
                  <IntroText>
                      The National Judicial Council 
                      is one of the Federal Executive Bodies created 
                      by virtue of Section 153 of the 1999 Constitution 
                      of the Federal Republic of Nigeria.
                    </IntroText>
                    <BtnReadMore>Read More</BtnReadMore>
                </div>
                <div>
                <Title>click links to view</Title>
                     <MenuList>
                       <ListItem>Supreme Court of Nigeria</ListItem>
                       <ListItem>Nigerian Institute of Advanced Legal Studies</ListItem>
                       <ListItem>International Labour Organisation ILO</ListItem>
                       <ListItem>International Centre for Nigerian Law ICNL</ListItem>
                       <ListItem>Constitutions of the Federal Repulic of Nigeria</ListItem>
                       <ListItem>Federal Judicial Service Commission</ListItem>
                       <ListItem>Nigeria Law Report</ListItem>
                       <ListItem>Nigeria Bar Association</ListItem>
                       <ListItem>Foreign & Intl Labour Law</ListItem>
                       <ListItem>Westlaw International</ListItem>
                       <ListItem>National Judicial Institute</ListItem>
                     </MenuList>
                  </div>
          </LeftContainer>       
      </Left>
      <Right>
        <TwitterHolder >
                  <Tweeter /> 
        </TwitterHolder>
            <Title style={{
              marginBottom: '0'
            }}>newsletter</Title>
            <p style={{
              color: '#FFF'
            }}>Sign up today to get hints, tips, latest updates</p>
            <NewsletterForm>
                <Input type="text" placeholder="Enter email" />
                <SendBtn type='sumbit'>Send <span>
                            <Image src='/img/sendIcon.svg' width={12} height={12} alt="" />
                    </span>
                </SendBtn>
            </NewsletterForm>
        <SocialIconWrapper>
                <SocialIconImage src='./img/twitter.svg' alt='' />
                <SocialIconImage src='./img/linkedin.svg' alt='' />
                <SocialIconImage src='./img/facebook.svg' alt='' />
                <SocialIconImage src='./img/instagram.svg' alt='' />
            </SocialIconWrapper>
      </Right>
    </Container>
    <div style={{
              color: '#838585',
              fontSize: '16px',
              fontWeight: '400',
              marginTop: '60px'
            }}>Designed by MBR Computer Consultants | Copyright © 2022 . All rights reserved.</div>
    </Main>
  )
}

export default Footer