import Layout from "../components/MyLayout";
import Banner from "../components/Banner";

export default () => (
    <div>
        <Layout>
            <Banner />
        </Layout>
        <style jsx global>{`
            body{
                background-color:#144699;
            }
        
        `}</style>
    </div>
);