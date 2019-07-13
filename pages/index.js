import Head from "next/head";

import Layout from "../components/MyLayout";
import Banner from "../components/Banner";
import Reach from "../components/Reach";
import Main from "../components/Main";
import Create from "../components/Create";

export default () => (
    <div>
        <Head>
            <title>Blockchain</title>
        </Head>
        <Layout>
            <Banner />
            <Reach />
            <Main />
            <Create />
        </Layout>
        <style jsx global>{`
            body{
                background-color:#144699;
            }
        `}</style>
    </div>
);