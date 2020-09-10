/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import { theme, reset } from '../styles'
import i18n from '../../config/i18n'
import { Header, Particles, SkipNavLink, Footer } from '.'

import 'typeface-source-sans-pro'
import 'typeface-nunito'

const globalStyle = css`
  ${reset}
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 1.0875rem 0rem;
  padding-top: 0;
`

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale, i18n }}>
    <ThemeProvider theme={theme}>
      <>
        <Global styles={globalStyle} />
        <SkipNavLink />
        <Header />
        <Content>
          <main>{children}</main>
          <Footer />
        </Content>
        <Particles />
      </>
    </ThemeProvider>
  </LocaleContext.Provider>
)

export { LocaleContext, Layout }

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}
