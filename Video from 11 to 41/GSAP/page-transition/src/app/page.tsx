import Header from "../components/Header/index";
import Transition from "../components/Transition/index";
export default function Home({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}
