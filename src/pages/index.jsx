import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { LocaleContext } from '../components/Layout'

const Index = ({ pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
    </>
  )
}

export default Index

// export const pageQuery = graphql`
//   query IndexQuery($locale: String!) {
//     homepage: prismicHomepage(lang: { eq: $locale }) {
//       data {
//         title {
//           text
//         }
//         content {
//           html
//         }
//       }
//     }
//     social: allPrismicHeroLinks(filter: { lang: { eq: $locale } }) {
//       edges {
//         node {
//           data {
//             body {
//               primary {
//                 label {
//                   text
//                 }
//                 link {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
