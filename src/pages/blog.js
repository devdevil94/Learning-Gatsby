import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              date
              title
              author
            }
            excerpt
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>My Blog Page</h1>
      <p>Welcome to my blog. Here are my blog posts</p>
      {posts.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <p>{post.node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
