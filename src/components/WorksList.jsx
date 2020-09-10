import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const OuterContainer = styled.div`
  & > div:nth-of-type(2n-1) {
    flex-direction: row-reverse;

    .work_description {
      padding-left: 0;
      padding-right: 3rem;
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`

const Container = styled.div`
  margin-top: 8rem;
  width: 100%;
  min-height: 300px;

  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`

const Image = styled.a`
  background: grey;
  width: 50%;
  max-height: 330px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  @media (max-width: 800px) {
    height: 300px;
    margin-bottom: 2rem;
  }
  border-radius: 0.4rem;
  .image {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
  }
`

const Text = styled.div`
  width: 50%;

  padding: 0 1rem 0 3rem;
  @media (max-width: 800px) {
    padding: 0;
  }

  @media (min-width: 1200px) {
    padding: 2rem 0 1rem 3rem;
  }
`

const SingleWork = ({ title, description, image, link }) => (
  <Container>
    <Image href={link} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={image}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        objectFit="cover"
        className="image"
      />
    </Image>
    <Text className="work_description">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Text>
  </Container>
)

const WorksList = ({ works, id }) => (
  <OuterContainer id={id || 'works'}>
    {works.map(
      ({
        id,
        primary: { work_title, work_image, work_description, work_link },
      }) => (
        <SingleWork
          key={id || work_title}
          title={work_title.text}
          description={work_description.html}
          link={work_link.url}
          image={work_image.localFile.childImageSharp.fluid}
        />
      )
    )}
  </OuterContainer>
)

export default WorksList
