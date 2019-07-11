import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>My Blog Page</h1>
    <p>Welcome to my blog</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default BlogPage
