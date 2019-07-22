import styled from "styled-components";
import Head from "next/head"
import Link from "next/link"

const PageStyled = styled.div`
    background-color:#144699;
    padding: 1rem 2rem 3rem 0rem;
    padding-bottom: 0;
    margin-bottom:1rem;

    .logo {
        color:#FFFFFF; 
        font-size:40px;
        font-weight:800;  
    }
    .mybutton{
        background: transparent;
        border: 2px solid white;
        border-radius: 5px;
        margin-left: 1rem;
    }

`;


const PageHeader = (props) => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"></link>
        </Head>
        <PageStyled className=" navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">
                        <h1 className="logo">BLCOKCHAIN</h1>
                    </a>
                </Link>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <p className="has-text-white has-text-weight-bold is-size-5 mytitle">{props.title}</p>
                        <div className="buttons ">
                            <Link href={props.link}>
                                <a className="button is-medium  mybutton has-text-white has-text-weight-bold is-size-5">
                                    {props.buttontitle}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageStyled >
    </div>
);

export default PageHeader;