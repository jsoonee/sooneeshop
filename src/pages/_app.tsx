import { AppProps } from "next/app";
import { Provider } from "react-redux";
import GlobalStyle from "@/global-style";
import Layout from "@/components/Layout";
import wrapper from "@/redux/store";
import Head from "next/head";

const MyApp = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<>
			<Head>
				<title>sooneeShop</title>
			</Head>
			<Provider store={store}>
				<GlobalStyle />
				<Layout>
					<Component {...props.pageProps} />
				</Layout>
			</Provider>
		</>
	);
};

export default MyApp;
