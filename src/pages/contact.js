import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <p>
      Reach me through my social media or visit{" "}
      <a href="https://github.com/devdevil94">my Github page</a>
    </p>
  </Layout>
)

export default ContactPage
