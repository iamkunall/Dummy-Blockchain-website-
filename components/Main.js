import styled from "styled-components";


const MainStyled = styled.div`
    background-color:#FFFFFF;
    padding-top:1rem;
    padding-bottom:9rem;
    font-family: Roboto, sans-serif;

    .maindiv{
        padding-top:10rem;
    }

    .Heading{
        padding-top:5rem;
        font-size: 3rem;
    }

    .sub{
        padding-top:1rem;
        font-size: 2rem;
    }
    @media screen and (max-width: 480px){
    .test{
        padding-right: 2rem;
    }
        }
`;


const Main = () => (
    <MainStyled>
        <section className="section">
            <div className="container">
                <div className="columns maindiv">
                    <div className="column is-two-fifths">
                        <h1 className="title Heading has-text-weight-bold">Your Passport to the Future of Finance</h1>
                        <h1 className="subtitle sub">The first and most trusted global cryptocurrency comapny</h1>
                    </div>
                    <div className="column">
                        <img src="https://www.blockchain.com/static/img/home/home-map-ppl.png" />
                    </div>
                </div>
                <div className="columns">
                    <div className="column test">
                        <h1 className="title  has-text-weight-bold is-spaced">Invest</h1>
                        <p className="subtitle is-3 has-text-weight-light ">Exchange and transact bitcoin, ethereum, bitcoin cash, USD PAX, and stellar lumens using the world's most trusted and secure cryptocurrency wallet</p>
                        <a className="subtitle is-4 has-text-link" href="#">Lean more -></a>
                    </div>
                    <div className="column test">
                        <h1 className="title  has-text-weight-bold is-spaced ">Explore</h1>

                        <p className="subtitle is-3 has-text-weight-light ">Exchange and transact bitcoin, ethereum, bitcoin cash, USD PAX, and stellar lumens using the world's most trusted and secure cryptocurrency wallet</p>
                        <a className="subtitle is-4 has-text-link" href="#">Lean more -></a>
                    </div>
                    <div className="column test">
                        <h1 className="title  has-text-weight-bold is-spaced">Analyze</h1>

                        <p className="subtitle is-3 has-text-weight-light ">Exchange and transact bitcoin, ethereum, bitcoin cash, USD PAX, and stellar lumens using the world's most trusted and secure cryptocurrency wallet</p>
                        <a className="subtitle is-4 has-text-link" href="#">Lean more -></a>
                    </div>
                </div>
            </div>
        </section>
    </MainStyled>
);

export default Main;