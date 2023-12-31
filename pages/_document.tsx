import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Curate and generate ideas for your social media content."
          />
          <meta property="og:site_name" content="aesthetic.ly" />
          <meta
            property="og:description"
            content="Curate and generate ideas for your social media content."
          />
          <meta property="og:title" content="Aesthetic Picker" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Aesthetic Picker" />
          <meta
            name="twitter:description"
            content="Curate and generate ideas for your social media content."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
