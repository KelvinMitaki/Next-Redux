import App from "next/app";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/reducers";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
