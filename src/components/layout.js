import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Contentful: Multisite Management Demo</title>
        <meta name="description" content="Learn how to easily manage multiple sites powered by a modern content platform." />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <NavBar siteConfig={props.siteConfig} />
      {props.children}
      <Footer siteConfig={props.siteConfig} />
    </div>
  );
}
