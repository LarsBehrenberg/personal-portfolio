/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { SEO } from '../components'
import { LocaleContext } from '../components/Layout'

const Post = ({ data: { prismicPost }, location, pageContext: { locale } }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const { data } = prismicPost

  return (
    <>
      <SEO
        title={`${data.title.text} | ${i18n.defaultTitleAlt}`}
        pathname={location.pathname}
        locale={locale}
        desc={data.description}
        node={prismicPost}
        article
      />
    </>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!, $locale: String!) {
    prismicPost(uid: { eq: $uid }, lang: { eq: $locale }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "DD.MM.YYYY")
        categories {
          category {
            document {
              data {
                name
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
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
  }
`
