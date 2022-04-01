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
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
margin: 0 auto;
margin-bottom: 20px;

h1{
    color: #041730;
    font-size: 36px;
    font-weight: 700;
    margin: 0 10px;
}
`

const TitleWrapper = styled.div`
    /* padding:0 10px; */
    /* background: #041730; */
    width: fit-content;
    border-radius: 5px;
    h1{
        color: #FFFFFF;
        word-wrap: normal;
        font-size: 16px;
        color: #041730;
        font-weight: 700;
        opacity: 75%;
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
const Ul = styled.ol`
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

const Guide = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>PROCEDURAL RULES</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                   
                <TitleWrapper>
                   <h1>RULE ONE</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Paragraph>
                    The Federal Judicial Service Commission, State Judicial Service Commission
                     and the Judicial Service Committee of the Federal Capital Territory shall comply with 
                     these Rules in their advice to National Judicial Council for nominations or recommendations
                      of candidates for appointment of Judicial Officers for the Superior
                     Courts of Record under the 1999 Constitution of the Federal Republic of Nigeria (as amended).
                    </Paragraph>
                   
                 <TitleWrapper>
                   <h1>RULE TWO</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Ul>
                        <ListItem> Whenever the Chairman of a State Judicial Service Commission proposes to 
                            embark on the process for appointment of candidates or a candidate to Judicial 
                            Office in the State, notice shall be given to the Governor 
                            of the State concerned stating the number of Judicial Officers intended to be appointed.
                        </ListItem>
                        <ListItem> 
                            <ol style={{listStyle: 'lower-alpha'}}>
                                <li>Whenever the Chairman of a State Judicial Service Commission proposes to embark on the process for appointment of       candidates or a candidate to Judicial Office in the State, notice shall be given to the Governor of the State concerned stating  the number of Judicial Officers intended to be appointed.</li>
                                <li>Whenever the Chairman of a State Judicial Service Commission proposes to embark on the process for appointment of       candidates or a candidate to Judicial Office in the State, notice shall be given to the Governor of the State concerned stating  the number of Judicial Officers intended to be appointed.</li>
                                <li>Whenever the Chairman of a State Judicial Service Commission proposes to embark on the process for appointment of       candidates or a candidate to Judicial Office in the State, notice shall be given to the Governor of the State concerned stating  the number of Judicial Officers intended to be appointed.</li>
                            </ol>
                        </ListItem>
                        <ListItem> Whenever the Chairman of a State Judicial Service Commission proposes to 
                            embark on the process for appointment of candidates or a candidate to Judicial 
                            Office in the State, notice shall be given to the Governor 
                            of the State concerned stating the number of Judicial Officers intended to be appointed.
                        </ListItem>
                        <ListItem> Whenever the Chairman of a State Judicial Service Commission proposes to 
                            embark on the process for appointment of candidates or a candidate to Judicial 
                            Office in the State, notice shall be given to the Governor 
                            of the State concerned stating the number of Judicial Officers intended to be appointed.
                        </ListItem>
                        <ListItem> Whenever the Chairman of a State Judicial Service Commission proposes to 
                            embark on the process for appointment of candidates or a candidate to Judicial 
                            Office in the State, notice shall be given to the Governor 
                            of the State concerned stating the number of Judicial Officers intended to be appointed.
                        </ListItem>
                    </Ul>

                
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

export default Guide