import React from 'react';
import styled from '@emotion/styled';

import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaXing } from 'react-icons/fa';

const OuterContainer = styled.div`
  --basic-footer-height: 250px;

  width: 100%;
  min-height: var(--basic-footer-height);
  height: var(--basic-footer-height);
  margin-top: 4rem;
`;

const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  height: var(--basic-footer-height);
  max-width: 1250px;
  width: calc(100% - 2.175rem);
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem 0;

    text-align: center;

    .mailtoui {
      svg,
      path,
      rect,
      g {
        display: none !important;
      }
    }
  }
`;

const AlwaysInTouch = styled.a`
  div,
  svg {
    display: inline-block;
  }

  svg {
    margin-right: 1.5rem;
  }

  h4,
  h1 {
    font-weight: 400;
    margin-bottom: 0.4rem;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #fff;
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
  }

  :hover {
    h1::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  h4 {
    font-style: italic;
    display: inline-block;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 1em 0.6em 0.5em;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: var(--basic-footer-height);
  position: absolute;
  left: 0;
  margin: 0 auto;

  background-color: rgb(21, 38, 50);
`;

const Footer = () => (
  <OuterContainer>
    <Container>
      <AlwaysInTouch href="mailto:l.behrenberg@gmail.com" className="mailtoui">
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.8711 12.7203C52.7812 11.5923 50.9673 11.5923 49.8393 12.7203C48.7494 13.8101 48.7494 15.624 49.8393 16.7114L70.2826 37.1547H2.82248C1.24992 37.1572 0 38.4071 0 39.9797C0 41.5523 1.24992 42.8428 2.82248 42.8428H70.2826L49.8393 63.248C48.7494 64.376 48.7494 66.1925 49.8393 67.2798C50.9673 68.4078 52.7837 68.4078 53.8711 67.2798L79.154 41.9968C80.282 40.907 80.282 39.0931 79.154 38.0057L53.8711 12.7203Z"
            fill="white"
          />
        </svg>

        <div>
          <h4>Always Available For A Chat</h4>
          <h1>Lars Behrenberg</h1>
        </div>
      </AlwaysInTouch>
      <a href="mailto:l.behrenberg@gmail.com" className="mailtoui">
        Get In Touch
      </a>

      <IconContainer>
        <IconContext.Provider value={{ color: '#ffffff90', size: '1.4em' }}>
          <a
            href="https://www.linkedin.com/in/lars-behrenberg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.xing.com/profile/Lars_Behrenberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXing />
          </a>
          <a
            href="https://github.com/LarsBehrenberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </IconContext.Provider>
      </IconContainer>
    </Container>
    <Background />
  </OuterContainer>
);

export default Footer;
