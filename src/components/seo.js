import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}