import PageHeader from "../components/PageHeader"
import Form from "../components/Form";

export default () => (
    <div>
        <PageHeader title="Already have a wallet?" buttontitle="Log In" link="/login" />
        <div className="columns is-mobile is-centered">
            <Form heading="Create A wallet" id="Email" sub="Create My Wallet" login="is-hidden" />
        </div>
        <style jsx global>{`
        body{
                background-color: #144699;
        }`}
        </style>
    </div>
);