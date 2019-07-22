import styled from "styled-components";

const FooterStyled = styled.div`
    background-color:#F0F2F7;
    
    .second{
        margin-top:4rem;
    }

    .Language{
        background-color:#F0F2F7;
    }

    span{
        margin:1rem;
    }

    a{
        display: block;
    }

`;


const Footer = () => (
    <FooterStyled>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title is-5  has-text-weight-semibold  is-spaced">PRODUCTS</h2>
                        <a className="subtitle is-4 has-text-grey ">Blockchain Market</a>
                        <a className="subtitle is-4 has-text-grey">Lockbox</a>
                        <a className="subtitle is-4 has-text-grey">Developers</a>
                    </div>
                    <div className="column">
                        <h2 className="title is-5  has-text-weight-semibold  is-spaced">DATA</h2>
                        <a className="subtitle is-4 has-text-grey">Price</a>
                        <a className="subtitle is-4 has-text-grey">Charts</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Ethereum Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Cash Explorer</a>
                    </div>
                    <div className="column">
                        <h2 className="title is-5  has-text-weight-semibold  is-spaced">DATA</h2>
                        <a className="subtitle is-4 has-text-grey">Price</a>
                        <a className="subtitle is-4 has-text-grey">Charts</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Ethereum Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Cash Explorer</a>                    </div>
                    <div className="column">
                        <h2 className="title is-5  has-text-weight-semibold  is-spaced">DATA</h2>
                        <a className="subtitle is-4 has-text-grey">Price</a>
                        <a className="subtitle is-4 has-text-grey">Charts</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Ethereum Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Cash Explorer</a>
                    </div>
                    <div className="column">
                        <h2 className="title is-5  has-text-weight-semibold  is-spaced">DATA</h2>
                        <a className="subtitle is-4 has-text-grey">Price</a>
                        <a className="subtitle is-4 has-text-grey">Charts</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Ethereum Explorer</a>
                        <a className="subtitle is-4 has-text-grey">Bitcoin Cash Explorer</a>
                    </div>
                </div>
                <div className="columns second">
                    <div className="column ">
                        <div className="select is-medium Language">
                            <select>
                                <option value="English">English</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Chile">Chile</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>
                        </div>
                    </div>
                    <div className="column has-text-right">
                        <span class="icon">
                            <i class="fab fa-twitter-square icon is-large"></i>
                        </span>
                        <span class="icon">
                            <i class="fab fa-linkedin icon is-large"></i>
                        </span>
                        <span class="icon">
                            <i class="fab fa-facebook-square icon is-large"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </FooterStyled>


);



export default Footer;