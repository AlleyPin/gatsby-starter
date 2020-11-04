import React, { useState } from "react"
import { StylesProvider } from "@material-ui/styles"
import styled, { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Section = styled.section`
  margin: 3rem auto;
  max-width: 600px;
`
export default function Home() {
  return (
    <Layout>
      <StylesProvider injectFirst>
        <ThemeProvider theme={{}}>
          <Section>Hello world! {process.env.STAGE}</Section>
          <Link to="/about">about</Link>
        </ThemeProvider>
      </StylesProvider>
    </Layout>
  )
}
