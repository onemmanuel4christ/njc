import React from 'react'
import styled from 'styled-components'
import { AiOutlineClockCircle, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { MdOutlineFacebook } from "react-icons/md"
import Link from 'next/link'
const Wrapper = styled.div`
border-bottom:  2px solid rgba(119, 119, 119, 0.25);
padding-bottom: 30px;
margin-bottom: 20px;
    h2{
        color: #05A850;
        font-weight: 700;
        font-size: 16px;
    }
`
const TimeStamp = styled.div`
display: flex;
align-items: center;
gap: 30px;
color: #777777;
opacity: 75%;

`
const Time = styled.span`

`
const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 20px;
    border-bottom:  2px solid rgba(119, 119, 119, 0.25);

`
const SocialIconImage = styled.img`
    cursor: pointer;
`
const Paragraph = styled.p`
    word-wrap: break-word;
    font-size: 16px;
    color: #041730;
    text-align: justify;
    font-weight: 400;
    /* padding: 20px; */

`
const News = () => {
  return (
    <div>
        <Wrapper>
                        <h2>PRESS RELEASE</h2>
                        
                        <Paragraph>
                        <Link href='/news-detail' >
                            <a style={{textDeoration: 'none', color: 'inherit'}}>
                                NJC recommends appointment of sixty-four (64) Judiciary officers.
                            </a>
                         </Link>
                        </Paragraph>
                        <TimeStamp>
                            <AiOutlineClockCircle />
                            <Time>17th December, 2021.</Time>
                        </TimeStamp>
                    </Wrapper>
                    <Wrapper>
                        <h2>PRESS RELEASE</h2>
                        <Paragraph>
                        <Link href='/news-detail' >
                            <a style={{textDeoration: 'none', color: 'inherit'}}>
                                NJC recommends appointment of sixty-four (64) Judiciary officers.
                            </a>
                         </Link>
                        </Paragraph>
                        <TimeStamp>
                            <AiOutlineClockCircle />
                            <Time>17th December, 2021.</Time>
                        </TimeStamp>
                    </Wrapper>
                    <Wrapper>
                        <h2>PRESS RELEASE</h2>
                        <Paragraph>
                            <Link href='/news-detail' >
                                <a style={{textDeoration: 'none', color: 'inherit'}}>
                                    NJC recommends appointment of sixty-four (64) Judiciary officers.
                                </a>
                            </Link>
                        </Paragraph>
                        <TimeStamp>
                            <AiOutlineClockCircle />
                            <Time>17th December, 2021.</Time>
                        </TimeStamp>
                    </Wrapper>
            <SocialIconWrapper>
              <AiFillTwitterCircle width='100px' height='100px' />
              <AiFillLinkedin />
              <MdOutlineFacebook />
              <AiFillInstagram />
            </SocialIconWrapper> 
    </div>
  )
}

export default News