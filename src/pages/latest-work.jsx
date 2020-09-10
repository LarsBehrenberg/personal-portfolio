import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { LocaleContext } from '../components/Layout'
import { SEO, WorksList } from '../components'

const Container = styled.div`
  max-width: 600px;
  margin-bottom: -3rem;
`

const NameHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`

const Subtitle = styled.p`
  margin-bottom: 0.3rem;
  margin-left: 5px;
  font-size: 1.4rem;
  border-left: 2px solid white;
  padding-left: 0.8rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  gap: 1rem;

  a {
    border: 2px solid #fff;
    padding: 0.3rem 1rem;
    background: none;
    color: #fff;
    text-decoration: none;
  }
`

const LatestWork = ({
  data: { latest_work },
  pageContext: { locale },
  location,
}) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const { title, subtitle, description, works } = latest_work.data
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <Container>
        <Subtitle>{subtitle.text}</Subtitle>
        <NameHeader>{title.text}</NameHeader>
        <div dangerouslySetInnerHTML={{ __html: description.html }} />
        <ButtonContainer>
          <a href="/latest-work#works">See Works</a>
          <a className="mailtoui" href="mailto:l.behrenberg@gmail.com">
            Get In Touch
          </a>
        </ButtonContainer>
      </Container>
      <WorksList works={works} id="works" />
    </>
  )
}

export default LatestWork

export const pageQuery = graphql`
  query LatestWorkQuery($locale: String!) {
    latest_work: prismicLatestWork(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        description {
          html
        }
        works: body {
          id
          primary {
            work_title {
              text
            }
            work_description {
              html
            }
            work_link {
              url
            }
            work_image {
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
