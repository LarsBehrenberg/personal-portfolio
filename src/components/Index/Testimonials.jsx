import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Container = styled.div`
  max-width: 800px;
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

const TestimonialContainer = styled.section`
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0px 0px 128px;
  border-radius: 0.4rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    div,
    img {
      border-radius: 0;
    }
  }
`

const Image = styled.div`
  grid-row: 1 / 4;
  grid-column: 1 / 7;

  border-radius: 0.4rem 0 0 0.4rem;
  &,
  img {
    border-radius: 0.4rem 0 0 0.4rem;
    max-height: 330px;
  }
`

const Text = styled.div`
  line-height: 1.5;
  border-radius: 0 0.4rem 0.4rem 0;
  color: rgb(255, 255, 255);
  grid-row: 1 / 4;
  grid-column: 7 / 13;
  padding: 32px;
  background-color: rgb(21, 38, 50);

  h2 {
    margin-bottom: 0.4rem;
  }
`

const Button = styled(Link)`
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  text-transform: none;
  background-color: rgb(6, 82, 221);
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px,
    rgba(0, 0, 0, 0.08) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease 0s;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  order: 2;
  z-index: 2;
  grid-row: 3 / 3;
  grid-column: 5 / 7;
  padding: 32px;

  span {
    display: inline-block;
    position: relative;
    transition: all 300ms ease-out;
    will-change: transform;
  }
  &:hover span {
    transform: translate3d(-0.5rem, 0, 0);
  }
  svg {
    position: absolute;
    width: 1.1em;
    right: 0px;
    right: 0rem;
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 300ms ease-out;
    will-change: right, opacity;
    * {
      stroke-width: 5;
    }
  }
  &:hover svg {
    opacity: 1;
    right: -1.5rem;
  }
`
const Testimonials = ({ clients, title, subtitle, intro }) => (
  <>
    <Container id="testimonials">
      <Subtitle>{subtitle}</Subtitle>
      <NameHeader>{title}</NameHeader>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
    </Container>
    <TestimonialContainer>
      <Image>
        <Img
          fluid={clients.client_image.localFile.childImageSharp.fluid}
          alt="Michael Fassnachts Testimonial"
          style={{ objectFit: 'fit' }}
        />
      </Image>
      <Button to="/latest-work">
        <span>
          Next
          <svg
            width="10"
            height="10"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '5px', display: 'inline-block' }}
          >
            <g clipPath="url(#clip0)">
              <path
                d="M15.2894 10.9901L6.6897 19.5895C6.14266 20.1368 5.25572 20.1368 4.70894 19.5895C4.16212 19.0427 4.16212 18.1558 4.70894 17.609L12.3183 9.99986L4.70917 2.39095C4.16234 1.84391 4.16234 0.957105 4.70917 0.410283C5.25599 -0.136761 6.14288 -0.136761 6.68992 0.410283L15.2896 9.00983C15.563 9.28337 15.6996 9.64151 15.6996 9.99981C15.6996 10.3583 15.5628 10.7167 15.2894 10.9901Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </Button>
      <Text>
        <h2>{clients.client_title.text}</h2>
        <h4>{clients.client_subtitle.text}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: clients.client_text.html,
          }}
        />
      </Text>
    </TestimonialContainer>
  </>
)

export default Testimonials
