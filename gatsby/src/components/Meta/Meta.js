import React from "react";
import { Helmet } from "react-helmet";
import logo from "images/gc-logo.png";

const Meta = props => {
  const { data } = props;

  const title = data.title || "Gatsby Central";
  const path = data.path || "";

  return (
    <Helmet titleTemplate="%s | Gatsby Central" defaultTitle="Gatsby Central">
      <title>{title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={title} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={data.description} />
      <meta name="og:image" content={logo} />
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@GatsbyCentral" />
      <meta name="twitter:image" content={logo} />
      <link rel="canonical" href={`https://www.gatsbycentral.com${path}`} />
      <link rel="image_src" href={logo} />
    </Helmet>
  );
};

export default Meta;
