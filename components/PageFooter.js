import styled from "styled-components";

const Container = styled.div`
    margin-top:1rem;
    padding-bottom: 6.5%;

    .link{
        margin-left:1rem;
        font-size:1rem;
    }

    img{
        width:15rem;
        height: 5rem;

    }


`;

const PageFooter = () => (
    <Container>
        <div class="columns" >
            <div class="column">
                <div className="select is-medium ">
                    <select className="Language">
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
            <div class="column has-text-right">
                <a className="link"><h2 className="has-text-white has-text-weight-bold is-inline">Data</h2></a>
                <a className="link"><h2 className="has-text-white has-text-weight-bold is-inline">About</h2></a>
                <a className="link"><h2 className="has-text-white has-text-weight-bold is-inline">Blog</h2></a>
                <a className="link"><h2 className="has-text-white has-text-weight-bold is-inline">Support</h2></a>
            </div>
        </div>
        <div className="columns">
            <div className="column has-text-right">
                <img src="http://rajasthan.gov.in/wp-content/themes/twentysixteen/img/app-stores/ios-store.png" />
            </div>
            <div className="column">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJHHfcT3RN0bjVTpm36npCBlrx1116--2xycDeMmS8pNMcLi5lw" />
            </div>
        </div>
    </Container>
);


export default PageFooter;