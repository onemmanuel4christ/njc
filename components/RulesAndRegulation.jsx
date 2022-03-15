import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
    background: url('./img/rules.jpeg');
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    margin: 30px 0;
    gap: 20px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0;
    }

`

const Container = styled.div`
    width: 517px;
    height: 300px;
    border-radius: 5px;
    background-color: #FFF;
    padding-right: 50px;
    padding-left: 30px;
    padding: 10px;
    @media only screen and (max-width: 800px) {
        padding:10px 20px;
        width: 100%;
        margin:20px 0;
    }
`
const Contents = styled.div`
    
`
const Hr = styled.hr`
    height: 0;
    border: 1px solid rgba(119, 119, 119, 0.24);
    background-color: rgba(119, 119, 119, 0.24);
    margin: 25px;
    @media only screen and (max-width: 800px) {
      display: none;
    }
`
const Line = styled.div`
    height: 822px;
    border: 1px solid rgba(119, 119, 119, 0.24);
   background-color: rgba(119, 119, 119, 0.24);
   width: 0;
   @media only screen and (max-width: 800px) {
      display: none;
    }
`
const Details= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-weight: 24;
    color: #041730;
    gap: 35px;
    @media only screen and (max-width: 800px) {
      width: 80%;
      padding: 0 10px;
    }
`

const Icon = styled.img`
    width: 55px;
    height: 46px;
    object-fit: cover;
    @media only screen and (max-width: 800px) {
        display: none;
    }

`
const HeaderText = styled.h3`
      text-transform: uppercase;
      @media only screen and (max-width: 800px) {
      padding: 0 10px;
      font-size: 16px;
    }
`
const MenuList = styled.ul`
    padding: 10px;
    margin-left: 110px;
    margin-bottom: 20px;
      width: 80%;
      @media only screen and (max-width: 800px) {
      padding: 0 10px;
      width: 80%;
      margin: 10px;
    }
    
`
const ListItem = styled.li`
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    padding: 10px;
       
    @media only screen and (max-width: 800px) {
     font-size: 14px;
    }
    `
  const ReadMore = styled.div`
    float: right;
    margin-top: 30px;
    cursor: pointer;
    span {
        margin-left: '10px'
    }
  `
const IntroText = styled.p`
    width: 400px;
    margin-left: 80px;
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    padding: 10px;
    word-wrap: break-word;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    
    @media only screen and (max-width: 800px) {
        width: 80%;
        font-size: 14px;
        margin: 10px;
    }
`
const RulesAndRegulation = () => {
  return (
    <Wrapper>
        <Contents>
            <Container>
                <Details>
                <Icon src='./img/rulesIcon.svg' alt='' />
                    <HeaderText>RULES AND REGULATIONS</HeaderText> 
                </Details>
                <MenuList>
                        <ListItem>Procedural Rules</ListItem>
                        <ListItem>Code of Conduct</ListItem>
                        <ListItem>Discipline Regulations</ListItem>
                        <ListItem>NJC Policy</ListItem>
                    </MenuList>  
                   <ReadMore> 
                       Read More
                        <span>
                            <Image src="/img/readMoreIcon.svg" alt="" width={13} height={12}/>
                        </span>
                    </ReadMore>
            </Container>
        <Hr />
            <Container>
            <Details>
            <Icon src='./img/appointmentIcon.svg' alt='' />
                    <HeaderText>APPOINTMENT RULES</HeaderText>
                </Details>
                <IntroText>
                        Extant revised NJC Guidelines and 
                        Procedural rules for the appointment of Judicial Officers 
                        of all superior courts of record in Nigeria are as follows:
                   </IntroText>
                   <ReadMore> 
                       Read More
                        <span>
                            <Image src="/img/readMoreIcon.svg" alt="" width={13} height={12}/>
                        </span>
                    </ReadMore>
            </Container>
        </Contents>

        <Line />

        <Contents>
            <Container>
            <Details>
            <Icon src='./img/judicialIcon.svg' alt='' />
                    <HeaderText>NATIONAL JUDICIAL POLICY   </HeaderText>
                </Details>
                <IntroText>
                   The National Judicial Council is a
                    body established under section 153(1)
                    of the Constitution with power relating to 
                    appointments and exercise of displinary..
                   </IntroText>
                   <ReadMore> 
                       Read More
                        <span>
                            <Image src="/img/readMoreIcon.svg" alt="" width={13} height={12}/>
                        </span>
                    </ReadMore>
           
            </Container>
        <Hr />
            <Container>
            <Details>
                    <Icon src='./img/committeeIcon.svg' alt='' />
                    <HeaderText>COMMITTEES IN NJC</HeaderText>   
                </Details>
                <IntroText>
                   The National Judicial Council is a
                    body established under section 153(1)
                    of the Constitution with power relating to 
                    appointments and exercise of displinary..
                   </IntroText>
                   <ReadMore> 
                       Read More
                        <span>
                            <Image src="/img/readMoreIcon.svg" alt="" width={13} height={12}/>
                        </span>
                    </ReadMore>
           
            </Container>
        </Contents>
    </Wrapper>
  )
}

export default RulesAndRegulation