import Head from 'next/head'

export function CustomHead() {
  return (
    <Head>
      <title>CryptoTracker</title>
      <meta name="description" content="A small crypto app to track bitcoin price." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/btc.png" />
      <html data-bs-theme="dark" />
    </Head>
  )
}
