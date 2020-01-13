import Head from 'next/head';

export default function Home() {
  // Redirect logic if not Home
  if (process.browser && window.location.pathname !== '/') {
    window.location = '/'
  }

  return (
    <React.Fragment>
      <Head>
        <title>GO HOME</title>
      </Head>
      <p>This is an empty page. It's like an easter egg</p>
    </React.Fragment>
  );
};

