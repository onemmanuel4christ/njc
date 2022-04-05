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

const NjcPolicy = () => {
    return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>THE NATIONAL JUDICIAL POLICY</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                 <TitleWrapper>
                   <h1>THE NATIONAL JUDICIAL POLICY INTRODUCTION</h1>
                 </TitleWrapper> 
                 <Hr />
                    <RuleHolder>
                        <Section>1</Section>
                        <Desc>
                            <h4>INTRODUCTION</h4>
                            These Regulations may be cited as the Judicial Discipline Regulations and shall come into force on the 29th Day of June 2017.  
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.1</Section>
                        <Desc>
                        The National Judicial Council is a body established under section 153(1) of the 1999 Constitution with powers relating to appointments and exercise of disciplinary control over Judicial Officers specified in paragraph 21 of Part I of the Third Schedule of the Constitution. By the same paragraph it also has power to collect, control and disburse all monies, capital and recurrent, for the judiciary and to deal with all matters relating to policy and administration.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.2</Section>
                        <Desc>
                        The National Judicial Institute is a body established by the National Judicial Institute Act, Cap N55, LFN 2004. By virtue of section 3(1) of the Act, the institute shall serve as the principal focal point of judicial activities relating to the promotion of efficiency, uniformity and improvement in the quality of judicial services in the superior and inferior Courts.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.3</Section>
                        <Desc>
                        For the purpose of subsection (1) of section 3 of the National Judicial Institute Act, Cap N55, LFN 2004, the Institute is empowered in Section 2(2) to 
                          <ol style={{listStyleType: 'lower-alpha'}}> 
                              <li>
                              Conduct courses for all categories of Judicial Officers and their supporting staff with a view to expanding and improving their overall knowledge and performance in their different sections of service;

                              </li>
                              <li>
                              Provide continuing education for all categories of Judicial Officers by undertaking, organizing, conducting and facilitating study courses, lectures, seminars, workshops, conferences and other programmes relating to judicial education.
                              </li>
                              <li>
                              Organize once in two years a conference for all Nigerian Judges of superior and inferior Courts respectively;
                              </li>
                              <li>
                              The quorum for a meeting shall not be less than one-third of the total number of the Council Members as at the date of that Meeting.
                              </li>
                              <li>
                              Disseminate by way of publication of books, journals, records, reports or other means of information about any part of its activities, to the extent deemed justified by the Board and generally as a contribution towards knowledge; and
                              </li>
                              <li>
                              Promote or undertake any other activity which in the opinion of the Board is calculated to help achieve the purpose for which the Institute was established.
                              </li>
                          </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.4</Section>
                        <Desc>
                        By virtue of its powers the Council and the Institute both occupy a central position in the fulfilment of the national aspiration for the improvement of an efficient and credible administration of justice through justice delivery institution. The capacity of the superior Courts to perform their role transparently and efficiently becomes central for an effective and efficient Judicial system.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.5</Section>
                        <Desc>
                        In recent times there has been much concern by the public about efficiency, effectiveness and transparency of the Judicial system. In particular, there has been weaning confidence in the performance of the superior courts in regard to justice delivery. Such concerns make it imperative to identify issues and problems militating against a credible justice delivery system that would command the confidence of the citizen.                               
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.6</Section>
                        <Desc>
                        Some of these can readily be identified to include: efficiency of the judicial appointment process; transparency and accountability in the judicial process and of administration of justice; judicial performance; and the capacity of the superior courts to promote and protect the rule of law
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.7</Section>
                        <Desc>
                        Other issues include problems of delay in justice delivery; perception that the judiciary may not be able to sustain its independence; quality of judgement; inadequacy of resources needed for the judiciary to provide efficient administration of justice, among other problems.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.8</Section>
                        <Desc>
                        The need to put in place a judicial policy is borne out of the realization that the most efficient and realistic way to deal with the identified issues and problems is by way of a judicial policy that would guide,  provide principles and guidelines for tackling and dealing with the issues and providing actions for objective and durable solutions to the problems.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.9</Section>
                        <Desc>
                        In the final analysis, the objective of a National Judicial Policy is to promote and ensure the highest possible standard of qualitative justice delivery.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.10</Section>
                        <Desc>
                        In formulating a holistic National Judicial Policy, there is the need to merge the National Judicial Policy formulated and published by the National Judicial Institute pursuant to Section 3(2)(e) of the National Judicial Institute Act, Cap N55, LFN 2004 and that formulated by the National Judicial Council pursuant to paragraph 21 of part 1 of the Third Schedule of the 1999 Constitution of the Federal Republic of Nigeria as amended.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.11</Section>
                        <Desc>
                        A formulation of holistic National Judicial Policy recognizes areas covered by the Institute’s National Judicial Policy touched on and is limited to subjects such as: Judicial Independence and Accountability; Judicial Ethics; Case Flow Management; Speedy and Judicious Disposal of Corruption, Economic Crime and High Profile Cases; Judicial Administration; Technology; Relationship with other branches of government; Justice Sector Co-ordination; Access to Justice; Alternative Dispute Resolution; Review of Outdated Laws; Public Awareness, Trust and Confidence in the Judiciary.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.12</Section>
                        <Desc>
                        The first draft of the National Judicial Institute’s National Judicial Policy was published on 2nd October, 2013 long after the first draft of the NJC National Judicial Policy had been before the Council. The current National Judicial Council formulated National Judicial Policy is able, to some extent, take note of the content of the National Judicial Institutes formulated National Judicial Policy
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.3</Section>
                        <Desc>
                        It is manifest that the two complement each other, with the NJC National Judicial Policy covering grounds that the NJI policy could not have covered, such as, articulating the Judicial Discipline Policy, the Judicial Code of Conduct Policy; the Judicial Education and Training Policy; the Judicial Performance Policy; the Court Management Policy; the Collaboration Policy and the Policy relating to the Office of the Chief Justice.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.14</Section>
                        <Desc>
                        What is intended to be unique about and emphasized by the National Judicial Policy are, in addition to statement of the kernel of the Policy, the implementation strategies in form of modalities and institutions embedded in the policy.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>1.15</Section>
                        <Desc>
                        It is envisaged that a robust policy must reflect the identification of the problems that make the making of Policy imperative, as well as the strategy for implementing the Policy.
                        </Desc>
                   </RuleHolder>

                   <RuleHolder>
                        <Section>2</Section>
                        <Desc>
                            <h4>POLICY RELATING TO JUDICIAL OFFICERS</h4>
                            Judicial Officers are the mainstay of the Judicial system. The National Judicial policy as it relates to Judicial Officers is therefore, a fundamental and basic aspect of the National Judicial Policy.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1</Section>
                        <Desc>
                        JUDICIAL APPOINTMENTS POLICY
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
                        <Section>2.1.1</Section>
                        <Desc>
                        It is a basic and fundamental aspect of the Judicial Policy that the judicial appointments process must be transparent and merit-based and skill-based. A transparent and carefully designed appointment process is indispensable to an efficient and independent judiciary, able to command public confidence in the administration of justice and capable of promoting and protecting the rule of law and human rights.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.2</Section>
                        <Desc>
                        Every aspect of judicial appointment process should, therefore, be such as would command public respect and confidence that the best persons in terms of skill, learning, integrity and courage are appointed as Judicial Officers.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.3</Section>
                        <Desc>
                        To fulfil this objective and attain the requisite standard of selection, new Judicial Appointments Guidelines should be such that would ensure the qualities identified above.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.4</Section>
                        <Desc>
                        Such Guidelines would contain provisions to ensure that -
                            <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>
                                Everyone who has the requisite qualifications and qualities needed and desires to be considered for appointment to the judicial office is not excluded from declaring his/her interests;
                                </li>
                                <li>
                                The yardstick for appointment in terms of skill, competence, integrity and comportment is strictly observed;
                                </li>
                                <li>
                                Mechanism is put in place for assessment of suitability of candidates, including, but not limited to, careful screening, interview and assessment of evidence presented by the candidate of skill and experience.
                                </li>
                             </ol>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.5</Section>
                        <Desc>
                        The Judicial Appointment Policy will ensure that lack of comparative seniority will not be an obstacle to the appointment of deserving candidates of palpable high standard of integrity and excellence.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.6</Section>
                        <Desc>
                        There should at all levels of appointment process, screening of candidates through Screening Committees that would be charged with evaluating each candidate in regards to the minimum standards set by the Judicial Appointments Guidelines and making recommendations to the relevant bodies at each of the levels.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.7</Section>
                        <Desc>
                        Such bodies will determine the composition of the relevant Committees.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.1.8</Section>
                        <Desc>
                        The Committee may be empowered to appoint persons competent to render expert advice in the discharge of its functions.
                        </Desc>
                   </RuleHolder>
                 
                   <RuleHolder>
                        <Section>2.2</Section>
                        <Desc>
                            <h4>JUDICIAL DISCIPLINE POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.1</Section>
                        <Desc>
                        The National Judicial Policy ascribes much premium to judicial accountability and Ethical conduct in judicial office.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.2</Section>
                        <Desc>
                        The National Judicial Policy would emphasize the need to strengthen existing judicial discipline procedures to ensure easy accessibility by complainants and transparency and fairness in the process, both to the Judge and to the complainants as would meet international standards.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.3</Section>
                        <Desc>
                        To this end, the Judicial Discipline Regulation may specify, among other things: 
                            <ul>
                                <li>Who may make the complaints?</li>
                                <li>Time within which complaints could be made from the event or matter complained of;</li>
                                <li>Registration procedure of the complaint;</li>
                                <li>Form of a complaint;</li>
                                <li>
                                    Circumstances permitting consideration of information regarding incidents that may amount to breach of code of conduct without complaint;

                                </li>
                                <li>
                                Grounds of procedure for dismissal of complaints without investigation;
                                </li>
                                <li>Reference of complaints for investigation and composition of investigating entity;</li>
                                <li>Terms of reference of such investigating entity or committee;</li>
                                <li>Procedure of investigation by investigating entity;</li>
                                <li>
                                    Form and contents of the investigation report and its disclosure to the subject of the investigation
                                </li>
                                <li>
                                Proposed disciplinary action, notification and final decision; nature of disciplinary power that Council may exercise;
                                </li>
                                <li>
                                Powers of Council to order a review and composition of review body;
                                </li>
                                <li>
                                Circumstances in which Council may order a review
                                </li>
                                <li>
                                Powers and procedure of the review body;
                                </li>
                                <li>Powers of interim suspension by Council</li>
                            </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.4</Section>
                        <Desc>
                        It shall be the policy of the judiciary on complaints that allegations of misconduct against Judicial Officers or employees of the judiciary shall not be leaked or published in the media.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.5</Section>
                        <Desc>
                        Where complaints or allegations against the Judicial Officers and court employees are submitted for investigation, the complainant or complainants shall be made to give an undertaking not to do anything to prejudice investigation or actions that may be taken.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.6</Section>
                        <Desc>
                        The institutions of the judiciary concerned with investigation or and implementation of decisions taken on such complaints shall be obliged to cease further action where such complaints are leaked or discussed in the media.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.7</Section>
                        <Desc>
                        Where such a leakage is occasioned after the submission of a complaint, then all investigations on the complaints shall be suspended, the leakage investigated and such leakage is from the complainants or through other parties known to such a complainant, such a complaint should be discarded.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.8</Section>
                        <Desc>
                        Where such leakage is occasioned prior to the presentation of the complaint and the source of the leakage is found to be the complainants or through other parties known to and connected with the complaint, then such complaint shall not be accepted, upon submission, by the appropriate disciplinary body.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.2.9</Section>
                        <Desc>
                        Upon all the conclusion of any investigation, the judicial disciplinary bodies may allow public disclosure of their findings, subject to following the proper channels for such disclosure.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.3</Section>
                        <Desc>
                            <h4> JUDICIAL CODE OF CONDUCT POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.3.1</Section>
                        <Desc>
                        <ul style={{listStyleType: 'lower-alpha'}}>
                            <li>
                                Judges must be accountable for public funds and property in their case and should be prudent in the management and use of resources.
                            </li>
                            <li>
                            The judge must perform his/her functions with restraint and uphold the dignity of the court and of all persons involved.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.3.2</Section>
                        <Desc>
                        The Code of Conduct for Judicial Officers and Code of Conduct for Judicial Employees, with the amendment discouraging acceptance of gifts from other arms of Government, should be such as would be adequate. Compliance with their provisions shall be mandatory.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.3.3</Section>
                        <Desc>
                        There will be established by the National Judicial Council a Judicial Ethics Committee that will perform the following functions:
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                            Preparation of amendments to the Judicial Code of Conduct as the need arises. (There is already a draft of the Revised Code of Conduct for Judicial Officers which is included as an appendix to this Policy awaiting its adoption).
                            </li>
                            <li>
                            Undertake the responsibility to elaborate the provisions of the Code, explain and remind Judicial Officers of the provisions of the Code and, generally, and do all such things necessary to ensure a continuous high standard of judicial accountability and probity.
                            </li>
                            <li>
                            Conduct periodic surveys on behalf of the Council to measure public perception of level of compliance with ethical standards by the Judiciary.
                            </li>
                            <li>
                            Monitor and report on laxity by Judicial Officers in observance of ethical standards in the performance of judicial duties.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.3.4</Section>
                        <Desc>
                        The Revised Judicial Code of Conduct will contain, among other things:
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                                A clear distinction between provisions that are merely exhortatory and those that are intended to attract disciplinary sanction when infringed shall be clearly specified wherever possible;
                            </li>
                            <li>
                                Mechanism for monitoring compliance with the Code of Conduct to the end of which the National Judicial Council will require each Head of Court to devise and periodically report appropriate compliance mechanism to the Council.
                            </li>
                            <li>
                                Provision for proactive regulatory enforcement of standards and targets in the Code of Conduct; to the end of which National Judicial Council shall design reporting requirements that each Judge would agree and need to comply with periodically.
                            </li>
                            <li>
                                Provisions relating to the responsibility of Judicial Officers so as to avoid inordinate and excessive length of proceedings causing delay in justice delivery; to this end. the Judicial Performance and Evaluation Committee of the National Judicial Council will be mandated to request each Judiciary to compile and submit regular statistics of ages of pending cases.
                            </li>
                            <li>
                                Sanctions for persistent under performance, inability to utilize time efficiently, low standard of judicial management and persistent failure to comply with sitting requirements; to this end efforts would be made to devise effective means of judicial skill evaluation in the several areas mentioned.
                            </li>
                            <li>
                                Provision for financial disclosure before and after participating in sensitive and highly visible trials such as election petitions proceedings; to this end, Judges entrusted with such assignment may be required to submit themselves to dedicated assets declaration.
                            </li>
                            <li>
                                Subject to Rule 4.1 of the Code, prohibition of discussion of merits of pending matters with parties or persons who may be interested in the outcome of the case or their known agents;
                            </li>
                            <li>
                                Any other conduct that may bring the administration of justice into disrepute, damage or weaken public trust in and satisfaction with standard of justice delivery; to this end, the National Judicial Council will continually publish detailed reminders of the acts that may be deemed to amount to such conduct; encourage each judiciary to discuss in-house what would be taken as such conduct.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4</Section>
                        <Desc>
                            <h4>
                                JUDICIAL EDUCATION AND TRAINING POLICY
                            </h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.1</Section>
                        <Desc>
                        The main objective of the Judicial Education and Training Policy is capacity building and improvement of Judicial Officers for better performance of administration of justice
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.2</Section>
                        <Desc>
                        The National Judicial Policy proceeds on certain basic propositions:
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                            Continuing judicial education and training is indispensable to efficient and qualitative justice delivery.
                            </li>
                            <li>
                            Judicial Education must be holistic, practical and supported by essential tools, such as library and use of the latest Information Technology.
                            </li>
                            <li>
                            Judicial Education and Training can only have the desired impact if it is continuing at all levels and sectors of the judicial system.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.3</Section>
                        <Desc>
                        The Judicial Education and Training Policy takes cognizance of and is formulated on the footing of those basic propositions.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.4</Section>
                        <Desc>
                        The Judicial Education and Training Policy recognizes that Council does not have responsibility for Judicial Education and that such responsibility rests with the National Judicial Institute. However, the main focus of the policy is to provide the framework of the performance by Council of a secondary, but important, role of relating and assessing the result of judicial education delivery to actual performance of Judicial Officers.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.5</Section>
                        <Desc>
                        In that secondary role, the policy will establish a Judicial Education Advisory Committee that would be composed of not more than 20 Judges and such other persons as the Chief Justice may appoint charged with the function of identifying and suggesting to the National Judicial Institute and Heads of Court content, form and direction of Judicial Education.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.6</Section>
                        <Desc>
                        The policy recognizes that the National Judicial Institute is the national institution for Judicial Education delivery. However, the policy also recognizes that there are other possible Secondary Judicial education delivery centers to which the National Judicial Institute can perform collaborating, consultancy and expert roles in designing state based Judicial Education Programmes. For this purpose, the Judicial Education Policy will designate each State Judiciary and each Judiciary in the Federal system (except the Court of Appeal and the Supreme Court), a Judicial Education Delivery Centre.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.7</Section>
                        <Desc>
                        Each Judicial Education Delivery Centre shall make provision for:
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                            Guidelines prescribing a quarterly programme of Judicial Education.
                            </li>
                            <li>
                            Mandatory participation by Judicial Officers in the State;
                            </li>
                            <li>
                            Duration of 4 hours in a quarter of such programmes out of which at least 2 hours will be interactive and experience sharing sessions with former and serving Judges from within and outside the State jurisdiction and appellate Courts;
                            </li>
                            <li>
                            Ensuring that the core topics will include training in Judicial Administration, strategies of optimal utilization of judicial time, improvement of quality of judgment, training in use of ICT tools for legal research;
                            </li>
                            <li>
                               Use of internet for legal research purposes
                            </li>
                            <li>
                            Delay reduction strategies.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.8</Section>
                        <Desc>
                        The National Judicial Institute shall be encouraged to:
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                            Liaise with the Judicial Education Advisory Committee with a view to making compulsory initial education for newly appointed officers more practical and interactive than theoretical;
                            </li>
                            <li>
                            Prepare a bench book for use at such initial training session that would assist the Judge in dealing with real life situations that would normally arise in the course of proceedings and assist in dealing with interlocutory matters arising in course of proceedings more expeditiously.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.9</Section>
                        <Desc>
                             The National Judicial Policy proceeds on certain basic propositions:  Federal and State Judiciaries shall develop a plan of action for Judicial Officers and courts staff to refresh their knowledge on current developments in law, the practice of law and court procedures. Such training shall be either in-house or externally provided. Participation in courses organized by the National Judicial Institute shall be compulsory for Judicial Officers and support staff in the Judiciary. The National Judicial Institute shall be strengthen further to encourage and undertake training of the staff at the State level to ensure that more Judicial Officer’s and Staff benefit from such training.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.4.10</Section>
                        <Desc>
                        <ul style={{listStyleType: 'lower-alpha'}}>
                            <li>
                            The Judiciary in Nigeria both at the Federal and the State levels shall encourage the use of Information and Communication Technology (ICT) and, in particular, all courts shall, as far as practicable, predicate and integrate their Information Technology System on the Judicial Information Technology  Policy of the Federal Republic of Nigeria when adopted.
                            </li>
                            <li>
                            Judicial Bodies and Institutions shall be equipped with Information Technology Systems.
                            </li>
                            <li>
                            All Judicial Officers shall undertake mandatory training on use and application of Information Technology Systems including electronic and digital recording and transcription of court proceedings and processes.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.5</Section>
                        <Desc>
                            <h4>JUDICIAL PERFORMANCE POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.5.1</Section>
                        <Desc>
                        The Judicial Performance Policy will give prominence to strategies to strengthen judicial performance through constant monitoring and evaluation and through continuous monitoring and assessment of the adequacy of the facilities available to Judges for efficient performance
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>2.5.2</Section>
                        <Desc>
                        To this end the Judicial Performance and Evaluation Committee will strengthen the quarterly evaluation mechanisms already put in place and introduce new measures to ensure improved performance of Judicial Officers. Such measures will include measures to:
                        <ul>
                            <li>Promote self-evaluation by Judges and by State and Federal Judiciaries;</li>
                            <li>
                            Request each judiciary to devise time management and utilization and monitoring mechanisms and guidelines by Judges;
                            </li>
                            <li>
                            Request State and Federal Judiciaries to set targets for completion of cases classified as: small claims, fast track cases, complex cases, criminal cases and normal civil cases and monitor compliance;
                            </li>
                            <li>
                            Demand that reasons be given for criminal cases not disposed of within the set target period;
                            </li>
                            <li>
                            Require each Judiciary to submit action plan and strategies for clearing backlog of civil cases pending for more than 3 years and criminal cases pending for more than 18 months;
                            </li>
                            <li>
                            Require each Judiciary to submit to an annual Judicial System Audit and survey of the effectiveness and efficiency of its judicial system;
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3</Section>
                        <Desc>
                        <h4>ACCESS TO JUSTICE POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.1</Section>
                        <Desc>
                        In order to enhance access to justice, more courts should be built especially at lower level, so that justice is brought to the doorsteps of all citizenry.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.2</Section>
                        <Desc>
                        More Judges should also be appointed to man all the courts with adequate supporting staff.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.3</Section>
                        <Desc>
                        The courts should be well maintained and comfortable, and the welfare of all Judicial Officers and Staff  should be enhanced.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.4</Section>
                        <Desc>
                        The training of all manpower is necessary and must be undertaken where necessary.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.5</Section>
                        <Desc>
                        All courts should promote the use of Information and Communication Technology (ICT).
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.6</Section>
                        <Desc>
                        The courts should have updated and easily accessible laws and procedure rules.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.7</Section>
                        <Desc>
                        Alternate dispute resolution (ADR) should be adopted by all courts.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.8</Section>
                        <Desc>
                        Immediate implementation of and compliance with the Administration of Criminal Justice Act.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.9</Section>
                        <Desc>
                        Every Judiciary in Nigeria should establish a Public Enlightenment unit to enlighten the public on the workings of the Judiciary.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.10</Section>
                        <Desc>
                        Where the survey of the Judicial Systems reveal problems encountered by the system, such as-
                        <ul>
                            <li>Insufficient budgetary allocation to the Judiciary causing inadequacy of resources;</li>
                            <li>Sub-standard court houses and accommodation for the Judges;</li>
                            <li>Absence of legal officer to assist judges</li>
                            <li>
                                Council would undertake the responsibility of bringing these to the notice of the other arms of government and request change;

                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>3.11</Section>
                        <Desc>
                        Bold procedural reforms to promote expedition in civil litigation and criminal trials in every Judiciary will be a priority. To this end the Chief Justice of Nigeria may commission the Law Reform Commission to initiate legislation to promote bureaucratic efficiency of the court and remove procedural obstacles to expedition in civil cases and criminal trials.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4</Section>
                        <Desc>
                            <h4>CASE FLOW MANAGEMENT POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4.1</Section>
                        <Desc>
                        The Judiciary should adopt measures designed to promote flexibility in the handling of cases, while reducing cost, delay and other unnecessary burdens to litigants in the adjudication of cases.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4.2</Section>
                        <Desc>
                        It will be essential to also fix time frames for the disposal of civil and criminal cases. The criminal cases should be given priority because of the sub human conditions in which persons awaiting trial or undergoing trial are kept. Fundamental Rights cases should also be on the fast track.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4.3</Section>
                        <Desc>
                        Courts in Nigeria should therefore develop a Case Flow Matrix as well as maintain a Case Tracking Register (where such do not exist) to ensure effective management of the flow of cases within their respective jurisdictions. The Case Flow Matrix and Case Tracking Register could be manual, electronic or both.
                        </Desc>
                   </RuleHolder>

                   <RuleHolder>
                        <Section>4.4</Section>
                        <Desc>
                        All Judiciaries within the Federal Republic of Nigeria should ensure that all courts in their jurisdictions further the overriding objective of justice by actively managing cases.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4.5</Section>
                        <Desc>
                        A Judicial Officer shall always encourage parties before the court to explore Alternative Dispute Resolution (ADR) procedures where appropriate.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>4.6</Section>
                        <Desc>
                        To promote Speedy and Judicious Disposal of Corruption, Economic Crime and High Profile Cases:
                        <ul style={{listStyleType: 'lower-alpha'}}>
                            <li>
                                There is the need to appoint more Judicial Officers in Nigeria considering the large population. The number of Judges to be appointed should be commensurate not only to the population but also to the workload in the State or Court, as the case may be
                            </li>
                            <li>
                                 Adequate funding for the Judiciary, especially, at the state level and proper infrastructure and ICT equipment as well as conducive work environment must be provided to complement the improved manpower in each jurisdiction.
                            </li>
                            <li>
                                 The Judge should take firm charge of his court and should be proactive in dealing with interlocutory applications and must not bend to the whims and caprices of counsel.
                            </li>
                            <li>
                                The Judge should give priority to criminal cases and “high profile” cases in dealing where there are a high number of criminal cases, Judges should be specially designated to handle such criminal cases.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5</Section>
                        <Desc>
                            <h4> JUDICIAL ADMINISTRATION AND COURT MANAGEMENT POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.1</Section>
                        <Desc>
                        The Judiciary shall put in place strategies that will achieve the goals of Judicial Administration vis-a-vis the power in the Courts by Section 6 (6) of the 1999 Constitution of the Federal Republic of Nigeria.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.2</Section>
                        <Desc>
                        The Judiciary at the Federal and State levels in Nigeria shall provide a fair, transparent and impartial administration of justice in accordance with the Constitution of the Federal Republic of Nigeria, the law and other good practices.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.3</Section>
                        <Desc>
                        For the Courts to be efficient in the discharge of their functions there must be a Court Management Policy that recognizes Court Management as vital to qualitative justice delivery system.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.4</Section>
                        <Desc>
                        The responsibility for Court management rests on the Chief Registrar, acting no doubt under the directive of the Chief Judge/Head of Court, but with a degree of initiative and discretion.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.5</Section>
                        <Desc>
                        The Head of each Judiciary is expected to establish an efficient Court Management structure that will provide tools and support services in order to ensure high performance, productivity of the Judiciary and speedy and fair administration of justice.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.6</Section>
                        <Desc>
                        The Chief Registrar, among other things, will keep such statistics and records as may be required by the Chief Justice and Chairman of Council; or, the Head of each Judiciary; or the Performance Evaluation Committee, for instance, of pending cases, length of proceedings, nature of cases, etc., daily cause list of the various Courts and records of time utilization by the Courts.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.7</Section>
                        <Desc>
                        Each Head of Courts will be required to devise for all Court Staff, Transparency and Anti-Corruption Strategies and Mechanism within the Transparency and Anti-Corruption Policy of Council. The Strategies and Mechanism will be administered and supervised by the Chief Registrar.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.8</Section>
                        <Desc>
                        Each Chief Registrar will be expected to submit under the directive of the Head of Court, training programmes that will inculcate professionalism in all Court Staff and in every administrative section of the Court.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>5.9</Section>
                        <Desc>
                        The Chief Registrar will periodically, as may be directed by the Head of the Judiciary, constantly monitor use of Court resources and personnel of the Court and submit same to the Head of Court to ensure that there is no wastage in the same.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6</Section>
                        <Desc>
                            <h4>TRANSPARENCY AND ANTI-CORRUPTION POLICY</h4>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.1</Section>
                        <Desc>
                        The National Judicial Policy recognizes that the greatest and most damaging challenge to administration of justice is corruption and that tackling this challenge must go beyond mere exhortation and sentiments.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.2</Section>
                        <Desc>
                        The Policy, therefore, will ensure that multifaceted strategies and guidelines that will ensure transparency in the administration of justice are put in place.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.3</Section>
                        <Desc>
                        While disciplinary proceedings are an indispensable reactive mechanism to deal with corruption, mechanism that would be preventive and ensure palpable transparency in every facet of Judicial Administration and also ensure early detection of corrupt practices or tendencies for corrupt practices in the system will be put in place.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.4</Section>
                        <Desc>
                        The Policy accepts that for a strong transparency mechanism to be established, first, the present working of judicial system must be properly studied and, second, the modalities of corrupt practices in the judicial system must be understood.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.5</Section>
                        <Desc>
                        As to the first, Council will set up a Working Group for the study of the working of the Judicial System, covering the modalities of access to justice delivery and extending to Judicial decision making. This study will, among other things, include a study of the practices of the Regisgtry of each Court; efficiency of services rendered to the public by it; and the process of Judicial decision-making.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.6</Section>
                        <Desc>
                        As to the second, Council will setup ad hoc Fact Finding Committees to provide a platform to afford an opportunity to citizens who profess factual and credible knowledge of information of the nature and modalities of corruption in the Judicial System to ventilate such, considering widespread claims in the country by several persons that corruption is prevalent and practiced with impunity in the system of justice. Such committees will be empowered to receive confidential and privileged information.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.7</Section>
                        <Desc>
                        The outcome of the work of the two committees coupled with data generated from Judicial Performance Evaluation will provide realistic basis for designing an effective and durable transparency system in the Administration of Justice.
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.8</Section>
                        <Desc>
                        As an interim measure, the following transparency mechanisms will be put in place:
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                            Assignment of cases will be guided by predetermined in-house rules so as to avoid lack of transparency in the assignment of cases to a particular Judge or Judges.
                            </li>
                            <li>
                            Duration of cases will be constantly tracked and explanation demanded routinely for delay in disposition of cases.
                            </li>
                            <li>
                            There will be in every Court a public complaints and public information desk to receive complaints from the public on inefficiency and transparency of the system, other than in regard to quality and merits of judgments, and to give information to the litigants concerning the statues of their cases. 
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>
                   <RuleHolder>
                        <Section>6.8</Section>
                        <Desc>
                            <h4>JUDICIAL INDEPENDENCE POLICY</h4>
                        </Desc>
                   </RuleHolder>       
                   <RuleHolder>
                        <Section>7.1</Section>
                        <Desc>
                            <h4>JUDICIAL INDEPENDENCE POLICY</h4>
                        As an interim measure, the following transparency mechanisms will be put in place:
                        <ul style={{listStyleType: 'lower-alpha'}}>
                            <li>
                            The independence of a Judge is sacrosanct and very necessary to impartial justice delivery. All institutions and authorities must respect, protect, and defend that independence.
                            </li>
                            <li>
                            In the performance of Judicial functions the Judge is subject only to the Law and must consider only the Law.
                            </li>
                            <li>
                            A Judge must not take or attempt to take orders or instructions of any kind from anyone that may influence his decisions in the performance of his Judicial functions.  
                            </li>
                            <li>
                            In the performance of Judicial functions, the Judge must be impartial and must be seen to be so. 
                            </li>
                            <li>
                            A Judge shall in discharging his functions ensure the rights of everyone to a fair trial.
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>        
                   <RuleHolder>
                        <Section>7.2</Section>
                        <Desc>
                        Judges must be accountable for public funds and property in their care and should be prudent in the management and use of resources.
                        </Desc>
                   </RuleHolder>         
                   <RuleHolder>
                        <Section>7.3</Section>
                        <Desc>
                        <ul style={{listStyleType: 'lower-alpha'}}>
                            <li>
                            The relationship of the Judiciary with the other Arms of Government should be   cordial.
                            </li>
                            <li>
                            The Judiciary shall not resort to lobbying in ensuring that the Legislature and the Executive perform their constitutional responsibility.
                            </li>
                            <li>
                            All the Arms of  Government should respect the doctrine of Separation of Powers as enshrined in the 1999 Constitution of the Federal Republic of Nigeria
                            </li>
                        </ul>
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>7.4</Section>
                        <Desc>
                        The Constitution sufficiently provides the frame-work of judicial independence. Similarly, there is no indication that Judges lack decisional independence.
                        </Desc>
                   </RuleHolder>        
                   <RuleHolder>
                        <Section>7.5</Section>
                        <Desc>
                        Several aspects of the National Judicial Policy, if faithfully implemented, have already provided the correct environment for the practice of Judicial independence, such as: a transparent Judicial appointment and promotion policy; a fair and independent Judicial discipline process; provision of adequate resources to the Courts and, mechanism for ensuring the personal integrity of the Judge and transparency of the System of Justice.
                        </Desc>
                   </RuleHolder>        
                   <RuleHolder>
                        <Section>8</Section>
                        <Desc>
                            <h4>COLLABORATION POLICY</h4>
                        </Desc>
                   </RuleHolder>    
                   <RuleHolder>
                        <Section>8.1</Section>
                        <Desc>
                        The Policy acknowledges that several aspects of the Policy can only be implemented fully through collaboration with other Arms and Agencies of Government, the Nigerian Bar Association and civil society groups.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.2</Section>
                        <Desc>
                        In this regard, it is part of the National Judicial Policy that the endeavor to improve the Administration of Justice in Nigeria shall be open to collaborative efforts.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.3</Section>
                        <Desc>
                        The Chief Justice of Nigeria, Chairman of Council will identify areas in which such collaboration is apt and needed; to this end, there will be Justice Sector Coordination Committee to advise the Chief Justice.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.3.1</Section>
                        <Desc>
                        The Chief Justice of Nigeria, and Chief Judges of the States and the Federal Capital Territory, Abuja, shall set up the Administration of Justice Commission and the Administration of Justice Committee, where they have not been set up at the Federal and State levels as provided for under the Administration of Justice Act, Cap 3, Volume 1, Laws of the Federation of Nigeria (LFN) 2004.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.3.2</Section>
                        <Desc>
                        The Administration of Justice Commission/Committee shall ensure that there is a deliberate and determined effort to achieve interagency co-operation in the Justice sector and set out the strategy for achieving this goal.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.3.3</Section>
                        <Desc>
                        The Commission/Committee shall ensure that all Agencies collaborate to determine the possibility of effectively linking proposed reforms with the overall objectives of the agencies.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.3.4</Section>
                        <Desc>
                        The Commission/Committee shall consider the challenges faced by each and proffer solutions.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>8.3.5</Section>
                        <Desc>
                        Government at the Federal and State levels shall ensure adequate funding of the Court System and all the agencies charged with various responsibilities in the Administration of Justice, to enable them perform their functions properly, thereby ensuring an efficient and effective Justice delivery system in Nigeria.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>9</Section>
                        <Desc>
                            <h4>THE OFFICE OF THE CHIEF JUSTICE OF NIGERIA</h4>
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>9.1</Section>
                        <Desc>
                        The Policy recognizes the importance of the Office of Chief Justice of Nigeria and the role of the Chief Justice to maintain standards and co-coordinating efficiency of the System of Justice throughout Nigeria.
                        </Desc>
                   </RuleHolder>   
                   <RuleHolder>
                        <Section>9.2</Section>
                        <Desc>
                             The Policy considers that the important role of the Chief Justice and public perception of what role entails have not been sufficiently captured both in the Constitution and by statute. Consequently, the Policy should seek a clearer and wider definition of the powers of the Chief Justice of Nigeria than hitherto.
                       </Desc>
                   </RuleHolder>  
                   <RuleHolder>
                        <Section>10</Section>
                        <Desc>
                            <h4>MISCELLANEOUS</h4>
                        </Desc>
                   </RuleHolder>  
                   <RuleHolder>
                        <Section>10.1</Section>
                        <Desc>
                            <h4> Outdated Law</h4>
                            Outdated laws should be amended to reflect the present day reality in Nigeria and enhance the Administration of Justice.
                        </Desc>
                   </RuleHolder>  
                   <RuleHolder>
                        <Section>10.2</Section>
                        <Desc>
                            <h4>Drafting of Laws</h4>
                            Legal draftsmen should be trained and deloyed or employed to carry out the task of drafting laws in a professional manner, so as to portray the true spirit and intention of the law.
                        </Desc>
                   </RuleHolder>  
                   <RuleHolder>
                        <Section>10.3</Section>
                        <Desc>
                            <h4>Public Enlightenment Units</h4>
                            Each Federal and State Judiciary in Nigeria shall establish enlightenment units to generally and specifically enlighten the public on their policies and processes, including changes thereto.
                        </Desc>
                   </RuleHolder>  
                  <Desc>
                      <h4>SUMMARY OF SOME INSTITUTIONS OF THE POLICY</h4>
                      <ol style={{listStyleType: 'lower-roman'}}>
                          <li>
                          udicial Appointments Committee that would be charged with evaluating each candidate in regard to the standards set by the Judicial Appointments Guidelines and making recommendations to the Council.
                          </li>
                          <li>
                          Judicial Ethics Committee of Council that would perform specified functions.
                          </li>
                          <li>
                          Judicial Ethical Advisory Committee that would be composed of not more than 20 Judges and such other persons as the Chief Judge may appoint, charged with the function of identifying and suggesting content, form and direction of Judicial Education. Judicial Education Policy should designate each State Judiciary and each Judiciary in the Federal (except the Court of Appeal and the Supreme Court).
                          </li>
                          <li>
                              Judicial Education delivery center that will:
                              <ul>
                                  <li>Formulate guidelines prescribing a quarterly programme of Judicial Education;</li>
                                  <li>Ensure mandatory participation by Judicial Officers in the State;</li>
                                  <li>Ensuring that the core topics will be included in training programmes;</li>
                              </ul>
                         </li>
                          <li>Annual Judicial System Audit and Survey of the effectiveness and efficiency of its Judicial System.</li>
                          <li>
                          Transparency and Anti-Corruption Strategies and Mechanism within the Transparency and Anti-Corruption Policy of Council designed to be vigorous pro-active mechanisms that would be preventive and ensure palpability in every facet of judicial administration and would ensure early detection of corrupt practices or tendency for corrupt practices in the system.
                          </li>
                          <li>
                          A Working Group for the study of the working of the judicial systems, from the modalities of access to justice delivery and judicial decision making.
                          </li>
                          <li>
                          Fact Finding Committees to provide and ad-hoc platform to afford an opportunity to citizens who have information to give on the nature and modalities of corruption in the judicial system to ventilate such on factual basis in view of widespread claims in the media by several persons that corruption is prevalent and practiced with impunity in the system of justice designing an effective and durable transparency system in the administration of justice.
                          </li>
                          <li>
                          Other transparency mechanisms such as a public complaints and information desk to receive complaints from the public on inefficiency and transparency of the system, other than in regards to quality and merits of judgments and to give information to the litigants concerning the status of their cases.
                          </li>
                      </ol>
                  </Desc>
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

export default NjcPolicy