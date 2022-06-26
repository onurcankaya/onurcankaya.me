import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

export interface IExperience {
  company: string
  role: string
  date: string
  location: string
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>
}
