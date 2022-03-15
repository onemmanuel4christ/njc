import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100px;
    background: linear-gradient(90deg, #05A850 0%, #041730 30%);
    padding: 0 89px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    @media only screen and (max-width: 800px) {
    display: none;
}
`

const NewsHeader = styled.h3`
    display: flex;
    align-items: center;
    color: #FFF;
    font-weight: 400;
    Image{
        width: 18px;
        height: 11px;
        margin-left: 10px;
    }
`
const NewsDetail = styled.div`
display: flex;
    font-size: 14px;
    color: #FFF;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    width: 589px;
    
`
const Splash = styled.marquee`
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 12px;
`
const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

`
const SocialIconImage = styled.img`
    cursor: pointer;
`
const NewsSplash = () => {
  return (
<Container>
<NewsHeader>
                News and updates
                    <Image src='/img/Path.svg' width={18} height={11} alt="" />   
                <NewsDetail>
                    <div style={{
                        width: '20%'
                    }}>Press Release:</div>
                    <Splash>
                    Njc Empanels Three Investigation Committees To Investigate 3 Judges Who ...
                    </Splash>
                </NewsDetail>
            </NewsHeader>
            <SocialIconWrapper>
                <SocialIconImage src='./img/twitter.svg' alt='' />
                <SocialIconImage src='./img/linkedin.svg' alt='' />
                <SocialIconImage src='./img/facebook.svg' alt='' />
                <SocialIconImage src='./img/instagram.svg' alt='' />
            </SocialIconWrapper>
</Container>
  )
}

export default NewsSplash