import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Card = styled.div`
  margin: 20px;
  width: 351px;
  height: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px;
`
const CardImage = styled.img`
height: calc(100% - 133px);
width: 100%;
object-fit: cover;
position: absolute;
top: 0;
left: 0;
`
const CardDetails = styled.div`
  position: absolute;
  top: calc(100% - 133px);
  width: 100%;
  height: 133px;
  background-color: white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  h1{
    text-align: center;
    color: #05A850;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  h5{
    color: #05A850;
  }
  span{
    color: #05A850;
  }
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
const ManagementStaff = () => {
  return (
    <>
      <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>CURRENT COUNCIL MEMBERS</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
    <Container>
        <Card>
      <CardImage src='./img/hadiza.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HADIZA .S. SA’EED, ESQ </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>Director. (performace evaluation & legal department.)</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/aminu.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
    <Card>
      <CardImage src='./img/balogun.png' alt='' />
      <CardDetails>
              <Link href="/management-staff-profile">
                <a className='link'>
                <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                    <h5>DONGBAN-MENSEM</h5>
                <span>President, Court of Appeal</span>  
                </a>
              </Link>
          </CardDetails>
    </Card>
</Container>
    </>
  )
}

export default ManagementStaff