import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <Link to='/'>Go home</Link>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.header`
  padding: 7.5rem 2.2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 576px) {
    padding: 7.5rem 5rem;
  }
`
const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 2rem;
`
const Subtitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 3rem;
`

export default NotFoundPage
