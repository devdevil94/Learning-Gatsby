import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <p>Reach me through my social media</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default ContactPage
