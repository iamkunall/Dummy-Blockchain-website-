import styled from "styled-components";
import Link from "next/link";

const CreateStyled = styled.div`
    padding-top:4rem;
    padding-bottom:4rem;
    background-color:#144698;

    .button{

        margin-top:2rem;
        padding:0rem 2rem 0rem 2rem;
    }

    .one{
        background:#0C6CF2
    }

    .two{
        background: transparent;
    }
    
    .to{
        text-align:center;
    }

`;

const Create = () => (
    <CreateStyled>
        <div className="columns  is-mobile is-multiline is-centered">
            <div className="column is-half has-text-centered">
                <h2 className="title is-2 has-text-white has-text-weight-semibold  is-spaced">
                    Enter the Future of Finance
                </h2>
                <h3 className="subtitle is-3 has-text-grey-light">Empowering individual, investors, and developers to join the revolution</h3>
            </div>
        </div>
        <div className="columns  is-mobile is-multiline is-centered">
            <div class="columns">
                <div className="column">
                    <Link href="/signup"><a className="button is-link is-large is-focused subtitle is-3 one">Create a Wallet</a></Link>
                </div>
                <div className="column to">
                    <a className="button is-link is-large is-focused subtitle is-3 two">Learn more</a>
                </div>
            </div>
        </div>

    </CreateStyled>
);

export default Create;