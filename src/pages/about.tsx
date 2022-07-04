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
import { Experience, Skill } from '../types'

type Props = PageProps<{
  contentfulAbout: {
    image: IGatsbyImageData & {
      title: string
    }
    text: RenderRichTextData<ContentfulRichTextGatsbyReference>
    experience: Experience[]
    skills: Skill[]
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
      skills {
        title
        description
      }
    }
  }
`

export default function AboutPage({ data }: Props) {
  const { image, text, experience, skills } = data.contentfulAbout

  return (
    <Layout>
      <Wrapper>
        <ImageWrapper image={getImage(image) || image} alt={image.title} />
        <About>{renderRichText(text)}</About>
        <SectionWrapper>
          <Title>Experience</Title>
          {experience.reverse().map((item: Experience, index: React.Key) => (
            <ExperienceSection key={index}>
              <Header>{item.role}</Header>
              <Text>
                {item.company} — {item.location}
              </Text>
              <Text>{item.date}</Text>
              <Description>{renderRichText(item.description)}</Description>
            </ExperienceSection>
          ))}
        </SectionWrapper>
        <SectionWrapper>
          <Title>Skills</Title>
          {skills.map((skill: Skill, index: React.Key) => (
            <SkillSection key={index}>
              <Header>{skill.title}</Header>
              <Text>{skill.description}</Text>
            </SkillSection>
          ))}
        </SectionWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;
  width: 80vw;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (min-width: 60rem) {
    width: 40vw;
  }
`
const ImageWrapper = styled(GatsbyImage)`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  margin-bottom: 5rem;

  @media screen and (min-width: 36rem) {
    width: 20rem;
    height: 20rem;
  }

  @media screen and (min-width: 60rem) {
    width: 25rem;
    height: 25rem;
  }
`
const About = styled.div`
  p {
    margin-bottom: 2rem;
  }
  margin-bottom: 4rem;
`
const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`
const Title = styled.h3`
  margin-bottom: 2rem;
  text-decoration: underline;
  text-align: left;
`
const ExperienceSection = styled.div`
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
const SkillSection = styled.div`
  margin-bottom: 2rem;
`
