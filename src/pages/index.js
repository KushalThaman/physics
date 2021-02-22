import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "curl, div, undergrad and all that. "

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `kushalthaman`, `kushal`]}
        />
        <h1>
         
        </h1>
        <p>Welcome to the physics section of my <a href = "http://kushalthaman.github.io/"> website </a>. Here, you'll see me frequently rant about  </p>
 
        <Link to="/blog/">
          <Button marginTop="35px">Curl, Div, Undergrad</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
