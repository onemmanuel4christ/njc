import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'

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
  
  h1{
    text-align: center;
    color: #05A850;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
  }
  h5{
    color: #05A850;
  }
  span{
    color: #05A850;
  }
`

const CurrentMemberGallery = () => {
  return (
    <Container>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
        <Card>
          <CardImage src='./img/balogun.png' alt='' />
            <CardDetails>
            <h1>HON. JUSTICE MONICA BOLNAAN </h1>
                <h5>DONGBAN-MENSEM</h5>
            <span>President, Court of Appeal</span>  
            </CardDetails>
        </Card>
    </Container>
  )
}

export default CurrentMemberGallery