import React from 'react'
import styled from 'styled-components'
import News from '../components/News'

const Container = styled.div`
    padding: 20px 90px;
    background: rgba(214, 214, 214, 0.1);
    @media only screen and (max-width: 800px) {
    padding: 10px;
    }
`
const Wrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 800px) {
    flex-direction: column;
    }
`
const Left = styled.div`
    flex: 2;
    height: 600px;
    overflow: auto;
    border-right:  2px solid rgba(119, 119, 119, 0.25);
    padding: 0 30px;
    @media only screen and (max-width: 800px) {
   padding: 10px;
   border-right: 0;
   width: 100%;
    }

`
const Right = styled.div`
flex: 1;
padding: 0 30px;

`
const ProfileHeader = styled.div`
position: sticky;
top: 0;
z-index: 999;
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
margin: 0 auto;
padding-bottom: 20px;


h1{
    color: #041730;
    font-size: 36px;
    font-weight: 700;
    margin: 0 10px;
}
`

const TitleWrapper = styled.div`
    padding:0 10px;
    background: #041730;
    width: fit-content;
    border-radius: 5px;
    h1{
        color: #FFFFFF;
        word-wrap: normal;
    }
    `
const Paragraph = styled.p`
    word-wrap: break-word;
    font-size: 16px;
    color: #041730;
    text-align: justify;
    font-weight: 400;

`
const Hr = styled.hr`
   height: 0;
   border: 1px solid rgba(119, 119, 119, 0.25);
    background-color: #777777;
    opacity: 20%;
    width: 100%;
    @media only screen and (max-width: 800px) {
    display: none;
    }
    
`
const Ul = styled.ul`
color: #041730;
font-size: 16px;
font-weight: 400;
`
const ListItem = styled.li`
    font-size: 16px;
    line-height: 50px;
    opacity: 90%;
`
const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    p{
        font-weight: 700;
        display: flex;
        align-items: center;
    }
`
const OtherFunction = styled.div`
    margin-bottom: 30px;
  
`

const Topic = styled.h5`
    font-weight: 700;
    font-size: 16px;
    color: #041730;
`
const Body = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #041730;
    opacity: 75%;
    padding: 0 20px;
`
const JusticeInfo = styled.div`
    font-size: 16px;
    font-weight: 400;
    color:  #041730;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`
const SNumber = styled.span``
const FullName = styled.span``
const LeftDetail = styled.div`
display: flex;
justify-content: flex-start;
gap: 50px;
`
const Period = styled.span``

const PastCouncil = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>PAST CHIEF JUSTICES OF NIGERIA</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>1</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>2</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>3</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>4</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>5</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>6</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>7</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>8</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>9</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>1</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>2</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>3</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>4</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>5</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>6</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>7</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>8</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                <JusticeInfo>
                   <LeftDetail>
                   <SNumber>9</SNumber>
                    <FullName>Hon. Justice Stafford Foster Sutton (Past CJF)</FullName>
                   </LeftDetail>
                    <SNumber>1958–1972</SNumber>
                </JusticeInfo>
                
            </Left>
            <Right>
            <TitleWrapper>
                   <h1>LATEST NEWS</h1>
                    </TitleWrapper> 
                    <Hr />
                   <News />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default PastCouncil