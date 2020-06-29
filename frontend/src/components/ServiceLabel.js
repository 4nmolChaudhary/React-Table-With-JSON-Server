import styled from 'styled-components'
import React from 'react'

const CustomLabel = styled.div`
    padding:10px 12px;
    border-radius:4px;
    color:${(props) => props.type ? "#473b8a" : "#2c758a"};
    background:${(props) => props.type ? "#eae6ff" : "#b0ebfb"};
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
`;
const ValueLabel = styled.div`
    display:${(props) => props.type ? 'none' : 'block'};
    padding:10px 12px;
    border-radius:4px;
    color:#f7f7f7;
    background:#424B54;
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
`;

const Div = styled.div`
    display:flex;
    align-items:center;
`;

function ServiceLabel({ type, val }) {
    return (
        <Div>
            <CustomLabel type={type === 'customs' ? true : false}>{type}</CustomLabel>
            {
                val && val.length !== 0 && <ValueLabel type={typeof (val?.length) === undefined ? true : false}>{val}</ValueLabel>
            }
        </Div>
    )
}

export default ServiceLabel
