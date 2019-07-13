import styled from "styled-components";

const Contanier = styled.div`    


.mybox{
    min-width: 32rem;
    font-family: Roboto, sans-serif;
    margin-bottom:1rem;
    background-color:#144698;
    opacity:0.75;
    color:white;
    font-weight:600;
    transition:background-color 0.2s;
}
.mybox:hover{
    min-width: 38rem;
    background-color:#00285C;
}

p{
    margin-right:4rem;
    font-size:20px;
}
.icon{
    margin-right:2rem;
    font-size:20px;
}


`;

const BannerContent = (props) => (
    <Contanier>
        <div className="box mybox is-pulled-right has-text-right">
            <p className="is-inline">{props.price}</p>
            <p className="is-inline">{props.value}</p>
            <i className="fas fa-caret-up is-inline icon"></i>
            <p className="is-inline">{props.per}</p>
        </div>
    </Contanier>
);
export default BannerContent;