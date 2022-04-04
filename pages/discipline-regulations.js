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
  h3{
    margin: 10px 0;
    color: #041730;

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
        font-weight: 700;
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

const RuleHolder = styled.div`
  display: flex;
  margin-bottom: 10px;
 
`

const Section = styled.span`
  flex: 3%;
  margin-right: 10px;
  margin-top: 8px;
  display: flex;
  color: #041730;
  font-size: 16px;
  font-weight: 500;
`
const Desc = styled.p`
display: flex;
justify-content: start;
flex-direction: column;
    flex: 97%;
    line-height: 40px;
    word-wrap: break-word;
    font-size: 16px;
    color: #041730;
    text-align: justify;
    font-weight: 400;
    h4{
    padding:0 10px;
    background: #041730;
    width: fit-content;
    border-radius: 5px;  
    color: #fff; 
    }
    
`

const DisciplineRegulation = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>DISCIPLINE REGULATIONS</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                 <TitleWrapper>
                   <h1>JUDICIAL DISCIPLINE REGULATIONS 2017</h1>
                 </TitleWrapper> 
                 <Hr />
                    <RuleHolder>
                        <Section>1</Section>
                        <Desc>
                            <h4>CITATION AND COMMENCEMENT</h4>
                            These Regulations may be cited as the Judicial Discipline Regulations and shall come into force on the 29th Day of June 2017.  
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2</Section>
                        <Desc>
                            <h4>SCOPE</h4>
                            These Regulations govern allegations and complaints of misconduct against Judicial Officers and proceedings initiated in exercise of the power of the National Judicial Council pursuant to Part 1 of the Third Schedule of the 1999 Constitution of the Federal Republic of Nigeria as amended, to exercise disciplinary control over Judicial Officers against whom allegation of misconduct has been made. 
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3</Section>
                        <Desc>
                            <h4>INTERPRETATION</h4>
                            In these Regulations- <br />
                           <ol>
                               <li>
                                   <strong>Chairman:</strong> means Chairman of the National Judicial Council
                               </li>
                               <li>
                               <strong>Complaint:</strong>means a complaint containing allegation of misconduct by or disability of a Judicial Officer.
                               </li>
                               <li>
                               <strong>Council</strong> means the National Judicial Council established by Section 153(1))(i) of the 1999 Constitution.
                               </li>
                               <li>
                               <strong>Constitution:</strong> means the Constitution of the Federal Republic of Nigeria 1999 as amended.
                               </li>
                               <li>
                               Disability means a temporary or permanent condition that renders the Judge unable to discharge the duties of Judicial Office;
                               </li>
                               <li>
                               <strong>Head of Court: </strong> means a holder of the offices of the Chief Justice of Nigeria, President of the Court of Appeal, the Chief Judge of the Federal High Court, President of the National Industrial Court of Nigeria, Chief Judge of the High Court of the Federal Capital Territory, Chief Judges of a State, Grand Kadi of the Sharia Court of Appeal of the Federal Capital Territory, Grand Kadi of the Sharia Court of Appeal of a State, President of the Customary Court of Appeal of the Federal Capital Territory, and President of the Customary Court of Appeal of a State.
                               </li>
                               <li>
                               <strong>Judicial Office:</strong> means the office of the Chief Justice of Nigeria or Justice of the Supreme Court of Nigeria , the Office of the President or Justice of the Court of Appeal, the office of the Chief Judge or Judge of the Federal High Court, the office of the President or Judge of the National Industrial Court of Nigeria, the office of the Chief Judge or Judge of the High Court of the Federal Capital Territory, Abuja, the office of Chief Judge or Judge of the High Court of a State, the office of the Grand Kadi or Kadi of the Sharia Court of Appeal of the Federal Capital Territory, Abuja, the office of the President or Judge of the Customary Court of Appeal of the Federal Capital Territory, Abuja, the office of the President or Judge of the Customary Court of Appeal of a State.
                               </li>
                               <li>
                               <strong>Judicial Officer: </strong>means the holder of any judicial office under the Constitution.
                               </li>
                               <li>
                               <strong>Misconduct:</strong> includes conduct prejudicial to the effective and expeditious administration of the business of the Courts or any conduct described as misconduct in the Constitution and the Code of Conduct for Judicial Officers of Superior Courts;
                               </li>
                               <li>
                              <strong> Secretary:</strong> means the person appointed by the National Judicial Council as Secretary to the Council;
                               </li>
                               <li>
                               <strong>Subject Judge:</strong>  means a Judicial Officers against whom a complaint of misconduct is made to the Council.
                               </li>
                           </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4</Section>
                        <Desc>
                            <h4>MEETINGS OF THE COUNCIL</h4>
                          <ol>
                              <li>
                                  The Council shall hold meetings at such times and place as the Chairman may appoint.

                              </li>
                              <li>
                              Notwithstanding the provision of  paragraph (1) of this regulation, a Meeting of the Council shall be convened if five or more members make a request to that effect, in writing to the Chairman, specifying the business to be transacted.
                              </li>
                              <li>
                              Every Meeting of the Council shall be presided by the Chairman and in his absence, by a member selected by a simple majority of Members present and/or nominations in the call of expression of interest and in the request for nomination.
                              </li>
                              <li>
                              The quorum for a meeting shall not be less than one-third of the total number of the Council Members as at the date of that Meeting.
                              </li>
                              <li>
                              A Member shall be entitled to one vote and the simple majority votes shall be the decision of the Council provided that the Chairman or other person presiding shall have a casting vote as well as deliberative vote.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5</Section>
                        <Desc>
                            <h4>APPLICATION</h4>
                            These Regulations apply to the discipline of:- <br />
                          <ol>
                              <li>
                              All Judicial offices created by the 1999 Constitution of the Federal Republic of Nigeria (as amended);
                              </li>
                              <li>
                              All judicial officers appointed pursuant to the 1999 Constitution of the Federal Republic of Nigeria (as amended) and
                              </li>
                              <li>
                              An office or officer that has been designated by law to be subject to the supervisory or regulatory powers of the Council.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6</Section>
                        <Desc>
                            <h4>RECORD OF MEETINGS</h4>
                            Record shall be kept of the Members present and of the business transacted at every Meeting of the Council. <br />
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>7</Section>
                        <Desc>
                            <h4>DECISION WITHOUT MEETING </h4>
                            Record shall be kept of the Members present and of the business transacted at every Meeting of the Council. <br />
                            <ol>
                              <li>
                              Subject to paragraph (2) of this regulation, a decision may be made by the Council without a Meeting, by circulation of the relevant papers among the  members and the expression of their views in writing and in such case, the views of majority of the Members shall be the decision of the Council. 
                              </li>
                              <li>
                              If any Member requires that a decision on a matter, being dealt with by circulation of the relevant papers be deferred until the subject matter shall be considered at a Meeting of the Council, no decision shall be made on that subject except at a Meeting of the Council.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>8</Section>
                        <Desc>
                            <h4>PRIVILEGE FOR ACTIONS OF MEMBERS </h4>
                            The Chairman or any Member shall have like protection and privilege, in the case of any action or suit brought against him for any act done or omitted to be done in the execution of his duties under these Regulations as is by law given to acts done or words spoken by a Judge of any superior Court in the exercise of his judicial office.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>9</Section>
                        <Desc>
                            <h4>DUTIES OF PUBLIC OFFICERS </h4>
                            The Council may require the holder of an office of a Judge or an office in the Federal or State Public Service to attend and give evidence before it concerning any matter which it is required to consider in exercise of its functions under these Regulations and may require the production of any official documents relating to any such matter.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>10</Section>
                        <Desc>
                            <h4>MATERIAL TO BE MADE AVAILABLE IN THE COUNCUL</h4>
                            The holder of an office of a Judge or public office on being so required shall attend before the Council and shall ensure that all relevant documents and papers are made available to the Council.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>11</Section>
                        <Desc>
                            <h4>TIME LIMIT WITHIN WHICH A COMPLAINT MUST BE MADE  </h4>
                            <ol>
                              <li>
                              A complaint must be made within six months of the event or matter complained of; provided that a complaint relating to a continuing state of affairs may be made at any time while that state of affairs continues or within six months from when it ends.
                              </li>
                              <li>
                              Subject to regulation 12 of these Regulations, a complaint made outside the time limit set in paragraph (1) must be dismissed by the Council upon report to the Council by the Secretary to the Council. 
                              </li>
                              <li>
                              The Secretary shall notify the person making the complaint of the dismissal not later than thirty days of such dismissal.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>12</Section>
                        <Desc>
                            <h4> EXTENSION OF TIME LIMIT FOR MAKING COMPLAINTS  </h4>
                            <ol>
                              <li>
                              The Chief Justice of Nigeria/Chairman of Council may extend a time limit under these Regulations, whether or not the time limit has expired, where there is good reason to do so.
                              </li>
                              <li>
                              A person who is refused an extension of a time limit under paragraph (1) may make a representation to the Chief Justice/Chairman of Council asking the Chairman, within fourteen working days of being notified of the refusal asking him/her to refer the request for an extension to the Council.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>13</Section>
                        <Desc>
                            <h4> FAILURE TO COMPLY WITH TIME LIMIT </h4>
                                <ol>
                                <li>
                                Where in the course of disciplinary proceedings any person who fails to comply with the relevant time limit set by anyone empowered to do so, the person exercising the function to set time limit may-
                                </li>
                                    <ol style={{listStyleType: 'lower-alpha'}}>
                                        <li>
                                        continue to deal with the case,
                                        </li>
                                        <li>
                                        treat representations made outside the time limit as if they have not been made,
                                    </li>
                                    <li>complete any report that he may be empowered to make,</li>
                                    <li>
                                    recommend the dismissal of the case where the default is by the person who made the complaint or any person acting on his behalf.
                                    </li>
                                </ol>
                                <li>
                                Where the time for taking a step or doing an act relating to the complaint by the complainant is expressly set in the particular case by Council, the complaint may be dismissed.
                                </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>14</Section>
                        <Desc>
                            <h4> FORM OF COMPLAINT  </h4>
                            <ol>
                                <li>
                                        A complaint must be in writing, unless the Chief Justice/Chairman of Council, or a Head of Court or the Council considers that in the circumstances it is reasonable to accept a complaint in another form.
                                </li>
                                <li>
                                        A complainant may use a form prescribed by the Council and appended to these Regulations.
                                </li>
                                <li>
                                        A complaint must contain a concise statement that details the specific facts on which the claim of misconduct or disability is based. The statement of facts should include a description of:  
                                </li>
                                <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>
                                      what happened;
                                </li>
                                <li>
                                        when and where the relevant event happened;
                                </li>
                                <li>
                                    any information that would help the investigator to check the facts; 
                                </li>
                                <li>
                                nature of the misconduct alleged, itemized where several types of misconduct are alleged; and
                                </li>
                                <li>
                                for an allegation of disability, any additional facts that form the basis of the allegation.
                                </li>
                          </ol>
                          <li>
                          A complaint may be typewritten or otherwise presented in a legible form. The Secretary may not accept an illegible complaint for filing and may return it to the complainant with a request to resubmit it in a legible form.
                          </li>
                          <li>
                          A complaint must be signed by the complainant and accompanied by a verifying affidavit deposed to by the complainant before a Court of Record.
                          </li>
                          <li>
                          A complaint must contain a contact address provided by the complainant. Such contact address must not be solely postal box number, but must include an address where the complainant can be located. The Secretary may not accept a complaint for filing if the address given is vague. Where in addition to a contact address a telephone number is given, such telephone number must have been registered in the name of the complainant or an identifiable person whose name is stated.
                          </li>
                          <li>
                          The complainant must verify in writing the truth of the facts alleged in the complaint. Any complaint not so verified shall be rejected for filing by the Secretary or by the Preliminary Complaint Assessment Committee also known as the Sifting Committee.
                          </li>
                          <li>
                          The Secretary may request the complainant to provide as many copies of the complaint as may be required in hard or soft copies or in both.
                          </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>15</Section>
                        <Desc>
                            <h4>INITIATION OF COMPLAINT</h4>
                           <strong> Where to file a complaint </strong>
                            <ol>
                                <li>
                                Except as provided in these Regulations, a complaint against a Judicial Officer must be addressed to the Chief Justice/Chairman of Council, and filed at the Office of the Secretary to the Council; or submitted to the Office of the Chief Justice of Nigeria, or submitted to the Head of Court of the Judicial Officer to whom the complaint relates. 
                                </li>
                                <strong> Action by recipient of Complaint </strong><br />
                                <li>
                                In this paragraph “recipient of complaint” means the Chief Justice/Chairman or Head of Court to whom a Complaint has been submitted.
                                </li>
                                <li>
                                In this paragraph “recipient of complaint” means the Chief Justice/Chairman or Head of Court to whom a Complaint has been submitted.
                                </li>
                                <strong> Action by the Secretary </strong><br />
                                <li>
                                The Secretary shall cause the complaint to be registered in a Register in a Complaint Registry established by the Secretary in the Office of the Secretary.
                                </li>
                                <li>
                                The register shall contain the date of the complaint, the date of filing or receipt of the complaint, the serial number assigned to the complaint by the Secretary pursuant to regulation 15(7), the name of the complainant, the name of the Judicial Officer subject of the complaint, a remarks column recording action taken and such other information as the Secretary may prescribe.
                                </li>
                                <li>
                                Upon receiving a complaint filed against a Judicial Officer or from a recipient of the complaint, the Secretary shall open a file and assign a serial number to the complaint.
                                </li>
                                <li>
                                The Secretary shall promptly seek further directives from the Chief Justice/Chairman of Council with regard to the complaint in circumstances as the Chief  Justice/Chairman of Council may from time to time prescribe.
                                </li>
                            </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>16</Section>
                        <Desc>
                            <h4>WITHDRAWAL OF COMPLAINT </h4>
                            <ol>
                              <li>
                              The complainant may expressly withdraw a complaint at any time.
                              </li>
                              <li>
                              A complaint must be treated as withdrawn, notwithstanding that a complaint has not been expressly withdrawn, if the complainant indicates that he does not want the complaint or any further information which he has provided to be disclosed to the subject of the disciplinary proceedings.
                              </li>
                              <li>
                              If a complaint is withdrawn or treated as withdrawn at any time, but the Council considers that the matters which it raised are sufficiently serious for further consideration to be necessary, the Council may direct that the complaint shall be considered further under these Regulations or under rules made under these Regulations.
                              </li>
                              <li>
                              Subject to regulation 13(1)(c) if a complaint is withdrawn or treated as withdrawn at any time, the Secretary shall report that fact to the Chairman for any further action as the Chairman may direct.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>17</Section>
                        <Desc>
                            <h4>PRELIMINARY COMPLAINT ASSESSMENT COMMITTEE </h4>
                            <ol>
                              <li>
                              The Council may establish a Preliminary Complaint Assessment Committee.
                              </li>
                              <li>
                              The Chairman may assess a complaint or, may at his discretion, refer it to a Preliminary Complaint Assessment Committee where such has been established.
                              </li>
                              <li>
                              The Preliminary Complaint Assessment Committee shall review the complaint referred to it and advise the Council whether the complaint should be:
                              </li>
                                    <ol style={{listStyleType: 'lower-alpha'}}>
                                        <li>
                                            dismissed;
                                        </li>
                                        <li>
                                             terminated and not proceeded with because an intervening event has overtaken the complaint;
                                        </li>
                                        <li>
                                             terminated because remedial action has been taken that makes action on the complaint no longer necessary;
                                        </li>
                                        <li>
                                             referred to an investigation committee should his response not be sufficient to dispose of the matter without an investigation.
                                        </li>
                                        <li>
                                            referred to the subject Judicial Officer for his response
                                        </li>
                                     </ol>
                                    <li>
                                        Where the Chairman assesses a complaint he shall advise the Council as contained in paragraph (3) of this regulation.
                                  </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>17</Section>
                        <Desc>
                            <h4>ACTION BY THE PRELIMINARY COMPLAINT ASSESSMENT COMMITTEE </h4>
                            <ol>
                              <li>
                                    In determining what advice to render, the Preliminary Complaint Assessment Committee shall study the complaint carefully so as to render a reasoned advice to the Council; and may
                              </li>
                              <ol style={{listStyleType: 'lower-alpha'}}>
                                  <li>
                                      In writing or otherwise communicate with the subject Judicial Officer for clarification of certain points as the Committee may find necessary; or to respond to the complaint in some limited respects as may help the Committee in advising the Council.
                                </li>
                                  <li>
                                    Communicate orally or in writing with the subject Judicial Officer to inquire about any intervening events that may make it unnecessary to proceed with the complaint, such as retirement of the Judicial Officer, or resignation; or such other intervening events that may make inquiry into the complaint academic.
                                  </li>
                              </ol>
                              <li>
                              The Preliminary Complaint Assessment Committee may advise a dismissal of the complaint if it is of the opinion that:
                              </li>

                              <ol style={{listStyleType: 'lower-alpha'}}>
                                  <li>
                                  the complaint does not adequately particularize the matter complained of; provided the Committee shall not advise a dismissal under this ground unless it has given the complainant a reasonable opportunity to provide adequate particulars of the complaint and the complainant has failed to do so;
                                </li>
                                  <li>
                                  it is about the merits of a judicial decision, a procedural ruling or judicial case management, and raises no question of misconduct;
                                  </li>
                                  <li>
                                  the action complained of was not done or caused to be done by a Judicial Officer;
                                  </li>
                                  <li>
                                  it is vexatious and an abuse for the complaint procedure;
                                  </li>
                                  <li>
                                  it is without substance or, even if substantiated, would not require any disciplinary action to be taken.
                                  </li>
                                  <li>
                                  it is on the fact of it untrue, mistaken or misconceived;
                                  </li>
                                  <li>
                                  it raises a matter which has already been dealt with, whether under these regulations or otherwise, and does not present any new material evidence;
                                  </li>
                                  <li>
                                  it is about a person who no longer holds any judicial office.
                                  </li>
                                  <li>
                                  it is about the private life of a Judicial Officer and could not reasonably be considered to affect his suitability to hold judicial office;
                                  </li>
                                  <li>
                                  it is about the professional conduct in a non-judicial capacity of a Judicial Officer and could not reasonably be considered to affect his suitability to hold judicial office; and
                                  </li>
                                  <li>
                                  for any other reason it does not relate to misconduct of a Judicial Officer.
                                  </li>
                              </ol>
                              <li>
                              The Preliminary Complaint Assessment Committee shall not advise the Council to dismiss a complaint-
                              </li>
                              <ol style={{listStyleType: 'lower-alpha'}}>
                                  <li>
                                      on the ground that it is about the merits of a judicial decision that a case or matter is unduly delayed, where the complaint includes supported allegations that the Judge is induced by an improper motive in deciding or delaying a case or matter. An improper contacts with parties or counsel for one side in a case;

                                  </li>
                                  <li>
                                        on the ground that the Judge failed to excuse himself from a case, where a complaint includes supported allegations that a failure to excuse was not only wrong but is ill-motivated- in particular, that the Judge knew of a good ground for recusal but, for illicit reasons, deliberately failed to heed it; and
                                  </li>
                                  <li>
                                        if a complaint includes supported allegations that a Judge exhibited bias by making personally derogatory remarks irrelevant to the issues, or treated litigants and counsel with extreme hostility while on the bench.
                                  </li>
                              </ol>
                              
                              <li>
                                  The Preliminary Complaint Assessment Committee shall as soon as it completes a review of a complaint submit its report to the Council through the Secretary who shall promptly place it before the Council.
                              </li>
                              <li>
                                  The report of the Preliminary Complaint Assessment Committee shall contain concise statement of the facts and show the grounds and reasons for the Committee’s recommendation.
                              </li>
                              <li>
                                  Where the Council accepts the recommendation of the Chairman or the Preliminary Complaint Assessment Committee that the complaint be referred for investigation, it shall direct that a copy of the complaint with the Council’s decision be sent to the subject Judicial Officer.
                              </li>
                              <li>
                                 Upon receipt of the complaint, the subject Judicial Officer shall file a reply within fourteen (14) days, and such response shall be accompanied by an affidavit deposed to by him before a Court of Record.
                              </li>
                              <li>
                                  The response of the subject Judicial Officer shall be served on the complainant.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>19</Section>
                        <Desc>
                            <h4>REFERENCE TO AN INVESTIGATION COMMITTEE  </h4>
                            Where the Council has decided that a complaint be referred to an Investigation Committee, the Council shall immediately appoint an Investigation Committee to investigate the complaint or particular part of the complaint as it may direct and to report and make recommendations to the Council.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>20</Section>
                        <Desc>
                            <h4>COMPOSITION OF INVESTIGATING COMMITTEE</h4>
                            <ol>
                                <li>
                                    An investigation Committee shall be composed of not less than three and not more than five Members of the Council.
                                </li>
                                <li>
                                    The Chairman of the Investigating Committee who must be a Member of the Council, shall be appointed by the Council from among the Members of the Committee.
                                </li>
                                <li>
                                     The Chairman of the Investigating Committee must be of a higher Judicial rank than the subject of the disciplinary proceedings; and, the members of Committee whether serving or retired Judicial Officers may be of a higher Judicial rank than the subject of the disciplinary proceedings or of the same Judicial rank as the subject of the disciplinary proceedings. In relation to a retired Judicial Officer, reference to his Judicial rank means the rank he held immediately before he ceased to hold Judicial Office.
                                </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>21</Section>
                        <Desc>
                            <h4>TERMS OF REFERENCE OF INVESTIGATING COMMITTEE</h4>
                            <ol>
                                <li>
                                    The terms of reference for the investigation by the investigating Committee shall be such as the Council may decide. The terms may include but shall not be limited to the authority to:
                                </li>
                                        <ol style={{listStyleType: 'lower-alpha'}}>
                                            <li>
                                                notify the subject Judge and any complainant of its proposals for the conduct of the investigation; the substance of the misconduct alleged against him; and whether it proposes to take oral evidence;
                                            </li>
                                            <li>
                                                invite the subject Judge and any complainant to make representations on its proposals;
                                            </li>
                                            <li>
                                                record any representations on the proposals which those persons may make;
                                            </li>
                                            <li>
                                                inform the subject Judge and the complainant of their right to counsel;
                                            </li>
                                            <li>
                                                exercise its discretion and announce its decision whether other witnesses may have counsel present when they testify.

                                            </li>
                                        </ol>
                                <li>
                                All testimony taken at the hearing shall be given under oath or affirmation and recorded.
                                </li>
                                <li>
                                The rules of evidence do not apply to Investigating Committee’s hearings.
                                </li>
                                <li>
                                The complainant shall be given an opportunity to produce evidence and call witnesses. 
                                </li>
                                <li>
                                  At any hearing of the Investigating Committee the subject Judge has the right to present evidence, to compel the attendance of witnesses, and to compel the production of witnesses and to cross examine, in person or by counsel, Committee witnesses.
                                </li>
                                <li>
                                    The subject Judge and the complainant may submit written argument to the Investigating Committee and shall be given reasonable opportunity to present oral argument at an appropriate stage of the investigation.
                                </li>
                                <li>
                                     The Investigating Committee may take oral evidence if it considers it necessary to do so.
                                </li>
                                <li>
                                    The Investigating Committee must arrange for any evidence given orally to be recorded in a transcript or by electronic recording.
                                </li>
                                <li></li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>22</Section>
                        <Desc>
                            <h4> CEASING TO HOLD OFFICE BEFORE CONCLUSION OF INVESTIGATION </h4>
                            Disciplinary proceedings including an investigation shall not be terminated because the subject of the proceedings or investigation ceases to hold office.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>23</Section>
                        <Desc>
                            <h4> THE REPORT OF INVESTIGATING COMMITTEE </h4>
                            Disciplinary proceedings including an investigation shall not be terminated because the subject of the proceedings or investigation ceases to hold office.
                            <ol>
                                <li>
                                     The Investigating Committee may, if it deems fit, forward a copy of its draft report; or a part of the report; or a summary of the report excluding its recommendations, as the Committee deems material to the subject Judge and the complainant and invite each of them to make a representation about it within fourteen days of delivery of the draft.
                                </li>
                                <li>
                                    After considering any representations, the Investigating Committee shall within thirty days of the representations complete its report.
                                </li>
                                <li>
                                    The Investigating Committee shall immediately submit to the Council through the Chairman of the Council a comprehensive report of its investigation, including its findings and recommendation for Council’s action.
                                </li>
                                <li>
                                    The report shall be accompanied by a statement of the vote by which it was adopted and signed by the Chairman and all members of the Committee together with any dissenting or separate statements of Committee members.  
                                </li>
                                <li>
                                    The investigating Committee report to the Council must contain:
                                </li>
                                <ol style={{listStyleType: 'lower-alpha'}}>
                                    <li>
                                        its findings of facts on each of the allegations in the complaint;
                                    </li>
                                    <li>
                                    whether the case is substantiated or not;
                                    </li>
                                    <li>
                                    if the case is substantiated the nature of misconduct or misconducts or disability found;
                                    </li>
                                    <li>
                                    whether disciplinary action should be taken, and if so what disciplinary action should be taken; and
                                    </li>
                                    <li>
                                    findings with regard to any other matters in its terms of reference.
                                    </li>
                                </ol>

                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>24</Section>
                        <Desc>
                            <h4>INTERIM SUSPENSION PENDING FINAL DECISION</h4>
                            <ol>
                                <li>
                                In the event of an interim suspension, the Council shall-
                                </li>
                                <ol style={{listStyleType: 'lower-alpha'}}>
                                    <li>
                                    notify the office holder of the suspension, the reasons for it and if the suspension is not immediate, the time when it comes into effect;
                                    </li>
                                    <li>
                                    notify the office holder of the factors that will be taken into account in determining when the suspension will end;
                                    </li>
                                    <li>
                                    if the case is substantiated the nature of misconduct or misconducts or disability found;
                                    </li>
                                    <li>
                                    inform the office holder of any action required by the Council.
                                    </li>
                                </ol>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>25</Section>
                        <Desc>
                            <h4>PROPOSED DISCIPLINARY ACTION, NOTIFICATION AND FINAL DECISION</h4>
                            <ol>
                                <li>
                                Upon a consideration of the report of the investigating Committee, the Council may decide:
                                </li>
                                <ol style={{listStyleType: 'lower-alpha'}}>
                                    <li>
                                    that the case is unsubstantiated and is dismissed
                                    </li>
                                    <li>
                                    the case is substantiated wholly or in part, but does not require further action and is dismissed.
                                    </li>
                                    <li>
                                    the case is substantiated wholly or in part, but should be dealt with informally by the Chief Justice/Chairman of the Council or any person nominated by him where the misconduct is not grave
                                    </li>
                                    <li>
                                    the case is substantiated wholly or in part and the Council will exercise one or more of its disciplinary powers-
                                    </li>
                                        <ol style={{listStyleType: 'lower-roman'}}>
                                            <li>
                                            to censure or reprimand the subject Judge; or
                                            </li>
                                            <li>
                                            to suspend the subject Judge; or
                                            </li>
                                            <li>
                                            to direct that the subject Judge be put on a ‘watch list’ for the purpose of monitoring and reporting his conduct or ability to perform the functions of his office for a period specified by the Council; or
                                            </li>
                                            <li>
                                            to prohibit the nomination of the subject Judge for appointment to a higher Judicial Office for a specified period or permanently;
                                            </li>
                                    </ol>
                                </ol>
                                <li>
                                    the Council will exercise its power to recommend that the subject Judge be removed from judicial office.
                                </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>26</Section>
                        <Desc>
                            <h4>NOTIFICATION OF FINAL DECISION</h4>
                            <ol>
                                <li>
                                The decision taken in regulation 25 of these Regulations shall be notified to the following persons:
                                </li>
                                <ol style={{listStyleType: 'lower-alpha'}}>
                                    <li>
                                    The subject of the decision
                                    </li>
                                    <li>
                                    The Complainant
                                    </li>
                                    <li>
                                    The relevant Head of Court
                                    </li>
                                </ol>
                                <li>
                                Upon a request made to the Council, the decision may be notified to any other person. The grant or refusal of such request is in the absolute discretion of the Council.
                                </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <TitleWrapper>
                        <h1>MISCELLANEOUS</h1>
                   </TitleWrapper>
                   <RuleHolder>
                        <Section>27</Section>
                        <Desc>
                            <h4>PUBLICATION OF DECISION</h4>
                            The Council may publish the information about disciplinary proceedings or the decision of the Council in disciplinary proceedings. Publication for this purpose means any form of communication which is addressed to an individual, a section of the public or the public at large.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>28</Section>
                        <Desc>
                            <h4>WATCH LIST</h4>
                            <ol>
                                <li>
                                The Council shall establish a watch list to record the names of Judicial Officers as the Council may determine for the purpose of monitoring-
                                </li>
                                <ol style={{listStyleType: 'lower-alpha'}}>
                                    <li>
                                    The conduct in relation to his office and performance of Judicial Officers whose conduct has been subject of allegation of misconduct or disability and such allegation has been found established but a sanction of removal from judicial office has not been imposed by Council; or
                                    </li>
                                    <li>
                                    The performance of a Judicial Officer whose performance has consistently fallen below standard of performance set by the Judicial Performance and Evaluation Committee of the Council and approved by the Council; or
                                    </li>
                                    <li>
                                    The conduct in relations to a Judicial Officer who has a reputation of habitually disregarding the Code of Conduct for Judicial Officers.
                                    </li>
                                </ol>
                                <li>
                                The Council shall prescribe the duration for which such name shall remain on the watch list and the factors that will engender the removal of the name from the watch list.
                                </li>
                                <li>
                                The Council may determine that a Judicial Officer whose name is on the watch list may not be eligible for consideration for elevation to a higher Judicial Office for as long as his name remains on the watch list.
                                </li>
                                <li>
                                The Council shall notify a Judicial Officer whose name is proposed to be placed on the watch list and invite him to make representation within 14 days of the notification.
                                </li>
                                <li>
                                Council shall make rules for recording and removal of names from the watch list and for monitoring the conduct in professional regard of Judicial Officer whose names are placed on the watch list.
                                </li>
                               
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>29</Section>
                        <Desc>
                            <h4>ABUSE OF THE JUDICIAL MISCONDUCT OR DISABILITY COMPLAINT PROCESS</h4>
                              <ol>
                                <li>
                                Any person who abuses the judicial misconduct or disability complaint process by filing frivolous or repetitive complaints, may be restricted by Council from filing further complaints.
                                </li>
                                <li>
                                Such person shall first be given an opportunity to show cause in writing why his right to file further complaints should not be restricted.
                                </li>          
                             </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>30</Section>
                        <Desc>
                            <h4>TRANSITIONAL PROVISION</h4>
                            These Regulations shall apply mutatis mutandis to any case under consideration before these Regulations come into force which has not been withdrawn, dismissed or determined.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>31</Section>
                        <Desc>
                            <h4>REVOCATION</h4>
                            Judicial Discipline Regulations 2014 are revoked.
                        </Desc>
                   </RuleHolder>
                   <h4>MADE BY THE NATIONAL JUDICIAL COUNCIL THIS 9TH DAY OF MARCH, 2017.</h4>
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

export default DisciplineRegulation