import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.css"

const IndexPage = ({data}) => (
    <Layout>
        <SEO title="Home"/>
        <h1 className="e65">Учись делать чебуреки!!!</h1>
        <h1 className="title">cheburechkin</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image/>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <ul>
            {data.allStrapiBeauty.edges.map(doc => (
                <li key={doc.node.id}>
                    {doc.node.title}
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage

export const query = graphql`
    query IndexQuery {
        allStrapiBeauty {
            edges {
                node {
                    title
                }
            }
        }
    }`;