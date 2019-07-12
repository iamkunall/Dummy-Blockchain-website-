import React from "react";
import styled from "styled-components";

const BannerStyled = styled.div`

    margin-top: 2rem;
`;

const Banner = () => (
    <BannerStyled>
        <div className="container">
            <div className="columns">
                <div className="column">
                    <section className="hero is-title is-bold">
                        <div className="hero-body">
                            <h1 className="title title is-1 has-text-white has-text-weight-bold">
                                Connecting the world to crypto
                                    </h1>
                            <h2 className="subtitle is-2 has-text-grey-lighter">
                                The easy way to send, receive, Store and Trade digital currencies
                                    </h2>
                        </div>
                        <a class="button is-large is-link has-text-weight-bold title is-3">Get a Free Wallet</a>
                    </section>
                </div>
                <div className="column">
                    Second column
                </div>
            </div>
        </div>
    </BannerStyled>


);

export default Banner;