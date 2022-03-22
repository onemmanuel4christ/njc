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
        text-transform: uppercase;
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
const MyList = styled.ul`
color: #041730;
font-size: 16px;
font-weight: 400;
list-style-type: upper-alpha;
`
const ListItem = styled.li`
    font-size: 16px;
    line-height: 40px;
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

const Committee = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>COMMITTEES IN NJC </h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                  
                <TitleWrapper>
                   <h1>committees of njc</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Ul>
                        <ListItem>
                        Interview of Nominees for Appointment as Judicial Officers of Superior Courts of Record.
                        </ListItem>
                        <ListItem>
                        Review of The 1999 Constitution.
                        </ListItem>
                        <ListItem>
                        Performance Evaluation of Judicial Officers of Superior Courts of Record in the Federation
                        </ListItem>
                        <ListItem>
                        Appointments, Promotion and Discipline
                        </ListItem>
                        <ListItem>
                        Preliminary Complaints and Assessment
                        </ListItem>
                        <ListItem>
                        Federal Judiciary Tenders Board
                        </ListItem>
                        <ListItem>
                        Federal Judiciary Tenders Board
                        </ListItem>
                        <ListItem>
                        Federal Judiciary Budget Monitoring, Evaluation of Projects and Contracts
                        </ListItem>
                        <ListItem>
                        Judicial Ethics Committee.
                        </ListItem>
                    </Ul>
                
                 <TitleWrapper>
                   <h1>KEY AREAS OF SUCCESS</h1>
                    </TitleWrapper> 
                    <Hr />
                    <MyList>
                        <ListItem>
                        In line with the National Judicial Councils Guidelines on Appointment of Judicial Officers in the Federation, only suitable candidates of impeccable character 
                        and with sound legal backgrounds are recommended for appointment to Judicial Offices.
                        </ListItem>
                        <ListItem>
                        Serving Judicial Officers are constantly monitored by the Judges Performance Evaluation Committee of the Council. Thus, undue delays in delivering judgments and applications for unnecessary adjournments in the Courts have reduced. Consequently, there is a general
                         improvement on the performance of Judges and general administration of Justice in the Federation.
                        </ListItem>

                        <ListItem>
                        The institutionalized disciplinary mechanism put in place by the Council pursuant to its Constitutional Powers, has to a large extent sanitized the Judiciary; as complaints of corruption and abuse of Judicial power by Judicial Officers in granting 
                        frivolous and reckless interim Injunctions (exparte orders), have reduced considerably.
                        </ListItem>

                        <ListItem>
                        Through a private Member bill, Council initiated transfer of the responsibility for administration of the Pensions of all retired Federal Judicial Officers from the Office of the Head of the Civil Service of the Federation to the National Judicial Council vide the Federal Judicial Officers (Administration of Pension) Act 2007. Since the Act came into force, retiring Federal Judicial Officers are paid their gratuity without delay, at the time of their 
                        retirement. Similarly, the Pensions of Retired Federal Judicial Officers are paid as at when due.
                        </ListItem>
                    </MyList>

                    <TitleWrapper>
                   <h1>CHALLENGES</h1>
                    </TitleWrapper> 
                    <Hr />
                    <MyList>
                        <ListItem>
                        Removal of Heads of Courts by virtue of Section 292 by the Executive and non-compliance by State Governments with the provision of Section 121 (3) of the 1999 Constitution of the Federal Republic of Nigeria as amended, are some of the major challenges
                        confronting the National Judicial Council and Administration of Justice in the States.
                        </ListItem>
                        <ListItem>
                        Reduction in the budget of the Judiciary in the last five years and the late monthly release of allocation as against the quarterly release to the Judiciary by the Executive at the 
                        Federal level, is affecting the general administration of justice in the Federation.
                        </ListItem>
                    </MyList>
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

export default Committee
