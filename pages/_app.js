import '../styles/globals.css';
import Layout from '../components/Layout';
import Cursor from '../components/Cursor';

import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        {/* <Cursor /> */}

        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
