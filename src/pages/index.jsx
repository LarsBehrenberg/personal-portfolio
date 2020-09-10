import React from 'react'
import { graphql } from 'gatsby'
import {
  LandingBio,
  SEO,
  GoNextButton,
  Testimonials,
  Skills,
} from '../components'
import { LocaleContext } from '../components/Layout'

const Index = ({ data: { homepage }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <LandingBio
        title={homepage.data.title.text}
        subtitle={homepage.data.subtitle.text}
        intro={homepage.data.introduction_text.html}
      />
      <GoNextButton />
      <Testimonials
        clients={homepage.data.testimonials[0].primary}
        title={homepage.data.testimonials_title.text}
        subtitle={homepage.data.testimonials_subtitle.text}
        intro={homepage.data.testimonials_introduction.html}
      />
      <Skills skills={homepage.data.skills} />
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    homepage: prismicHomepage(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        introduction_text {
          html
        }
        testimonials_title {
          text
        }
        testimonials_subtitle {
          text
        }
        testimonials_introduction {
          html
        }
        testimonials: body {
          primary {
            client_title {
              text
            }
            client_subtitle {
              text
            }
            client_text {
              html
            }
            client_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        skills: body1 {
          id
          primary {
            skill_title {
              text
            }
            skill_description {
              html
            }
            skill_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
