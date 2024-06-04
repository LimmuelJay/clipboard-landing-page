import Head from "next/head";
import Main from "@/pages/components/main/main";
import GlobalStyles from "@/styles/global";
import IndexStyled from "@/pages/index.styled";

export default function Home() {
  return (
  <IndexStyled>
    <GlobalStyles />
    <Head>
      <title>Frontend Mentor | clipboard-landing-page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Main />
  </IndexStyled>
  );
}
