import '../styles/globals.css';
import Layout from '../components/Layout';
import Cursor from '../components/Cursor';
import App from 'next/app';

// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  // const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        {/* <Cursor /> */}

        <Component {...pageProps} />
      </Layout>
    </>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const { pageProps } = await App.getInitialProps(appContext);
  const { ctx } = appContext;
  return { pageProps };
};

export default MyApp;
