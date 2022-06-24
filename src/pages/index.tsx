import { graphql, PageProps } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

type Props = PageProps<{
  contentfulIntro: {
    heading: string
  }
}>

export const query = graphql`
  {
    contentfulIntro {
      heading
    }
  }
`

const HomePage = ({ data }: Props) => {
  const { heading } = data.contentfulIntro

  return (
    <Layout>
      <Wrapper>
        <Heading>{heading}</Heading>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.header`
  padding: 120px 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Heading = styled.h2`
  font-size: 48px;
  font-weight: 400;
`

export default HomePage
