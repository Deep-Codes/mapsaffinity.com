import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Maps Affintiy | Maps and visualisation around geography, politics and
            more."
          />
          <meta property="og:site_name" content="mapsaffinity.com" />
          <meta
            property="og:description"
            content="Maps Affintiy | Maps and visualisation around geography, politics and
            more."
          />
          <meta
            property="og:title"
            content="Maps Affintiy | Maps and visualisation around geography, politics and
          more."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Maps Affintiy | Maps and visualisation around geography, politics and
          more."
          />
          <meta
            name="twitter:description"
            content="Maps Affintiy | Maps and visualisation around geography, politics and
            more."
          />
          <script
            async
            defer
            data-domains="mapsaffinity.com"
            src="https://graphs.dpnkr.in/bruh.js"
            data-website-id="c7c72c5f-38f5-47d4-b8a6-fc53778df606"
          ></script>
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
