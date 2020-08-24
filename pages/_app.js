import { wrapper } from "../redux/reducers";
import "semantic-ui-css/semantic.min.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
