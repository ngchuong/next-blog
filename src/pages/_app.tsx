import Layout from "../components/layout";

export default function MyApp({ Component, pageProps, ...appProps }) {
  const pageWithoutLayout = ["/posts/create"];
  
  if (pageWithoutLayout.includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
