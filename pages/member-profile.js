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
    margin: 0 5px;
    text-transform: uppercase;
    text-align: center;
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

const ImageHolder = styled.div`
display: flex;
align-items: center;
flex-direction:column;
margin-bottom: 30px;
`
const ProfileImage = styled.img`
    width: 392px;
    height: 480px;
    border-radius: 5px;
    object-fit: cover;
    margin: 0 auto;
`
const Position  = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
`
const MemberProfile = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>Hon. Justice Monica Bolnaan Dongban-mensem</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
               <Position>
                    <span> President, Court of Appeal </span>
               </Position>
                    <ImageHolder>
                       <ProfileImage src='./img/monica.png' /> 
                    </ImageHolder>

                    <Paragraph> 
                           Hon Justice Monica Bolna’an Dongban-Mensem was born on 13th June, 1957, to the family of M.B. Douglas-Mensem; a retired Appeal Court Justice.

                        He hails from Shendam Local Government Area of Plateau State. He got both her LL.B and LL.M degrees from the Ahmadu Bello University, Zaria.

                        He was a Visiting Lecturer on Press Law at the Catholic Media Centre, Kaduna from 1988-1992 and Part-time Lecturer at the University of Jos between 1989 and 1997.

                        From 1990-1993, Justice Dongban-Mensem served as Deputy Chief Registrar, Superior Courts and Protocol Affairs, and was appointed Judge, High Court of Justice, Plateau Judiciary from 1993-1996.

                        Hon Justice Dongban-Mensem transferred his service to the Federal Capital Territory (FCT) Judiciary in 1997, where he served until he was elevated to the Court of Appeal in 2003.

                        He was sworn-in as the President, Court of Appeal, on 19th June, 2020, by the Chief Justice of Nigeria.

                        Until this recent elevation, Hon. Justice Monica Dongban-Mensem was the Presiding Justice of the Court of Appeal, Enugu Division, and Life Member of Body of Benchers.

                        His leisure is writing, reading, golfing working with children, women and the elderly. The judge is a mother of four children and two grandchildren.
                   </Paragraph>
                   <Paragraph> 
                           Hon Justice Monica Bolna’an Dongban-Mensem was born on 13th June, 1957, to the family of M.B. Douglas-Mensem; a retired Appeal Court Justice.

                        He hails from Shendam Local Government Area of Plateau State. He got both her LL.B and LL.M degrees from the Ahmadu Bello University, Zaria.

                        He was a Visiting Lecturer on Press Law at the Catholic Media Centre, Kaduna from 1988-1992 and Part-time Lecturer at the University of Jos between 1989 and 1997.

                        From 1990-1993, Justice Dongban-Mensem served as Deputy Chief Registrar, Superior Courts and Protocol Affairs, and was appointed Judge, High Court of Justice, Plateau Judiciary from 1993-1996.

                        Hon Justice Dongban-Mensem transferred his service to the Federal Capital Territory (FCT) Judiciary in 1997, where he served until he was elevated to the Court of Appeal in 2003.

                        He was sworn-in as the President, Court of Appeal, on 19th June, 2020, by the Chief Justice of Nigeria.

                        Until this recent elevation, Hon. Justice Monica Dongban-Mensem was the Presiding Justice of the Court of Appeal, Enugu Division, and Life Member of Body of Benchers.

                        His leisure is writing, reading, golfing working with children, women and the elderly. The judge is a mother of four children and two grandchildren.
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

export default MemberProfile
