import React from 'react'
import styled from 'styled-components'
import News from '../components/News'
import { AiOutlineClockCircle } from "react-icons/ai"

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
const NewsTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #041730;
  text-align: left;
`

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #041730;
  opacity: 70%;
  font-weight: 400;
  font-size: 16px;
  margin: 20px 0;
  border-bottom: 2px solid rgba(119, 119, 119, 0.25);
  padding-bottom: 20px;
`
const Author = styled.span`

`

const TimeStamp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`
const Right = styled.div`
flex: 1;
padding: 0 30px;

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
    text-align: left;
    font-weight: 400;
    line-height: 40px;

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

const NewsDetail = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <NewsTitle>
              NJC recommends appointment of sixty-four (64) Judiciary officers 
              </NewsTitle>
             <PostInfo>
               <Author>Posted by: 
                  SojiOye, Esq. (Director, Information)
                </Author>
               <TimeStamp>
               <AiOutlineClockCircle />
                 <span>17th December, 2021.</span>                 
              </TimeStamp>
             </PostInfo>
                    <Paragraph>
                    The National Judicial Council rose from its two days meeting held on 14 and 15 December 2021, with a resolution to bar the three Judges of Courts of concurrent jurisdiction who granted conflicting Exparte Orders in matters with same parties and subject matterfrom promotion to higher Bench for a period ranging from two to five years whenever they are due.

Even though there was no written petition, allegations of corruption or impropriety against the subject Judges, Council nevertheless, initiated investigation pursuant to its inherent disciplinary powers under the Constitution to unravel the circumstances that led to the spate of Exparte Orders granted by these Courts of coordinate jurisdiction over matters bearing same parties and subject matter.

The meeting which was chaired by the Deputy Chairman of Council, Hon. Justice Mary Peter-Odili, CFR agreed with the recommendations of the Investigation Committee set up in September 2021 that Hon. Justice OkogbuleGbasam of the High Court of Rivers State be barred from elevation to higher Bench for two years whenever he is due, as he failed to exercise due diligence in granting the Exparte Order in Suit No: PHC/2183/CS/2021 between IBEALWUCHI EARNEST ALEX & 4 ORS AND PRINCE UCHE SECONDUS & ANOR, as there was no real urgency,inthe circumstances of the matter, that would have required an Exparte Order.

His Lordship is also issued with a warning letter to be circumspect in granting such Exparte Orders in the future.

Council also resolved that Hon. Justice Nusirat I. Umar of the High Court of Kebbi State be barred from elevation to higher Bench for two years whenever due, having found fundamental defects and non-compliance with the law in granting the ExparteOrder in Suit No: KB/HC/M.71/2021 between YAHAYA USMAN & 2 ORS AND PRINCE UCHE SECONDUS & ANOR.

He is also issued with a warning letter to be circumspect in granting such Exparte Orders in the future.

Hon. Justice EdemItaKooffreh of the High Court of Cross River State will not bepromoted to higher Bench for five years for allowing himself to be used as a tool for “forum shopping” and abuse of Court process in Suit No: HC/240/2021 between Mr. ENANG KANUM WANI AND UCHE SECONDUS as it was evident that,in granting the Exparte Order, he was seisedof earlier Orders of the High Courts of Rivers and Kebbi States, being Courts of coordinate jurisdiction with his.

He is also to receive warning letter to be circumspect in granting such Exparte Orders in the future.

The Council also placed him on its Watch-List for a period of two years.      
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

export default NewsDetail
