import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import { Project } from '../types'

type Props = PageProps<{
  contentfulProjects: {
    projects: Project[]
  }
}>

export const query = graphql`
  {
    contentfulProjects {
      projects {
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        title
        description {
          raw
        }
        siteUrl
        githubUrl
      }
    }
  }
`

export default function ProjectsPage({ data }: Props) {
  const { projects } = data.contentfulProjects

  return (
    <Layout>
      <Wrapper>
        {projects.map((item, index) => (
          <ProjectWrapper key={index} href={item.siteUrl} target='_blank'>
            <Image
              image={getImage(item.image) || item.image}
              alt={item.image.title}
            />
            <TextWrapper>
              <Title>{item.title}</Title>
              <Description>{renderRichText(item.description)}</Description>
            </TextWrapper>
          </ProjectWrapper>
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 10rem 0;
`
const ProjectWrapper = styled.a`
  display: block;
  width: 90vw;
  height: 20rem;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.light};

  @media screen and (min-width: 36rem) {
    width: 50rem;
    height: 35rem;
  }
`
const Image = styled(GatsbyImage)`
  border-radius: 0.25rem;
`
const TextWrapper = styled.div`
  color: ${({ theme }) => theme.blue};
  padding: 1rem;
`
const Title = styled.h4`
  text-decoration: underline;
  padding-bottom: 1rem;
`
const Description = styled.p``
