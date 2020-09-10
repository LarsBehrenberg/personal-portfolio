import React from 'react'
import styled from '@emotion/styled'
import LocalizedLink from '../LocalizedLink'

const Container = styled.div`
  margin-top: 10vh;
  position: relative;
  svg {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  .svg-transition {
    transition: all 0.7s;
    transform-origin: 50% 50%;
  }

  :hover {
    svg {
      border: 1px solid #ffffff80;
      fill: grey;
    }

    .svg-transition {
      transform: scale(1.4);
    }
  }
`

const GoNextButton = () => (
  <Container>
    <LocalizedLink to="#testimonials">
      <svg
        width="30"
        height="30"
        viewBox="-10 0 40 20"
        fill="none"
        id="scroll-button"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-transition"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M11.5682 1.12422L11.5614 1.093L11.5614 14.4761L15.7778 10.2689C15.9837 10.0629 16.2625 9.94991 16.5552 9.94991C16.8479 9.94991 17.1248 10.0629 17.3312 10.2689L17.9861 10.9236C18.192 11.1294 18.3058 11.4037 18.3058 11.6963C18.3058 11.9889 18.1928 12.2634 17.9869 12.4693L10.7757 19.6811C10.569 19.8878 10.2938 20.0008 10.0009 20C9.70644 20.0008 9.43099 19.8878 9.22465 19.6811L2.01278 12.4693C1.80709 12.2634 1.69391 11.9891 1.69391 11.6963C1.69391 11.4037 1.80725 11.1294 2.01278 10.9236L2.66774 10.2689C2.87326 10.0629 3.14774 9.94991 3.44042 9.94991C3.73294 9.94991 3.99294 10.0629 4.19863 10.2689L8.43863 14.5236L8.43863 1.10926C8.43863 0.5065 8.95814 -3.8147e-06 9.56058 -3.8147e-06H10.4869C11.0894 -3.8147e-06 11.5682 0.52146 11.5682 1.12422Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="matrix(0 -1 -1 0 20 20)"
            />
          </clipPath>
        </defs>
      </svg>
    </LocalizedLink>
  </Container>
)

export default GoNextButton
