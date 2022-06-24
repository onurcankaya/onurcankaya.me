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
  padding: 120px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 96px;
  margin-bottom: 32px;
`
const Subtitle = styled.h3`
  font-size: 48px;
  margin-bottom: 48px;
`

export default NotFoundPage
