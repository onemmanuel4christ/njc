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
    font-size: 24px;
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
        font-size: 16px;
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


const Structure = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>STRUCTURE OF NJC</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                   
                <TitleWrapper>
                   <h1>OFFICE OF THE SECRETARY</h1>
                </TitleWrapper> 
                <Paragraph>
                    The Office is the pivot around which all the activities of the Council revolve. 
                    It is the administrative office of the Council. The Office co-ordinates and supervises all 
                    activities of the Council including Council Meetings, disbursement and monitoring of Funds. 
                    The success or failure of the Departments & Units in the Council depends on the Office.
                     The Office liaises with other Arms of Government and Agencies to achieve the goals of the Council, among others.
                </Paragraph>

                <TitleWrapper>
                   <h1>ADMINISTRATION DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department has the primary function of dealing with all matters bordering on Appointments, Promotion and Discipline of Staff of the Council.
                 It also liaises with other relevant Government Agencies on Establishment matters.
                </Paragraph>

                <TitleWrapper>
                   <h1>BUDGET, PLANNING, RESEARCH AND STATISTICS DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                    The Department co-ordinates and supervises all matters relating 
                    to planning policies, programmes and data management. The Department also 
                    prepares the Budget of the Federal Judiciary and State Judicial Offices. 
                    The Department engages in Budget Monitoring and Evaluation, 
                    Due Process and Judicial Information Technology Policy (JITPCO).
                </Paragraph>
                   
                <TitleWrapper>
                   <h1>FINANCE AND ACCOUNTS DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                        The Department is responsible for processing, collection
                        and disbursement of all monies, Capital and Recurrent, for the Judiciary and 
                        also for the service of the Council. The Department is also 
                        responsible for rendering Financial Returns to different appropriate government offices.
                </Paragraph>
                <TitleWrapper>
                   <h1>INTERNAL AUDIT DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department audits the Account Books of the Council and it also performs prepayment audit, safeguard assets and ensures that all internal control measures are maintained 
                in the Councils financial transactions. It also advises the Council on all audits matters.
                </Paragraph>
                <TitleWrapper>
                   <h1>INFORMATION DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department is the Chief image maker of the Council. It is a repository of information for the Council and the Judiciary. It liaises with the media on all judicial matters. 
                It handles all public relations and Protocol matters of the Council.
                </Paragraph>
                <TitleWrapper>
                   <h1>PERFORMANCE EVALUATION AND LEGAL DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department is responsible for the administration of all secretarial matters relating to quarterly assessment of the Performance of Judicial Officers in the Federation vide Returns of Cases submitted. The Department also oversees the Legal Unit of the Council. The Department is also the secretariat of the
                 Committee on Performance Evaluation of Judicial Officers of Superior Courts of Records.
                </Paragraph>

                <TitleWrapper>
                   <h1>PENSION DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department pays the Pensions of all retired Federal Judicial Officers in 
                line with the Federal Judicial Officers (Administration of Pension) Act, 2007. It is responsible for receipt and remittance of Employer and Employee Contributions for the Federal Judiciary Staff under the Contributory Pension Scheme (Pension Reforms Act 2004 as amended).
                </Paragraph>

                <TitleWrapper>
                   <h1>PROCUREMENT DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department is responsible for all procurements and contract administration in the Council. The Department is also the Secretariat of the National Judicial Council Departmental Tenders Board. The Head of the Department is the Secretary of the Board.
                </Paragraph>

                <TitleWrapper>
                   <h1>SECRETARIAT DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The department prepares all Council and Committee working papers, agenda and minutes of meetings. The Department is also responsible for handling, in liaison with the Secretary, all Complaints and Petitions, queries issued to the Judicial Officers, their responses, actions taken by the Chairman and Secretary of the Council.
                </Paragraph>
                <TitleWrapper>
                   <h1>WORKS/PROJECT DEPARTMENT</h1>
                </TitleWrapper> 
                <Paragraph>
                The Department supervises, monitors, evaluates and processes all Contracts and Projects of the Federal Courts and Judicial Bodies to ensure strict compliance with due process in the award of Contracts.
                </Paragraph>
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

export default Structure
