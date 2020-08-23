import App from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { createWrapper } from "next-redux-wrapper";

export class _app extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(_app);
