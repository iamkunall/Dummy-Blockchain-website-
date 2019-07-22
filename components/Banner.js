import React from "react";
import styled from "styled-components";
import Link from "next/link";
import BannerContent from "./BannerContent"

const BannerStyled = styled.div`
    padding-bottom:2rem;
    @media screen and (max-width: 480px){
    padding-top:4rem;
    }
    .Heading{
        font-size:55px;
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
        padding-left:8rem;
        padding-right: 0rem;
    }
    @media screen and (max-width: 480px){
        .first{
            padding-left:0rem;
            padding-right: 0rem;
        }

    }
`;

const Banner = () => (
    <BannerStyled>
        <div className="columns">
            <div className="column  has-text-left first ">
                <section className="hero is-medium ">
                    <div className="hero-body">
                        <h1 className="title title is-1 has-text-white has-text-weight-bold Heading">
                            Connecting the world to Crypto
                                    </h1>
                        <h2 className="subtitle is-3 has-text-grey-lighter subheading">
                            The easy way to send, receive, Store and Trade digital currencies
                                    </h2>
                        <Link href="/signup"><a class="button is-large is-link has-text-weight-bold title is-3">Get a Free Wallet</a></Link>
                    </div>
                </section>
            </div>
            <div className="column second">
                <BannerContent price="$232254" value="Bitcoin" per="1%" />
                <BannerContent price="$274.90" value="Etherum" per="0.6%%" />
                <BannerContent price="$350.47" value="Bitcoin Cash" per="0.7%" />
                <BannerContent price="$0.10" value="stellar" per="10.9%" />
            </div>
        </div>
    </BannerStyled >


);

export default Banner;