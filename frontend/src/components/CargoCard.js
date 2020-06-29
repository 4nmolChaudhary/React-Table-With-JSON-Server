import styled from 'styled-components'
import React from 'react'

const Div = styled.div`
    font-family: 'GoogleSans-Regular';
    color:#455971;
    font-weight: 800;
    font-size:${(props) => (props.fontSize ? props.fontSize : "16px")};
`;

const Card = styled.div`
    padding:15px;
    margin:1px 0;
    background:#e8e8e8;
    border-radius:4px;
`;


function CargoCard({ type, desc, vol }) {
    return (
        <Card>
            <Div fontSize="12px">{type}</Div>
            <Div fontSize="16px">{desc}</Div>
            <Div fontSize="13">Volume : {vol}</Div>
        </Card>
    )
}

export default CargoCard
