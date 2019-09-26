import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundSize: 'cover',
        backgroundPositionY: '735px',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'flex-start',
        height: '592px'
      }}
    >
      <div className="container"
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          marginTop: '64px',
          padding: '32px'
        }}
      >
        <h1
          className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: 'rgba(20, 212, 255, 0.8)',
            color: 'white',
            lineHeight: '1',
            padding: '0.5em',
            alignSelf: 'center',
            maxWidth: '25em',
            borderRadius: '4px',
            marginBottom: '32px',
            textAlign: 'center',
            boxShadow: 'inset 0px 0px 3px 0px rgba(255,255,255,0.5)',
            fontSize: '2.5rem !important',
            fontWeight: '300'
          }}
        >
          Matt Shaver:  The <span className="important-text" style={{
            color: '#8bffb9',
            fontWeight: '400'
          }}>Creative, Passionate</span> Front End Developer
        </h1>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            backgroundColor: 'rgba(20,212,255, 0.8)',
            borderRadius: '4px',
            color: 'white',
            lineHeight: '1',
            padding: '0.5em',
            textAlign: 'center',
            minWidth: '43em',
            alignSelf: 'center',
            fontWeight: '400'
          }}
        >
          Crafting great UI/UX experiences using world class technology.
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile" style={{
                    justifyContent: 'left',
                    fontWeight: '700'
                  }}>
                    <h3 className="title" style={{
                    fontWeight: '200',
                    fontSize: '2.5em',
                    marginBottom: '1.5em'
                  }}>Transforming what it means to be a <span class="important-text" style={{
                      fontWeight: '600'
                    }}>developer</span></h3>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle" style= {{
                      fontWeight: '300',
                      opacity: '0.8',
                      textAlign: 'left'
                    }}>{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns" style={{
                  marginTop: '32px'
                }}>
                  <div className="column is-12">
                    <h3 style={{
                      fontSize: '2.5em',
                      marginBottom: '1.5em',
                      fontWeight: '200'
                    }}>
                      Revolutionizing <span class="important-text" style={{
                        fontWeight: '400'
                      }}>Code...</span>
                    </h3>
                    <p style={{
                      fontWeight: '300',
                      opacity: '0.8',
                      fontSize: '1.5em'
                    }}>Matt is always looking for ways to improve his code, abilities.</p>
                    <h4 style={{
                      fontWeight: '500',
                      letterSpacing: '0.3px',
                      marginLeft: '8px',
                      marginTop: '1.5em',
                      display: 'block'
                    }}>Matt's Current Obsessions:</h4>
                    <ul class="text-content">
                      <li class="text-content__item">Html</li>
                      <li class="text-content__item">CSS</li>
                      <li class="text-content__item">Javascript</li>
                      <li class="text-content__item">ES6+</li>
                      <li class="text-content__item">ReactJS</li>
                      <li class="text-content__item">Gatsby</li>
                      <li class="text-content__item">Apollo</li>
                      <li class="text-content__item">Python</li>
                      <li class="text-content__item">UI/UX</li>
                      <li class="text-content__item">Figma</li>
                    </ul>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/projects">
                      View Matt's Projects
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Matt's Latest Awesome Content
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Checkout More of Matt's Awesome Content!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
