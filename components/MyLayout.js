
import Head from "next/head";
import Header from "./Header"

const Layout = props => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
        </Head>
        <Header />
        {props.children}
    </div>
);

export default Layout;