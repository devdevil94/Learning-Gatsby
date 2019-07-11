import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> <br />
    <Link to="/">Home</Link> <Link to="/blog/">Blog</Link>{" "}
    <Link to="/about/">About Me</Link> <Link to="/contact/">Contact</Link>
  </footer>
)

export default Footer
