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

type ImageProps = {
  height: number
}

export const query = graphql`
  {
    contentfulProjects {
      projects {
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          height
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
        {projects.reverse().map((item, index) => (
          <ProjectWrapper key={index} href={item.siteUrl} target='_blank'>
            <Image
              image={getImage(item.image) || item.image}
              alt={item.title}
              height={item.image.height}
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
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 0 auto 4rem auto;
  background-color: ${({ theme }) => theme.light};
  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 36rem) {
    width: 50rem;
  }
`
const Image = styled(GatsbyImage)<ImageProps>`
  border-radius: 0.25rem;
  height: ${(props) => props.height};
`
const TextWrapper = styled.div`
  color: ${({ theme }) => theme.blue};
  padding: 1.5rem 1rem;
  height: 6rem;
`
const Title = styled.h4`
  text-decoration: underline;
  padding-bottom: 1rem;
`
const Description = styled.p``
