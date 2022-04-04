import React from 'react'
import CurrentMemberGallery from '../components/CurrentMemberGallery'
import styled from 'styled-components'

const Container = styled.div`

`
const ProfileHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
margin: 20px auto;
margin-bottom: 20px;

h1{
    color: #041730;
    font-size: 24px;
    font-weight: 700;
    margin: 0 10px;
}
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
const CoucncilMember = () => {
  return (
    <Container>
            <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>CURRENT COUNCIL MEMBERS</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
      <CurrentMemberGallery />
    </Container>
  )
}

export default CoucncilMember