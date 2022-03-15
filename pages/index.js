import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import CouncilMembers from '../components/CouncilMembers'
import ManagementStaff from '../components/ManagementStaff'
import RulesAndRegulation from '../components/RulesAndRegulation'
import Visitors from '../components/Visitors'
import WelcomeAddress from '../components/WelcomeAddress'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
box-sizing: border-box;
/* background-color: red; */
`
export default function Home() {
  return (
    <Container>
      <Head>
        <title>NJC | Home </title>
        <meta name="description" content="dynamic judiciary in nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
       <Banner />
       <WelcomeAddress />
       <CouncilMembers />
       <RulesAndRegulation />
       <ManagementStaff />
       {/* <Visitors /> */}
    </Container>
  )
}
