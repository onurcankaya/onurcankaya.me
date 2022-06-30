import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

export interface Experience {
  company: string
  role: string
  date: string
  location: string
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>
}
