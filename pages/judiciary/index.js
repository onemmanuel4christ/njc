import React from 'react'
import styled from 'styled-components'
import News from '../../components/News'

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
const ImageHolder = styled.div`
display: flex;
align-items: center;
flex-direction:column;
`
const ProfileImage = styled.img`
    width: 392px;
    height: 555px;
    border-radius: 50%;
    object-fit: cover;
    border: 10px solid #05A850;
    margin: 0 auto;
`
const Names  = styled.h1`
    width: 677px;
    margin-top: 20px;
    word-wrap: break-word;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 20px;
`
const JudiciaryCouncil = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>CHAIRMAN OF THE COUNCIL</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
                  
                    <ImageHolder>
                        <ProfileImage src='./img/tanko.png' />
                        <Names>
                        HON. dr. JUSTICE .i. tanko muhammad, cfr, jsc gcon, chief justice of nigeria & the chairman, national judicial council
                        </Names>
                    </ImageHolder>
                    <Hr />
                    <Paragraph>
                    Hon. Dr. Justice I. T. Muhammad, CFR, JSC was born on the 31st of December 1953. He hails from Doguwa, Giade Local Government Area of Bauchi State. He attended primary school at Giade Primary School from 1961 to 1968. He proceeded to Government Secondary School, Azare from 1969 to 1973. His Lordship then proceeded to Abdullahi Bayero University College, Kano for his IJMB from 1975 to 1976. After a successful completion of his course, His Lordship got admission to read Law at Ahmadu Bello University, Zaria from 1976 to 1980. He attended Nigerian Law School from 1980 to 1981. In furtherance of his educational career, His Lordship went back to the prestigious ABU, Zaria for his Masters Degree in Law (LLM) on Part Time basis, from 1982 to 1984. In order to update himself in the field of Law, His Lordship went back to ABU, Zaria in 1987 to 1998 and obtained his Doctorate Degree (PHD) in Law, also on Part Time basis.

                    Hon. Dr. Justice I. T. Muhammad, CFR,JSC was appointed as Magistrate Grade II in 1982 to 1984 with Bauchi State Judiciary. He rose to Senior Magistrate Grade II from 1984 to 1986. His Lordship was appointed as the Provost, College of Legal and Islamic Studies, Bauchi from 1986 to 1989. He was appointed Chief Magistrate/Deputy Chief Registrar, High Court of the Federal Capital Territory, Abuja from 1990 to 1991. From 1991 to 1993, he served as a Kadi (Judge) of the Sharia Court of Appeal, Bauchi State. His Lordship was elevated to the position of Justice of the Court of Appeal from 1993 to 2006. His Lordship was appointed as Justice of the Supreme Court of Nigeria in the year 2006 and was sworn-in on the 8th of January 2007.  He became the substantive Chief Justice of Nigeria and Chairman National Judicial Council on Wednesday, 24th July, 2019.
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

export default JudiciaryCouncil
