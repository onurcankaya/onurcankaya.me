import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import { IExperience } from '../types/experience'

type Props = PageProps<{
  contentfulAbout: {
    image: IGatsbyImageData & {
      title: string
    }
    text: RenderRichTextData<ContentfulRichTextGatsbyReference>
    experience: IExperience[]
  }
}>

export const query = graphql`
  {
    contentfulAbout {
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        title
      }
      text {
        raw
      }
      experience {
        company
        role
        date
        location
        description {
          raw
        }
      }
    }
  }
`

export default function about({ data }: Props) {
  const { image, text, experience } = data.contentfulAbout

  return (
    <Layout>
      <Wrapper>
        <ImageWrapper image={getImage(image) || image} alt={image.title} />
        <About>{renderRichText(text)}</About>
        <ExperienceWrapper>
          <Title>Experience</Title>
          {experience.reverse().map((item: IExperience, index: React.Key) => (
            <Experience key={index}>
              <Header>{item.role}</Header>
              <Text>
                {item.company} — {item.location}
              </Text>
              <Text>{item.date}</Text>
              <Description>{renderRichText(item.description)}</Description>
            </Experience>
          ))}
        </ExperienceWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7.5rem 2.5rem;
  @media screen and (min-width: 576px) {
    padding: 7.5rem;
  }
`
const ImageWrapper = styled(GatsbyImage)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 5rem;
  @media screen and (min-width: 576px) {
    width: 400px;
    height: 400px;
  }
`
const About = styled.div`
  p {
    margin-bottom: 2rem;
  }
  margin-bottom: 5rem;
`
const ExperienceWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`
const Title = styled.h3`
  margin-bottom: 3rem;
  text-align: left;
`
const Experience = styled.div`
  margin-bottom: 4rem;
`
const Header = styled.h4`
  margin-bottom: 0.5rem;
`
const Text = styled.p`
  margin-bottom: 0.5rem;
`
const Description = styled.div`
  margin: 2rem 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.slate};
  p {
    margin-bottom: 1rem;
  }
`
