import React from "react";

const ContainerCardPequeno = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`



function CardPequeno(props) {
    return(
        <ContainerCardPequeno>
            <div>
                <p>{props.email}</p>
            </div>
            <div>
                <p>{props.endereço}</p>
            </div>
        </ContainerCardPequeno>

    )
}

export default CardPequeno;