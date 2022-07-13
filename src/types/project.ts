import { IGatsbyImageData } from 'gatsby-plugin-image'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

export interface Project {
  image: IGatsbyImageData & {
    title: string
    height: number
  }
  title: string
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>
  siteUrl: string
  githubUrl: string
}
