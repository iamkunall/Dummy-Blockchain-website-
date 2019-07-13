import React from "react";
import styled from "styled-components";
import BannerContent from "./BannerContent"

const BannerStyled = styled.div`
    paddin-bottom:1rem;
    
    .Heading{
        font-size:65px;
        font-family: Roboto, sans-serif;
        margin-bottom: 3rem;
    }

    .subheading{
        margin-bottom: 3rem;
    }

    .second{
        padding-bottom: 9rem;
        padding-top: 9rem;
    }

    .first{
        padding-left: 8rem;
        padding-right: 1rem;
    }
`;

const Banner = () => (
    <BannerStyled>
        <div className="columns">
            <div className="column  is-half has-text-left first ">
                <div className="container is-large">
                    <section className="hero is-medium ">
                        <div className="hero-body">
                            <h1 className="title title is-1 has-text-white has-text-weight-bold Heading">
                                Connecting the world to Crypto
                                    </h1>
                            <h2 className="subtitle is-2 has-text-grey-lighter subheading">
                                The easy way to send, receive, Store and Trade digital currencies
                                    </h2>
                            <a class="button is-large is-link has-text-weight-bold title is-3">Get a Free Wallet</a>
                        </div>
                    </section>
                </div>
            </div>
            <div className="column is-pulled-right second">
                <BannerContent price="$232254" value="Bitcoin" per="1%" />
                <BannerContent price="$274.90" value="Etherum" per="0.6%%" />
                <BannerContent price="$350.47" value="Bitcoin Cash" per="0.7%" />
                <BannerContent price="$0.10" value="stellar" per="10.9%" />
            </div>
        </div>
    </BannerStyled >


);

export default Banner;