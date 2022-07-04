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

export default function HomePage({ data }: Props) {
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
  padding: 0 1.5rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 36rem) {
    padding: 0;
  }
`
const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;

  @media screen and (min-width: 36rem) {
    font-size: 3.5rem;
  }
`
