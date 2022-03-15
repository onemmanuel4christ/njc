import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:50px 150px;
    @media only screen and (max-width: 800px) {
      padding: 10px;
      flex-direction: column-reverse;
      width: 100%;
      
    } 
`

const ImageWraper = styled.img`
    flex: 50%;
    width: 28rem;
    height: 35rem;
    border: 0;
    box-shadow: 12px 12px 02px -5px rgba(5, 168, 80,1);
    @media only screen and (max-width: 800px) {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      margin: 20px auto;
    } 
`
const Right = styled.div`
    text-align: center;
    flex: 50%;
    width: 30rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    @media only screen and (max-width: 800px) {
      padding: 10px;
      width: 100%;
    } 
   

`
const Title = styled.h2`
    font-size: 2rem;
    color: #05A850;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    @media only screen and (max-width: 800px) {
     font-size: 1.5rem;
      
    }

`
const Hr = styled.hr`
border: 3px solid #05A850;
background-color: #05A850;
width: 100px;
margin: 0 auto;
height: 0;
@media only screen and (max-width: 800px) {
    border: 2px solid #05A850;    
    }
`
const Speech = styled.p`
word-wrap: break-word;
text-align: justify;
font-size: 1rem;
margin-top: 40px;
color: #041730BF;
`
const Name = styled.h3`
text-align: left;
font-weight: 700;
font-size: 20px;
margin-top: 2rem; 
text-transform: uppercase;
@media only screen and (max-width: 800px) {
    font-size: 1rem;  
}

`
const VisionCard = styled.div`
    padding: 42px 80px;
    margin-bottom: 100px;
    background: url('./img/mission-background.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;   
    @media only screen and (max-width: 800px) {
     flex-direction: column;
     gap: 30px;
     width: 100%;
     padding: 50px 10px;
     margin-bottom: 50px;
    }
`

const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #FFFFFF;
    height: 221px;
    width: 511px;
    @media only screen and (max-width: 800px) {
      width: 95%;
    }
    
`
const CardTitle = styled.h1`
font-size: 2rem;
font-weight: bold;
color: #FFFFFF;
text-transform: uppercase;
@media only screen and (max-width: 800px) {
      font-size: 1.5rem;
}
`
const CardHr = styled.hr`
    width: 50px;
    height: 0;
    border: 3px solid #FFFFFF;
    background-color: #FFFFFF;
    @media only screen and (max-width: 800px) {
        border: 2px solid #FFFFFF;
        width: 4rem;
    }
`
const Info = styled.span`
    font-size: 16px;
    color: #FFFF;
    text-align: center;
    width: 313px;
    word-wrap: break-word;
`
const WelcomeAddress = () => {
  return (
    <>
    <Wrapper>
             <ImageWraper src='./img/tanko.png'/>
               

                 <Right>
                    <Title>FROM THE CHAIRMAN DESK</Title>
                    <Hr />
                    <Speech>
                            The National Judicial Council is one of the Federal Executive Bodies created by the 1999 Constitution of the Federal Republic of Nigeria. Amongst other functions, it is responsible for the Appointment, Promotion and Discipline of Judicial Officers. The Council has through various Reforms ensured that it protects and preserves the sanctity of the Judiciary. 
                            It is our desire to foster a justice system that is fair, speedy and meets the hope of all men.
                    </Speech>
                    <Name>
                         HON. DR. JUSTICE I. TANKO MUHAMMAD, CFR, JSC GCON , Chief Justice of Nigeria & The Chairman, National Judicial Council
                    </Name>
                </Right>
    </Wrapper>
    <VisionCard>
        <Card>
            <CardTitle>OUR MISSION</CardTitle>
            <CardHr />
            <Info>For efficient and effective administration of justice in Nigeria.</Info>
        </Card>
        <Card>
        <CardTitle>our vision</CardTitle>
            <CardHr />
            <Info>A Judiciary that is integrity-driven with adequate measures to enhance timely and equitable dispensation of justice in Nigeria.</Info>
        </Card>
    </VisionCard>
      </>
  )
}

export default WelcomeAddress