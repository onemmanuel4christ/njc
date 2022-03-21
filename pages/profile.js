import React from 'react'
import styled from 'styled-components'
import { AiOutlineClockCircle, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/Ai"
import { MdOutlineFacebook } from "react-icons/Md"
import News from '../components/News'

const Container = styled.div`
    padding: 100px 90px;
    background: rgba(214, 214, 214, 0.1);
    @media only screen and (max-width: 800px) {
    padding: 5px;
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
    /* padding: 20px; */

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
const Ol = styled.ol`
color: #041730;
font-size: 16px;
font-weight: 400;
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
const PressRelease = styled.div`
border-bottom:  2px solid rgba(119, 119, 119, 0.25);
padding-bottom: 30px;
margin-bottom: 20px;
    h2{
        color: #05A850;
        font-weight: 700;
        font-size: 16px;
    }
`
const TimeStamp = styled.div`
display: flex;
align-items: center;
gap: 30px;
color: #777777;
opacity: 75%;

`
const Time = styled.span`

`
const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 20px;
    border-bottom:  2px solid rgba(119, 119, 119, 0.25);

`
const SocialIconImage = styled.img`
    cursor: pointer;
`
const Profile = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>NJC PROFILE</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                    <Paragraph>
                        The National Judicial Council is one of the Federal Executive Bodies created by the 1999
                         Constitution of the Federal Republic of Nigeria. Amongst other functions, it is responsible 
                         for the Appointment, Promotion and Discipline of Judicial Officers. The Council has through 
                         various Reforms ensured that it protects and preserves the sanctity of the Judiciary. It is our 
                        desire to foster a justice system that is fair, speedy and meets the hope of all men.             
                    </Paragraph>
                <TitleWrapper>
                   <h1>SET GOALS:</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Ul>
                        <ListItem>An entrenched and preserved independent Judiciary</ListItem>
                        <ListItem>An entrenched and preserved independent Judiciary</ListItem>
                        <ListItem>An entrenched  entrenched and preserved independent Judiciary and preserved independent Judiciary</ListItem>
                        <ListItem>An entrenched and preserved independent Judiciary</ListItem>
                        <ListItem>An entrenched and  entrenched and preserved independent Judiciary preserved independent Judiciary</ListItem>
                        <ListItem>An entrenched  entrenched and preserved independent Judiciary entrenched and preserved independent Judiciary and preserved independent Judiciary</ListItem>
                    </Ul>
                
                 <TitleWrapper>
                   <h1>POWER OF THE NATIONAL COUNCIL</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Paragraph>
                    By the provision of Paragraph 21 of Part One of the Third Schedule to the 1999 Constitution of the Federal Republic of Nigeria, as amended; The National Judicial Council shall have the power to:
                    </Paragraph>

                    <Ul style={{listStyle: 'circle'}}>
                        <ListItem>An entrenched and preserved independent recommend to 
                                the President from among the list of persons submitted to it by - 
                                the Federal Judicial Service Commission, persons for appointment to the Offices
                                of the Chief Justice of Nigeria, the Justices of the Supreme Court, 
                                the President and Justices of the Court of Appeal, the Chief Judge and Judges
                                of the Federal High Court, and the Judicial Service Committee of the Federal Capital
                                Territory, Abuja; persons for appointment to the Offices of the Chief Judge and Judges of the High Court of the Federal Capital Territory, Abuja, the Grand Kadi and Kadis of the Sharia Court of Appeal of the Federal Capital Territory, Abuja and the President
                                and Judges of the Customary Court of Appeal of the Federal Capital Territory, Abuja;
                        </ListItem>
                        <ListItem>
                                recommend to the Governors from among the list of persons submitted to it by the State Judicial Service Commission persons for appointment to the Offices of the Chief Judges of the States and Judges of the High Courts of the States, the Grand Kadis and Kadis of the Sharia Courts of Appeal of the States; and President and Judges of the Customary Courts of Appeal of the States;
                        </ListItem>

                        <ListItem>
                        collect, control and disburse all moniess, Capital and Recurrent, for the Judiciary;
                        </ListItem>

                        <ListItem>
                        advise the President and Governors in any matter pertaining to the judiciary as may be referred to the Council by the President or the Governors;
                        </ListItem>

                        
                        <ListItem>
                        control and disburse all monies, Capital and Recurrent, for the services of the Council; and
                        </ListItem>

                        <ListItem>
                        The Secretary of the Council shall be appointed by the National Judicial Council on the recommendation of the Federal Judicial Service Commission and shall be a Legal Practitioner.”
                        </ListItem>
                    </Ul>

                    <TitleWrapper>
                   <h1>OTHER FUNCTIONS</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Paragraph>
                        Pursuant to its Constitutional powers in Section 158 & Paragraph 21 Sub-paragraph (i) of Part One of the Third Schedule to the 1999 Constitution of the Federal Republic of Nigeria, as amended, the Council has the following functions and responsibilities:
                    </Paragraph>
                   <OtherFunction>
                       <Heading>
                           <p>1.</p>
                           <Topic>Screening/Interview of Candidates/Judges/Justices for Judicial Appointments</Topic>
                       </Heading>
                       <Body>
                            The Council screens/interviews all candidates/Judges/Justices for appointment to all Superior Courts
                            of Record (Customary Court of Appeal, Sharia Court of Appeal, High Court of Justice, National Industrial Court of Nigeria, Federal High Court, Court of Appeal & the Supreme Court), in the Federation. “Screening and interview of all candidates nominated for Judicial appointments to Superior Courts of Record in the Federation is a new guideline to allow for competition among candidates and transparency in the selection mechanism for Judicial appointments”.
                       </Body>
                   </OtherFunction>
                   <OtherFunction>
                       <Heading>
                           <p>2.</p>
                           <Topic>
                               Performance Evaluation Of Judicial Officers Of Superior Courts Of Record In The Federation
                               </Topic>
                       </Heading>
                       <Body>
                       The Judges’ Performance Evaluation Committee of the National Judicial Council assesses and evaluates the performances of all Judicial Officers in the Federation based on their quarterly Returns of cases to the Council. “The Report of the Performance Evaluation of Judicial Officers in Superior Courts of Records in the Federation is used as a yardstick and mechanism to discipline Judges and to determine the actual needs of Courts vis-a-vis appointment of Judges and for budget consideration. The report is also considered by Council when Judicial Officers from Customary Court of Appeal, Sharia Court of Appeal, High Court of Justice, National Industrial Court and Federal High Court are being recommended for 
                       appointment to the Court of Appeal and also from the Court of Appeal to the Supreme Court.”
                       </Body>
                   </OtherFunction>
                   <OtherFunction>
                       <Heading>
                           <p>3.</p>
                           <Topic>
                           Budget
                            </Topic>
                       </Heading>
                       <Body>
                       The Council prepares the Capital and Recurrent budget for the Federal Judiciary; and also the Recurrent budget for the State Judicial Offices (High Court of Justice, Sharia Court of Appeal and Customary Court of Appeal),
                       in respect of their Consolidated Salaries, Allowances and Overhead cost.
                       </Body>
                   </OtherFunction>
                   <OtherFunction>
                       <Heading>
                           <p>4.</p>
                           <Topic>
                            Pension of Retired Federal Judicial Officers
                            </Topic>
                       </Heading>
                       <Body>
                       The National Judicial Council is responsible for payment of gratuities and pensions of all retired Federal Judicial
                        Officers vide the Federal Judicial Officers (Administration of Pension) Act 2007.
                       </Body>
                   </OtherFunction>
                   <OtherFunction>
                       <Heading>
                           <p>5.</p>
                           <Topic>
                           Due Process on Public Procurements and Contracts
                            </Topic>
                       </Heading>
                       <Body>
                       The Due Process Committee of the National Judicial Council ensures that all Contracts and procurements above a 
                       certain threshold in the Federal Judiciary are vetted in compliance with the Procurement Act.
                       </Body>
                   </OtherFunction>
                   <OtherFunction>
                       <Heading>
                           <p>6.</p>
                           <Topic>
                           Federal Judiciary Tenders Board
                            </Topic>
                       </Heading>
                       <Body>
                       The Board awards Contracts that are above the thresholds of Courts
                        and Judicial Bodies in the Federal Judiciary (Procurement Act).
                       </Body>
                   </OtherFunction>
                   <OtherFunction>
                       <Heading>
                           <p>7.</p>
                           <Topic>
                           Budget Monitoring, Projects & Contracts Evaluation
                            </Topic>
                       </Heading>
                       <Body>
                       In line with government policy, as it is done in the other Arms of Government, the Council 
                       monitors projects execution and evaluates all contracts awarded in the Federal Judiciary.
                       </Body>
                   </OtherFunction>
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

export default Profile