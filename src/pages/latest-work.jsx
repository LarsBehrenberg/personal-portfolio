import React from 'react'
import { graphql } from 'gatsby'

import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'

const LatestWork = ({  pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
    </>
  )
}

export default LatestWork

// export const pageQuery = graphql`
//   query LatestWorkQuery($locale: String!) {
//     about: prismicAbout(lang: { eq: $locale }) {
//       data {
//         profile_image {
//           alt
//           copyright
//           url
//         }
//         body {
//           html
//         }
//         title {
//           text
//         }
//       }
//     }
//   }
// `
