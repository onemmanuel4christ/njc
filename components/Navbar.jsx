import React from 'react'
import NewsSplash from './NewsSplash'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`

`
const Navbar = () => {
  return (
    <Container>
        <NewsSplash />
        <Header />
    </Container>
  )
}

export default Navbar