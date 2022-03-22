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
const Ol = styled.ol`
color: #041730;
font-size: 16px;
font-weight: 400;
`
const ListItem = styled.li`
    font-size: 16px;
    line-height: 50px;
    opacity: 90%;
`

const Composition = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>COMPOSITION OF NJC</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                    <Paragraph>
                        The By the provision of Paragraph 20
                         of Part One of the Third Schedule to the 
                         1999 Constitution of the Federal Republic 
                         of Nigeria, as amended. The National Judicial Council shall 
                         comprise the following Members:             
                    </Paragraph>
                 <Ol>
                        <ListItem>
                            the Chief Justice of Nigeria, who shall be the Chairman
                        </ListItem>
                        <ListItem>
                            the next most senior Justice of the Supreme Court who shall be the Deputy Chairman;
                        </ListItem>
                        <ListItem>An entrenched  entrenched and preserved independent Judiciary and preserved independent Judiciary</ListItem>
                        <ListItem>
                            the President of the Court of Appeal;
                        </ListItem>
                        <ListItem>
                        five retired Justices selected by the Chief Justice of Nigeria from the Supreme Court or Court of Appeal;
                        </ListItem>
                        <ListItem>
                        the President, National Industrial Court of Nigeria;
                        </ListItem>
                        <ListItem>
                        five Chief Judges of States to be appointed by the Chief Justice of Nigeria from among the Chief Judges of the States and of the
                         High Court of the Federal Capital Territory, Abuja in rotation to serve for two years;
                        </ListItem>
                        <ListItem>
                        one Grand Kadi to be appointed by the Chief Justice of Nigeria from among Grand Kadis of the Sharia Courts of Appeal to serve in rotation for two years;
                        </ListItem>
                        <ListItem>
                        one President of the Customary Court of Appeal to be appointed by the Chief Justice of Nigeria from among the 
                        Presidents of the Customary Courts of Appeal to serve in rotation for two years;
                        </ListItem>
                        <ListItem>
                        five members of the Nigerian Bar Association who have been qualified to practice for a period of not less than fifteen years, at least one of whom shall be a Senior Advocate of Nigeria, appointed by the Chief Justice of Nigeria on the recommendation of the National Executive Committee of the Nigerian Bar Association to serve for two years and subject to re-appointment: Provided that the five members shall sit in the Council only for the purposes of 
                        considering the names of persons for appointment to the superior courts of record; and
                        </ListItem>
                        <ListItem>
                        two person not being Legal Practitioners, who in the opinion of the Chief Justice of Nigeria, are of unquestionable integrity
                        </ListItem>
                    </Ol>
                
                 {/* <TitleWrapper>
                   <h1>POWER OF THE NATIONAL COUNCIL</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Paragraph>
                    By the provision of Paragraph 21 of Part One of the Third Schedule to the 1999 Constitution of the Federal Republic of Nigeria, as amended; The National Judicial Council shall have the power to:
                    </Paragraph> */}

                   
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

export default Composition
