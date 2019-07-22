import PageHeader from "../components/PageHeader"
import Form from "../components/Form";
export default () => (
    <div>
        <PageHeader title="Dont't have a wallet?" buttontitle="Create One Now" link="/signup" />
        <div className="columns is-mobile is-centered">
            <Form heading="Welcome Back!" id="Wallet Id" sub="Log In" signup="is-hidden" />
        </div>
        <style jsx global>{`
        body{   
                background-color: #144699;
        }`}
        </style>
    </div>
);