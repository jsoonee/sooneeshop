import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                  // const themeProps = {
                  //   "--text-pri": {"light": "rgba(0, 0, 0, 0.87)" ,"dark": "#fff"},
                  //   "--text-sec": {"light": "rgba(0, 0, 0, 0.6)" ,"dark": "rgba(255, 255, 255, 0.7)"},
                  //   "--text-dis": {"light": "rgba(0, 0, 0, 0.38)" ,"dark": "rgba(255, 255, 255, 0.5)"},
                  //   "--btn-act": {"light": "rgba(0, 0, 0, 0.54)" ,"dark": "#fff"},
                  //   "--btn-hov": {"light": "rgba(0, 0, 0, 0.04)" ,"dark": "rgba(255, 255, 255, 0.08)"},
                  //   "--btn-sel": {"light": "rgba(0, 0, 0, 0.08)" ,"dark": "rgba(255, 255, 255, 0.16)"},
                  //   "--btn-dis": {"light": "rgba(0, 0, 0, 0.26)" ,"dark": "rgba(255, 255, 255, 0.3)"},
                  //   "--btn-disBg": {"light": "rgba(0, 0, 0, 0.12)", "dark": "rgba(255, 255, 255, 0.12)"},
                  //   "--bg-def": {"light": "#fff", "dark": "#121212"},
                  //   "--bg-pap": {"light": "#fff", "dark": "#121212"},
                  //   "--div": {"light": "rgba(0, 0, 0, 0.12)", "dark": "rgba(255, 255, 255, 0.12)"}
                  // }
                  let theme = localStorage.getItem("theme");
                  if (!theme) {
                    const osDark = theme = window.matchMedia("(prefers-color-scheme: dark)");
                    theme = osDark ? "dark" : "light";
                  }
                  const root = document.documentElement;
                  theme = theme.slice(1, theme.length-1)
                  root.setAttribute("theme", theme);

                  root.style.setProperty("--bg-def", theme === "dark" ? "#121212" : "#fff");
                `,
						}}
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
						rel="stylesheet"
					/>
					<body>
						<Main />
						<NextScript />
					</body>
				</Head>
			</Html>
		);
	}
}

export default MyDocument;
