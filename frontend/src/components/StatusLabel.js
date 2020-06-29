import styled from 'styled-components'
import React from 'react'

const Label = styled.div`
    padding:10px 15px;
    border-radius:4px;
    color:${(props) => handleColorType(props.status)};
    background:${(props) => handleBgColorType(props.status)};
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
    text-align:center;
`;

const handleBgColorType = status => {
    switch (status) {
        case 'COMPLETED': return '#abf5d2';
        case 'NEW': return '#289dfb';
        case 'ACTIVE': return '#fdf2b4';
        default: return
    }
};

const handleColorType = status => {
    switch (status) {
        case 'COMPLETED': return '#0c6f4d';
        case 'NEW': return '#004379';
        case 'ACTIVE': return '#ff9007';
        default: return
    }
};

function StatusLabel({ status }) {
    return (
        <Label status={status}>{status}</Label>
    )
}

export default StatusLabel
