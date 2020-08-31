import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-4xl oxle-pink">Hi people</h1>
    <p className="text-xl text-orange-600">Welcome to your new Gatsby site.</p>
    <p className="text-xl text-green-400">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/productList/">Go to list of products</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
