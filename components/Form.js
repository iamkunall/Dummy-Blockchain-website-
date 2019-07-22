import styled from "styled-components";
import pageFooter from "../components/PageFooter";
import PageFooter from "../components/PageFooter";


const FormStyled = styled.div`
    width: 35%;
    @media screen and (max-width: 480px){
        width: 90%;
    }
    .mybox{
        margin-top: 8rem;
        margin-bottom:1rem;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.21) 0px 2px 8px 0px;
    }
    .mybutton{
        margin-top:1rem;
    }

    .size{
        padding: 1rem 2rem;
    }
`;


const Form = (props) => (
    <FormStyled>
        <div className="box mybox">
            <section className="">
                <div className="container size">
                    <div className="field">
                        <label className="title is-3 is-spaced is-medium">{props.heading}</label>
                    </div>
                    <div className="field">
                        <label className="label is-large">{props.id}</label>
                        <div className="control">
                            <input className="input is-large" />
                        </div>
                    </div>
                    <div className={props.login}>
                        <div className="field">
                            <div className="control">
                                <label className="label has-text-centered">
                                    Your Wallet ID can be found at the bottom of any email we’ve ever sent you. Need a reminder?   <a>Send my Wallet ID</a>

                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-large">Password</label>
                        <div className="control">
                            <input className="input is-large" type="password" />
                        </div>
                    </div>
                    <div className={props.signup}>
                        <div className="field">
                            <label className="label is-large">Confirm Password</label>
                            <div className="control">
                                <input className="input  is-large" type="password" />
                            </div>
                        </div>
                    </div>
                    <div className={props.signup}>
                        <div className="field">
                            <div className="control">
                                <label className="label">
                                    <input type="checkbox" />
                                    I have read and agreed to the  <a>Terms of Service</a> &  <a>Privacy Policy.</a>

                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-link  is-large is-fullwidth mybutton">{props.sub}</button>
                        </div>
                    </div>
                    <div className={props.login}>
                        <div class="columns">
                            <div class="column">
                                <a><h2 className="has-text-link has-text-weight-bold	">Login Via mobile</h2></a>
                            </div>
                            <div class="column has-text-right">
                                <a><h2 className="has-text-link has-text-weight-bold	">Need some Help?</h2></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <PageFooter />
    </FormStyled>
);

export default Form;