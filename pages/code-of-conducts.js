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
    
`

const CodeOfCOnduct = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>CODE OF CONDUCT</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                   
                <TitleWrapper>
                   <h1>REVISED CODE OF CONDUCT FOR JUDICIAL OFFICERS OF THE FEDERAL REPUBLIC OF NIGERIA</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Paragraph>
                    The following is the <strong>Code of Conduct</strong> for Judicial Officers of the Federal Republic of Nigeria:
                    </Paragraph>
                   
                 <TitleWrapper>
                   <h1>Preamble</h1>
                    </TitleWrapper> 
                    <Hr />
                    <Paragraph>
                    The Nigerian Judiciary, as the Third Arm of Government under the Constitution of the Federal Republic of Nigeria recognizes, accepts and affirms that:
                    </Paragraph>
                    <Ul>
                        <ListItem> 
                        An independent, strong, respected and respectable judiciary is indispensable for the impartial administration of Justice in a democratic State.
                        </ListItem>
                        <ListItem>
                        It is the duty of every Judicial Officer to actively participate in establishing, maintaining, enforcing, and himself observing a high standard of conduct that will ensure and preserve transparently, the integrity and respect for the independence of the Judiciary.
                        </ListItem>
                        <ListItem>
                        The judicial duties of a Judicial Officer, which include all the duties of his office prescribed by law take precedence over all his other activities.
                        </ListItem>
                        <ListItem> 
                        It is advisable that the standard of conduct which a Judicial Officer is obliged to observe be prescribed and published for the information of and due compliance by the Judicial Officer himself and the public in general so that the objectives set out in this Code of Conduct may be achieved.
                        </ListItem>
                    </Ul>   
                    <Paragraph>
                    Therefore, this Code of Conduct for Judicial Officers of the Federal Republic of Nigeria is hereby adopted to serve as the minimum standard of conduct to be observed by each and every Judicial Officer as defined in this Code.
                    </Paragraph>

                    <TitleWrapper>
                   <h1>Explanatory notes</h1>
                    </TitleWrapper> 
                    <Hr />
                   <Ol>
                        <ListItem> 
                        In this Code, the term “Judicial Officer” shall mean a holder of the office of Chief Justice of Nigeria, a Justice of the Supreme Court, the President or Justice of the Court of Appeal, the Chief Judge or Judge of the Federal High Court, the President or Judge of National Industrial Court of Nigeria, the Chief Judge or Judge of High Court of a State and of the Federal Capital Territory, Abuja, the Grand Kadi or Kadi of a Sharia Court of Appeal of a State and the Federal Capital Territory, Abuja, the President or Judge of a Customary Court of Appeal of a State and of the Federal Capital Territory, Abuja and every holder of similar office in any office and tribunal where the duties involves adjudication of any dispute or disagreement between person and person (natural or legal) or person and Government at Federal, State and Local Government levels including the agents and privies of any such person.
                        </ListItem>
                        <ListItem>
                        Reference to the masculine gender shall include females.
                        </ListItem>
                    </Ol> 
                    <TitleWrapper>
                        <h1>Application of the Code</h1>
                    </TitleWrapper>   
                    <Ol>
                        <ListItem> 
                            The Code applies to all categories of Judicial Officers throughout the Federation as defined in this Code.
                        </ListItem>
                        <ListItem>
                             Violation of any of the Rules contained in this Code shall constitute judicial misconduct and or, misbehavior and shall attract disciplinary action.
                        </ListItem>
                    </Ol>

                    <TitleWrapper>
                        <h1>RULES</h1>
                    </TitleWrapper>   
                    <Ol>
                        <ListItem> 
                            In the performance of his duties, a Judicial Officer shall adhere and observe strictly the rules set in the Code. Non observance of these Rules shall constitute misconduct or misbehavior.
                        </ListItem>
                        <ListItem>
                             The Preamble to this code shall be construed as an integral part of the Code and its provisions shall be as enforceable as the provision of the specific rules in the Code.
                        </ListItem>
                    </Ol>

                    <TitleWrapper>
                        <h1>RULE 1</h1>
                    </TitleWrapper>   
                    <h3>Propriety and the appearance of propriety, both professional and personal</h3>
                    <RuleHolder>
                        <Section>1.1</Section>
                        <Desc>Propriety and the appearance of propriety, both professional and personal, are essential elements of a Judge’s life. As members of the public expect a high standard of conduct from a Judge, he or she must, when in doubt about attending an event or receiving a gift, however small, ask himself or herself the question- “How might this look in the eyes of the public?”</Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>1.2</Section>
                        <Desc>
                        A Judge shall avoid impropriety and the appearance of impropriety in all of the Judge’s activities both in his professional and private life.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>1.3</Section>
                        <Desc>
                        A Judicial Officer should respect and comply with the laws of the land and should conduct himself at all times in a manner that promotes public confidence in the integrity and impartiality of the Judiciary.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>1.4</Section>
                        <Desc>
                        The Judge must be sensitive to the need to avoid contacts that may lead people to speculate that there is a special relationship between him and someone whom the Judge may be tempted to favour in some way in the course of his judicial duties.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>1.5</Section>
                        <Desc>
                        A Judicial Officer must avoid social relationships that are improper or may give rise to an appearance of impropriety or that may cast doubt on the ability of a Judicial Officer to decide cases impartially.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>1.6</Section>
                        <Desc>
                        A Judge shall not hold membership in any organization that discriminates on the basis of race, sex, religion, ethnicity, national origin or other irrelevant cause contrary to fundamental human rights and/or the Fundamental Objectives and Directive Principles of State Policy under the Nigerian Constitution.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>1.7</Section>
                        <Desc>
                        A Judge shall not engage in gambling as a leisure activity.
                        </Desc>
                    </RuleHolder>

                    <TitleWrapper>
                        <h1>RULE 2</h1>
                    </TitleWrapper>   
                    <h3>Personal relations with individual members of the legal profession</h3>
                    <RuleHolder>
                        <Section>2.1</Section>
                        <Desc>
                        A Judge shall in his or her personal relations with individual members of the legal profession, who practice regularly in the Judge’s Court, avoid situations which might reasonably give rise to the suspicion of or appearance of favoritism or partiality.
                          </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.2</Section>
                        <Desc>
                        Although, social contact between members of the judiciary and members of the legal profession is a long standing tradition and is proper, a Judge should act on the basis of common sense and exercise caution in this aspect of his social contact with members of the profession. A Judge would therefore be wise to avoid recurrent contacts with a lawyer appearing before him in the course of a particular case if this could lead to a reasonable perception that the Judge and the lawyer have a close personal relationship.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.3</Section>
                        <Desc>
                        A Judge shall not allow the use of the Judge’s residence by a member of the legal profession to receive clients or other members of the legal profession. It is inappropriate for a Judge to permit a lawyer to use his or her residence to meet clients or use the Judge’s telephone in connection with that lawyer’s legal practice.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.4</Section>
                        <Desc>
                        Depending on the circumstances, some degree of socializing is acceptable, provided the Judge does not create either the need for frequent contacts or the reasonable appearance that his impartiality might be compromised.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.5</Section>
                        <Desc>
                        A Judge shall not accept gifts from a lawyer who might appear in a case before him if the gift is not one given to Judges generally at festive seasons such as Christmas or Salah gifts; provided always that the gift is not more than that ordinarily given or is not of pecuniary nature.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.6</Section>
                        <Desc>
                        A Judge shall not in or outside Nigeria accept accommodation provided by a lawyer either in his house or in a hotel paid for by the lawyer or allow to be hosted by a lawyer who is or is likely to appear in his Court.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.7</Section>
                        <Desc>
                        Whether a Judge may attend a party given by a law firm depends upon who is giving the party and who else might attend, as well as on the nature of the party. Special care should be taken where a particular law firm may be seen as marketing itself or its services to clients or potential clients. The Judge must ensure that his or her presence at the party of a law firm will not affect the Judge’s appearance of impartiality or give the impression that the law firm enjoys open or tacit approval of the Judge.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.8</Section>
                        <Desc>
                        A Judge shall avoid developing excessively close relationship with frequent litigants – such as government ministers or their officials, municipal officials, police prosecutors in any Court where the Judge often sits, if such relationship could reasonably create an appearance of partiality.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.9</Section>
                        <Desc>
                        A Judge shall not belong to a social union or group where lawyers who appear before him or her are also members.
                        </Desc>
                    </RuleHolder>

                    <RuleHolder>
                        <Section>2.10</Section>
                        <Desc>
                        A Judge shall not participate in the determination of a case in which any member of the Judge’s family represents a litigant or is associated in any manner with the case.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>2.9</Section>
                        <Desc>
                        Where a Judge is socially involved in a dating relationship with lawyer, the Judge should not ordinarily, sit on cases involving that lawyer or members of his family.
                        </Desc>
                    </RuleHolder>

                    <TitleWrapper>
                        <h1>RULE 3</h1>
                    </TitleWrapper>   
                    <h3>Fidelity to the Constitution and the Law</h3>
                    <RuleHolder>
                        <Section>3.1</Section>
                        <Desc>
                        A Judicial Officer should be true and faithful to the Constitution and the Law, uphold the course of justice by abiding with provisions of Constitution and the Law and should acquire and maintain professional competence.
                          </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>3.2</Section>
                        <Desc>
                        A Judicial Officer should be patient, dignified and courteous to accused persons and litigants, assessors, witnesses, legal practitioners and all others with whom he has to deal in his official capacity and should demand similar conduct of legal practitioners, his staff and others under his direction and control.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>3.3</Section>
                        <Desc>
                        A Judicial Officer should accord to every person who is legally interested in a proceeding, or his legal representative full right to be heard according to law, and except as authorized by law, neither initiate, encourage, nor consider ex parte or other communications concerning a pending or impending proceeding.
                         <br />
                         <br />
                         For the purpose of this sub-rule an “ex parte communication” is any communication involving less than all the parties who have a legal interest in the case, whether oral or written, about a pending or impending case, made to or initiated or entertained by the Judicial Officer presiding over the case.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>3.4</Section>
                        <Desc>
                        A Judicial Officer shall ensure strict compliance with the provisions of the Constitution which require that a copy of judgment of the Superior Court of Record be given to parties in the cause within seven days of the delivery therefore.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>3.5</Section>
                        <Desc>
                        A Judicial Officer must avoid the abuse of the power of issuing interim injunctions, ex parte.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>3.6</Section>
                        <Desc>
                        In judicial proceedings, a Judicial Officer should maintain order and decorum.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>3.7</Section>
                        <Desc>
                        A Judicial Officer should promptly dispose of the business of Court. To achieve this, the Judicial Officer is to devote adequate time to his duties, to be punctual in attending Court and expeditious in determining matters in Court. Unless ill or unable, for good reason, to come to Court, a Judicial Officer must appear regularly for work, avoid tardiness, and maintain official hours of the Court.
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 4</h1>
                    </TitleWrapper>   
                    <h3>Duty to abstain from comments about a pending or impending proceeding in any Court in this country</h3>
                    <RuleHolder>
                        <Section>4.1</Section>
                        <Desc>
                        A Judicial Officer should abstain from comments about a pending or impending proceeding in any Court in this country, and should require similar abstention on the part of the Court personnel under his direction and control, provided that this provision does not prohibit a Judicial Officer from making statements in the course of his official duties or from explaining for public or private information, the procedure of the Court so long as such statements are not prejudicial to his integrity of the Judiciary and the administration of justice.
                          </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>4.2</Section>
                        <Desc>
                        A Judicial Officer shall be bound by professional secrecy with regard to his deliberations and to confidential information acquired in the course of his duties. Accordingly, confidential information acquired in the Judge’s judicial capacity shall not be used or disclosed by the Judge for any other purpose not related to the Judge’s judicial duties.
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 5</h1>
                    </TitleWrapper>   
                    <h3>Right to freedom of expression</h3>
                    <RuleHolder>
                        <Section>5</Section>
                        <Desc>
                        A Judge, like any other citizen, is entitled to freedom of expression, belief, association and assembly; but in exercising such rights, a Judge shall always conduct himself in such manner as to preserve the dignity of the judicial office and the impartiality and independence of the judiciary. Accordingly, a Judge shall act with such restraint as is necessary to:
                        <ol style={{
                          listStyleType: 'lower-alpha',
                          marginTop: '10px'
                        }}>
                          <li>
                            maintain public confidence in the impartiality and independence of the judiciary;
                          </li>
                          <li> 
                            avoid involvement in public discussion or discourse if his or her involvement could reasonably undermine confidence in his or her impartiality;
                          </li>
                          <li>
                            avoid such occasions and circumstances where such involvement may unnecessarily expose the Judge to political attacks or be inconsistent with the dignity of a Judicial officer; and/or
                          </li>
                          <li>
                            adhere strictly to political silence
                          </li>
                        </ol>
                          </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 6</h1>
                    </TitleWrapper>   
                    <h3>Duty to abstain from involvement in public controversies</h3>
                    <RuleHolder>
                        <Section>6</Section>
                        <Desc>
                        The duties of Judges are not consistent with any involvement in public controversies:
                        <ol style={{
                          listStyleType: 'lower-alpha',
                          marginTop: '10px'
                        }}>
                          <li>
                          A Judge should not involve himself or herself inappropriately in public controversies.
                          </li>
                          <li> 
                          A Judge shall not enter the political arena or participate in public debates – either by expressing opinions on controversial subjects, entering into disputes with public figures in the community, or publicly criticizing the government.
                          </li>
                          <li>
                          The convention of political silence requires the Judge concerned not to ordinarily reply to public statement. Although, the right to criticize a Judge is subject to the rules relating to contempt, these are not to be invoked today to suppress or punish criticism of the judiciary or of a particular Judge. The better and wiser course is to ignore any scandalous attack or criticism outside the court room rather than to exacerbate the publicity by initiating proceedings.
                          </li>
                          <li>
                          Contempt ex facie curiae – is an attack on the integrity and authority of the court of law and the administration of justice. Though rule 6(c) requires the power to punish for contempt to be exercised with great caution, the power to punish for contempt committed ex facie curiae must be used to protect the Court from open attack aimed at discrediting the administration of justice.
                          </li>
                          <li>
                          A Judge may speak out on matters that affect the judiciary which directly affects the operation of the Courts, the independence of the judiciary, fundamental aspects of the administration of justice. On these matters, a Judge should act with great restraint. While a Judge may through his Head of Court properly make public representations to the government on these matters, he/she must not be seen as “lobbying” government or as indicating how he or she would rule if particular situations were to come before the Court.
                          </li>
                          <li>
                          A Judge may participate in discussion of the law for educational purposes or to point out weaknesses in the law. Judicial commentary should be limited to practical implications or drafting deficiencies and should be made as part of a collective or institutionalized effort by the Judiciary, not of an individual Judge.
                          </li>
                        </ol>
                          </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 7</h1>
                    </TitleWrapper>   
                    <h3>Duty to abstain from involvement in public controversies</h3>
                    <RuleHolder>
                        <Section>7.1</Section>
                        <Desc>
                        A Judge shall inform himself or herself about his or her personal and fiduciary financial interests and shall make reasonable efforts to be informed about the financial interests of members of the Judge’s family in respect of matters for adjudication before him.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>7.2</Section>
                        <Desc>
                        If it appears in respect of a matter before him or her, that the Judge, or a member of the Judge’s family or other person in respect of which the Judge is in a fiduciary relationship, is likely to benefit financially, the Judge has no alternative but to withdraw from the case.
                        </Desc>
                    </RuleHolder> 
                    <RuleHolder>
                        <Section>7.3</Section>
                        <Desc>
                        For the purpose of this rule, “Financial interest” includes ownership of a legal or equitable interest, however small, or a relationship as director, advisor, or other active participant in the affairs of an institution or organisation. The following are not to be regarded as financial interests:
                        <ol style={{
                            
                              marginTop: '10px'
                            }}>
                              <li>
                              The proprietary interest of a policy holder in a mutual insurance company, unless the outcome of any proceeding could substantially affect the value of the interest.
                              </li>
                              <li> 
                              Ownership of government securities unless if the outcome of any proceeding could substantially affect the value of the security.
                              </li>
                        </ol>
                        <br />
                        <p>For the purpose of the Rules contained in this Code –</p>
                        <ol style={{
                            listStyleType: 'lower-alpha',
                             marginTop: '10px'
                            }}>
                              <li>
                              “fiduciary” includes such relationships as executor, administrator, trustee and guardian;
                              </li>
                              <li> 
                              “financial interest” means ownership in a substantial manner of a legal or equitable interest, or a relationship as director, adviser or other active participation in the affairs of a party except that:
                                  <ol style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                      ownership in a mutual or common investment fund which holds securities, unless the Judicial Officer participates in the management of the fund;
                                      
                                    </li>
                                    <li>
                                      an officer in an educational, religious, charitable or civil organization is not a “financial interest” in securities held by the organization;

                                    </li>
                                    <li>
                                    the proprietary interest of a policy holder in a mutual savings’ society or similar proprietary interest, is a “financial interest” in the organization only if the outcome of the proceedings could substantially affect the value of the interest; and
                                    </li>
                                    <li>
                                    ownership of government securities is a “financial interest” in the issues only if the outcome of the proceedings could substantially affect the value of the securities.
                                    </li>
                                  </ol>
                              </li>
                        </ol>
                        </Desc>
                    </RuleHolder> 
                    <TitleWrapper>
                        <h1>RULE 8</h1>
                    </TitleWrapper>   
                    <h3>Duty in regard to the Judge’s family, social or political relationship</h3>
                    <RuleHolder>
                        <Section>8.1</Section>

                        <Desc>
                        A Judge shall not allow the Judge’s family, social or other political relationships improperly to influence the Judge’s judicial conduct and judgment as a Judge.
                        
                        </Desc>
                    </RuleHolder>
                    <p>Duty to avoid being improperly influenced</p>
                    <RuleHolder>
                        <Section>8.2</Section>
                        <Desc>
                        The Judge’s family, friends, and social, civic and professional colleagues with whom he or she associates regularly, communicates on matters of mutual interest or concern, and shares trust and confidence, are in a position to improperly influence, or to appear to influence, the Judge in the performance of his or her judicial functions. They may seek to do so on their own account or as peddlers of influence to litigants and counsel. A Judge will need to take special care to ensure that his or her judicial conduct or judgment is not even subconsciously influenced by these relationships.
                        </Desc>
                    </RuleHolder>
                    <p>Duty to avoid pressuring self-interest</p>
                    <RuleHolder>
                        <Section>8.3</Section>
                        <Desc>
                        A Judge who takes advantage of the judicial office for personal gain or for gain by his or her relative or relation abuses power. A Judge must avoid all activity that suggests that his or her decisions are affected by self-interest or favoritism, since such abuse of power profoundly violates the public’s trust in the judiciary.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>8.4</Section>
                        <Desc>
                        A Judge shall not use or lend the prestige of the judicial office to advance the private interest of the Judge, a member of the Judge’s family or of anyone else, nor shall a Judge convey or permit others to convey the impression that anyone is in a special position improperly to influence the Judge in the performance of judicial duties.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>8.5</Section>
                        <Desc>
                        A Judge should distinguish between propriety and improper use of the prestige of the judicial office. It is improper for a Judge to:
                        <ol style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    Use or attempt to use his or her position to gain personal advantage or preferential treatment of any kind;
                                      
                                    </li>
                                    <li>
                                    Use judicial stationery to gain an advantage in conducting his or her personal business;

                                    </li>
                                    <li>
                                    Use the fact of holding judicial office in an attempt, or what might reasonably be seen to be an attempt, to extricate himself or herself from legal or bureaucratic difficulties; and
                                    </li>
                                    <li>
                                    Use or attempt to use his or her position to reach or contact any colleague or any other adjudicator in the judicial system with a view to influencing the outcome of any case in any Court on any ground.
                                    </li>
                                  </ol>
                        </Desc>
                    </RuleHolder>

                    <RuleHolder>
                        <Section>8.6</Section>
                        <Desc>
                        Judicial stationery should not be used in a way that amounts to abuse of the prestige of judicial office. Judicial stationery is intended for use when a Judge wishes to write in an official capacity. Care should be taken in the use of judicial stationery when writing in a private capacity. It would not be objectionable to send a thank you note after a social occasion using stationery. But it is inappropriate to use judicial stationery if there may be a reasonable perception that the Judge is seeking to draw attention to his position as a Judge in order to influence the recipient of the letter.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>8.7</Section>
                        <Desc>
                        There is no objection to a Judge providing a letter of reference.
                        <ol style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    A Judge shall not write a letter of reference for a person he does not know.
                                      
                                    </li>
                                    <li>
                                    A Judge may write a letter of reference if it is of a kind that would be written in the ordinary course of business (e.g. a Court employee seeking a reference with regard to work history). The letter should include a statement of the source and extent of the Judge’s personal knowledge and should ordinarily be addressed and mailed directly to the person or organisation for whose information it is being written.
                                    </li>
                                    <li>
                                    A Judge may write a letter of reference for someone whom the Judge knows personally but not professionally, such as a relative or close friend, if it is of a kind that he would normally be requested to write as a result of a personal relationship.
                                    </li>
                                  </ol>
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 9</h1>
                    </TitleWrapper>   
                    <h3>Responsibility of the Judge in regard to non-judicial activities</h3>
                    <RuleHolder>
                        <Section>9.1</Section>
                        <Desc>
                           A Judge may engage in other activities if such activities do not detract from the dignity of the judicial office or otherwise interfere with the performance of judicial duties.          
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>9.2</Section>
                        <Desc>
                        A Judge may represent the Judge’s country, state or locality on ceremonial occasions or in connection with national, regional, historical, educational or cultural activities.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>9.3</Section>
                        <Desc>
                        A Judge may participate in community, non-profit making organizations of various types by becoming a member of an organization and its governing body such as charitable organizations, University and School Councils, lay religious bodies, sporting organizations, and organizations promoting cultural or artistic interest. However, in relation to such participation, the following matters should be borne in mind. It is not appropriate for a Judicial Officer to participate:
                        <ol style={{
                                    listStyleType: 'lower-alpha',
                                    }}>
                                    <li>
                                    In an organization if its objects are political or if its activities are likely to expose the Judge to public controversy, or if the organization is likely to be regularly or frequently involved in litigation;
                                      
                                    </li>
                                    <li>
                                    In an organization likely to make excessive demands on his or her time;
                                    </li>
                                    <li>
                                    In a group to serve or appear to serve as legal adviser;
                                    </li>
                                    <li>
                                    In an organization involved in or lending his name to any fund raising activities; and
                                    </li>
                                    <li>
                                    In an organization requiring its members to solicit if the solicitation might reasonably be perceived as coercive or is essentially a fund-raising mechanism.
                                    </li>
                                    <li>
                                    In a group to serve or appear to serve as legal adviser;
                                    </li>
                                  </ol>
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>9.4</Section>
                        <Desc>
                        A Judge shall not practice law whilst a holder of judicial office.
                        <ol style={{
                                    listStyleType: 'lower-alpha',
                                    }}>
                                    <li>
                                    For the purpose of this rule, the practice of law includes work performed outside of a Court and that has no immediate relation to Court proceedings. It includes conveyance, giving legal advice on a wide range of subjects, preparing and executing legal instruments covering an extensive field of business and trust relations, and other affairs.
                                    </li>
                                    <li>
                                    A Judge shall not outside official duties, act as an arbitrator or mediator or otherwise perform judicial functions in a private capacity.
                                    </li>
                                    <li>
                                    A Judge should be circumspect about becoming involved in personal litigation. Personal litigation must be a last resort.
                                    </li>
                                </ol>
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 10</h1>
                    </TitleWrapper>   
                    <h3>Prohibition of acceptance of gift, bequest, loan, favour, benefit, advantage, bribe etc</h3>
                    <RuleHolder>
                        <Section>10.1</Section>
                        <Desc>
                          <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                      A Judge and members of the Judge’s family shall neither ask for, nor accept, any gift, bequest, loan or favour in relation to anything done or to be done or omitted to be done by the Judge in connection with performance of judicial duties.

                                    </li>
                                    <li>
                                    A Judge shall not knowingly permit Court staff or others subject to the Judge’s influence, direction or authority, to ask for, or accept, any gift, bequest, loan or favour in relation to anything done, to be done or omitted to be done in connection with his or her duties or functions.
                                    </li>
                                    <li>
                                    A Judge shall not give or take and shall not encourage or condone the giving or taking of any benefit, advantage, bribe however disguised for anything done or to be done in the discharge of a judicial duty.
                                    </li>
                          </ul>       
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>10.2</Section>
                        <Desc>
                        A Judge must inform those family members and court staff of the relevant ethical constraints upon the Judge in this regard and discourage the family members and staff from violating them. This prohibition does not include:
                        <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    Ordinary social hospitality that is common in the Judge’s community, extended for a non-business and limited to the provision of modest items such as food and refreshments.

                                    </li>
                                    <li>
                                    Items with little intrinsic value intended solely for presentation, such as plagues, certificates, trophies and greeting cards.
                                    </li>
                                    <li>
                                    Loans from banks and other financial institutions given on normal terms based on the usual factors, without regard to judicial status.
                                    </li>
                                    <li>Opportunities and benefits, including favourable rates and commercial discounts, that are available based on factors other than judicial status.

                                    </li>
                                    <li>Rewards and prizes given to competitors in random drawings, contests or other events that are open to the public and awarded based on factors other than judicial status.

                                    </li>
                                    <li>
                                    Rewards and prizes given to competitors in random drawings, contests or other events that are open to the public and awarded based on factors other than judicial status.
                                    Scholarships and fellowships awarded on the same terms and based on the same criteria applied to any applicant who is not a Judge.
                                    Reimbursement or waiver or charges for travel-related expenses, including the cost of transportation, lodging and meals for the Judge and a relative, incident to the Judge’s attendance at a function or activity devoted to the improvement of the law, the legal system or the administration of justice.
                                    </li>
                          </ul> 
                        </Desc>
                    </RuleHolder>

                    <TitleWrapper>
                        <h1>RULE 11</h1>
                    </TitleWrapper>   
                    <h3>Responsibility in regard to discharge of administrative duties.</h3>
                    <RuleHolder>
                        <Section>11.1</Section>
                        <Desc>
                          <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    A Judicial Officer should diligently discharge his administrative duties, maintain professional competence in judicial administration and facilitate the performance of the administrative duties of other Judicial Officers and court officials.
                                    </li>
                                    <li>
                                    A Judicial Officer should require his staff and other court officials under his direction and control to observe the standards of integrity and diligence that apply to him.
                                    </li>
                                    <li>
                                    A Judicial Officer on becoming aware on reliable evidence of unethical or unprofessional conduct by another judicial officer or a legal practitioner should immediately take adequate steps to report the same to the appropriate body seized with disciplinary powers on the matter complained of.
                                    </li>
                                    <li> 
                                      In the exercise of his administrative duties, a Judicial Officer should avoid nepotism and favoritism.

                                    </li>
                                    <li>
                                    A Judicial Officer must refrain from engaging in sexual harassment.
                                    </li>
                                    <li>
                                    A Judicial Officer shall not be a member of a Tenders Board or engage in the award of contracts.
                                    </li>
                          </ul>       
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 12</h1>
                    </TitleWrapper>   
                    <h3>Disqualification</h3>
                    <RuleHolder>
                        <Section>12.1</Section>
                        <Desc>
                        A Judicial Officer should disqualify himself in a proceeding in which his impartiality may genuinely and reasonably be questioned, including but not limited to the instances where:
                        <ul style={{
                                    listStyleType: 'lower-alpha',
                                    }}>
                                    <li>
                                    he has a personal bias or prejudice concerning a party or personal knowledge of facts in dispute;

                                    </li>
                                    <li>
                                    he served as a legal practitioner in the matter in controversy, or a legal practitioner with whom he previously practiced law, served during such association as a legal practitioner concerning the matter or the Judicial Officer or such legal practitioner has been a material witness in the matter;
                                    </li>
                                    <li>
                                    he knows that he individually or as a Judicial Officer or his spouse or child; has a financial or any other interest that could be substantially affected by the outcome of the proceeding.
                                    </li>
                                    <li>
                                    he or his spouse, or a person related to either of them or the spouse of such person
                                    </li>   
                                    <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    s a party to the proceedings, or an officer, director or trustee of a party;

                                    </li>
                                    <li>
                                    is acting as a legal practitioner in the proceedings;
                                    </li>
                                    <li>
                                    is known by the Judicial Officer to have an interest which could be substantially affected by the outcome of the proceedings;
                                    </li>
                                    <li>
                                    is to the Judicial Officer’s knowledge likely to be a material witness in the proceedings.
                                    </li>                                 
                               </ul>                               
                          </ul> 
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>12.2</Section>
                        <Desc>
                        Waiver of Disqualification <br />
                        A Judicial Officer disqualified by the terms of Rule 12(1)(c) or Rule 12(1)(d) may, instead of withdrawing from the proceedings, disclose on the record the basis of his disqualification. If based on such disclosure, the parties, their representatives and/or their legal practitioners, independently of the Judicial Officer’s participation, all agree that the Judicial Officer’s relationship is immaterial or that his financial interest is insubstantial, the Judicial Officer shall continue to participate in the proceeding.
                        </Desc>
                    </RuleHolder>

                    <TitleWrapper>
                        <h1>RULE 13</h1>
                    </TitleWrapper>   
                    <h3>Duty of a Judicial Officer to regulate his Extra-Judicial Activities</h3>
                    <RuleHolder>
                        <Section>13.1</Section>
                        <Desc>
                        A Judicial Officer should regulate his Extra-Judicial Activities to minimize the risk of conflict with his judicial duties. A Judicial Officer, however,
                        <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    may engage in the arts, sports and other social and recreational activities, if such vocational activities do not adversely affect the dignity of his office or interfere with the performance of his judicial duties;
                                    </li>
                                    <li>
                                    may participate in civic and charitable activities that do not reflect adversely upon his impartiality or interfere with the performance of his judicial duties.
                                    </li>
                                    <li>
                                    Judicial Officers shall be free to form and join associations of Judges or other organizations to represent their interests, to promote their professional training and to protect their judicial independence but shall not join any trade union.
                                    </li>
                                                                 
                               </ul>      
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>13.2</Section>
                        <Desc>
                        A Judicial Officer shall not take or accept any Chieftaincy title while in office.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>13.3</Section>
                        <Desc>
                        A Judicial Officer should not serve as the executor, administrator, trustee, guardian or other fiduciary, except for estate, trust, or person of a member of his family, and that only if such service will not interfere with the proper performance of his judicial duties. While acting as a fiduciary, a Judicial Officer, is subject to the same restriction in financial activities which apply to him in his personal capacity.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>13.4</Section>
                        <Desc>
                        Business and Financial Activities
                        <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    A Judicial Officer may own investments and real property PROVIDED that in the management of his investments, he shall not serve as an officer, director, manager, general partner, adviser or employee of any business entity.
                                    </li>
                                    <li>
                                    Otherwise permissible investment or business activities are prohibited if they:
                                    </li>      
                                  <ul style={{
                                    listStyleType: 'lower-alpha',
                                    }}>
                                    <li>
                                    Tend to reflect adversely on judicial impartiality
                                    </li>
                                    <li>
                                    Interfere with the proper performance of judicial duties,
                                    </li>    
                                    <li>
                                    Exploit the judicial position; or
                                    </li>   
                                    <li>
                                    Involve the Judicial Officer in frequent transactions with legal practitioners or with people likely to come before the Judicial Officer’s court.
                                    </li>                                                              
                               </ul>                                                             
                            </ul>    
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>13.5</Section>
                        <Desc>
                     Acceptance of Gifts <br />
                     <ol>
                       <li>
                         A Judicial Officer and members of his family shall neither ask for nor accept any gift, bequest, favour or loan on account of anything done or omitted to be done by him in the discharge of his duties.

                       </li>
                       <li> A Judicial Officer is, however, permitted to accept:</li>
                       <ul style={{
                                    listStyleType: 'lower-roman',
                                    }}>
                                    <li>
                                    Personal gifts or benefits from relatives or personal friends to such extent and on such occasions as are recognized by custom.
                                    </li>
                                    <li>
                                    Books supplied by publishers on a complimentary basis
                                    </li>    
                                    <li>
                                    Exploit the judicial position; or
                                    </li>   
                                    <li>
                                    A loan from lending institution in its regular course of business on the same terms generally available to people who are not Judicial Officers;
                                    </li> 
                                    <li>A scholarship or fellowship awarded on the same terms applied to other applicants.
                                      </li>                                                             
                               </ul>  
                     </ol>
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 14</h1>
                    </TitleWrapper>   
                    <h3>Duty of a Judicial Officer in regard to travels within and outside Nigeria</h3>
                    <RuleHolder>
                        <Section>14.1</Section>
                        <Desc>
                        A Judicial Officer should regulate his travels within and outside Nigeria so as not to affect his judicial duties or cause delay in the administration of justice or detrimentally affect his performance or the overall performance of the judiciary. Travels outside Nigeria should be with the permission of the Chief Justice of Nigeria, after such application has been made.          
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.2</Section>
                        <Desc>
                        Except during vacation a Judicial Officer should ensure that unless strictly essential, travels out of duty station on working days should not be undertaken except for special reasons.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.3</Section>
                        <Desc>
                        Where it is strictly essential for a Judicial Officer to travel out of his duty station during working days on short notice such Officer shall as soon as possible before or immediately after he embarks on such journey inform and obtain clearance from his Head of Court.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.4</Section>
                        <Desc>
                        Where a Judicial Officer sits in a Court constituted by a Panel he should make such arrangements that would ensure that the business of the Court as scheduled is not disrupted.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.5</Section>
                        <Desc>
                        Where a Judicial Officer intends to spend any part of his vacation out of his duty station he should leave his contact address or addresses with the Chief Registrar.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.6</Section>
                        <Desc>
                        A Judicial Officer shall not need to obtain permission of his Head of Court to travel out of Nigeria on vacation but shall leave his contact address or addresses with his Head of Court and Chief Registrar.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.7</Section>
                        <Desc>
                        Where a Judicial Officer intends to attend a conference outside Nigeria he shall apply for permission to do so through his Head of Court to the Chief Justice of Nigeria. Provided that where the Judicial Officer has been nominated or selected by his Head of Court to attend such conference he shall not be required to make any further application for permission to the Chief Justice, but his Head of Court shall seek such permission from the Chief Justice/Chairman of the Council of such nomination or selection.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.8</Section>
                        <Desc>
                        Where a Head of Court intends to organize a work study tour, performance improvement tour, or such similar tours outside the country, the Head of Court shall notify the Chief Justice/Chairman of Council informing him of the nature of the tour, the number of judges that shall be on the tour and the programme envisaged on the tour.
                        <ul style={{
                                    listStyleType: 'lower-alpha',
                                    }}>
                                    <li>
                                    Where the Chief Justice has any reservations about the tour, he shall invite the Head of Court for discussion of his reservation or of the number of Judges planned to embark on the tour or the utility of the tour.
                                    </li>
                                    <li>
                                    Where the Chief Justice and Head of Court cannot agree the tour shall be suspended for such duration as an agreement can be reached.
                                    </li>    
                                    <li>
                                    The Chief Justice shall state from time to time the likely grounds of his reservation and thereafter submit to Council such likely grounds for Council approval.
                                    </li>                                                     
                               </ul>  
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>14.9</Section>
                        <Desc>
                        Unless otherwise stated in this Rule <br />
                       “Conference” includes workshop and seminar. <br />
                       “Working days” means Monday to Friday and excludes Public holidays.
                        </Desc>
                    </RuleHolder>
                    <TitleWrapper>
                        <h1>RULE 15</h1>
                    </TitleWrapper>   
                    <h3>Publication by a Judicial Officer while in Service</h3>
                    <RuleHolder>
                        <Section>15.1</Section>
                        <Desc>
                        A Judicial Officer while in service shall not publish any book or cause another person, group of persons, publishing house, whosoever, acting on his behalf to publish any book until he ceases to be a Judicial Officer where such publication may infringe in any manner the Code of Conduct for Judicial Officers.
                          </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>15.2</Section>
                        <Desc>
                        Where a Judicial Officer while in service publishes any book or causes another person, group of persons, publishing house, whosoever, acting on his behalf to publish any book, he shall ensure that such publication is not used or prohibit such publication from being used, in any manner or form as a means of raising funds, beyond the normal cover or market price of such publication; or, as donation or gift to him or to anyone on his behalf; or, to any cause related to or connected with him.
                        </Desc>
                    </RuleHolder>
                    <RuleHolder>
                        <Section>15.3</Section>
                        <Desc>
                        For the purpose of this Rule, “Book” may include, but not limited to, Biographies, Essays, Collection of Judgments, Textbooks, Journals, Articles and any publication which may attract financial benefits or otherwise to the Judicial Officer or author, if such author is different from the Judicial Officer.
                        </Desc>
                    </RuleHolder>
                    <h2 style={{textAlign: 'justify', fontSize: '24px'}}>
                      THESE RULES SHALL BE CITED AS THE CODE OF CONDUCT FOR JUDICIAL OFFICERS OF THE FEDERAL REPUBLIC OF NIGERIA AND SHALL COME INTO FORCE ON THE 24TH DAY OF FEBRUARY, 2016.
                    </h2>
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

export default CodeOfCOnduct