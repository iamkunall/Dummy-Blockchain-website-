import styled from "styled-components";

const ReachStyled = styled.div`
    background-color:#121D33;
    padding-bottom:1rem;

    .Heading{
        padding-top: 1rem;
        padding-bottom:0.2rem;
        
    }

    .Sub
    {
        margin-top:10rem;
    }


`

const Reach = () => (
    <ReachStyled>
        <div className="container">
            <div className="columns ">
                <div className="column has-text-centered ">
                    <h1 className="title is-2 has-text-white Heading">40M+</h1>
                    <h1 className="subtitle is-4 has-text-grey-lighter">Wallets</h1>
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-2 has-text-white Heading Heading">$200B+</h1>
                    <h1 className="subtitle is-4 has-text-grey-lighter">Transacted</h1>
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-2 has-text-white Heading">140</h1>
                    <h1 className="subtitle is-4 has-text-grey-lighter">countries</h1>
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-2 has-text-white Heading">2011</h1>
                    <h1 className="subtitle is-4 has-text-grey-lighter">Founded</h1>
                </div>
            </div>
        </div>
    </ReachStyled>

);

export default Reach