import React from 'react'
import styled from 'styled-components'

const LocationDiv = styled.div`
    padding:18px 32px;
    display:grid;
    grid-template-columns: max-content auto;
    grid-template-rows:max-content auto max-content;
    gap:5px;
`;

const Icon = styled.div`
    width:18px;
    height:18px;
    grid-column:${(props) => (props.gridColumn)};
    grid-row:${(props) => (props.gridRow)};
`;

const PathLine = styled.hr`
    width:1px;
    height:18px;
    background:#455971;
    grid-column:${(props) => (props.gridColumn)};
    grid-row:${(props) => (props.gridRow)};
    padding :0;
    margin:0 auto;
`;

const Text = styled.div`
    font-family: 'GoogleSans-Regular';
    color:#455971;
    font-weight: 800;
    grid-column:${(props) => (props.gridColumn)};
    grid-row:${(props) => (props.gridRow)};
`;

function Locations({ origin, destination }) {
    return (
        <LocationDiv>
            <Icon gridColumn="1/2" gridRow="3/4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22.498 31.701">
                    <g id="path" transform="translate(-171 -116)">
                        <g id="Group_3" data-name="Group 3" transform="translate(171 116)">
                            <path id="Path_3" data-name="Path 3" d="M11.249,216A11.256,11.256,0,0,0,0,227.249c0,5.921,10,19.471,10.431,20.043a1.022,1.022,0,0,0,1.636,0C12.5,246.72,22.5,233.17,22.5,227.249A11.256,11.256,0,0,0,11.249,216Zm0,2.045a9.218,9.218,0,0,1,9.2,9.2c0,3.978-6.033,13.243-9.2,17.691-3.17-4.448-9.2-13.713-9.2-17.691A9.218,9.218,0,0,1,11.249,218.045Zm0,0" transform="translate(0 -216)" fill="#455971" />
                            <path id="Path_4" data-name="Path 4" d="M46.136,256a6.136,6.136,0,1,0,6.136,6.136A6.136,6.136,0,0,0,46.136,256Zm0,10.226a4.09,4.09,0,1,1,4.09-4.09A4.091,4.091,0,0,1,46.136,266.226Zm0,0" transform="translate(-34.887 -250.887)" fill="#455971" />
                        </g>
                    </g>
                </svg>
            </Icon>
            <Icon gridColumn="1/2" gridRow="1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28.629 28.629">
                    <g id="send" transform="translate(0 -0.001)">
                        <g id="Group_4" data-name="Group 4" transform="translate(0 0.001)">
                            <path id="Path_5" data-name="Path 5" d="M28.384.247a.839.839,0,0,0-.9-.186L.528,10.841a.839.839,0,0,0-.055,1.533L11.1,17.529l5.154,10.628a.839.839,0,0,0,.754.473h.03a.839.839,0,0,0,.749-.527L28.569,1.151A.839.839,0,0,0,28.384.247ZM2.913,11.694,24.308,3.136l-12.75,12.75ZM16.936,25.717l-4.192-8.644,12.75-12.75Z" transform="translate(0 -0.001)" fill="#455971" />
                        </g>
                    </g>
                </svg>
            </Icon>
            <PathLine gridColumn="1/2" gridRow="2/3"></PathLine>
            <Text gridColumn="2/3" gridRow="1/2">{origin}</Text>
            <Text gridColumn="2/3" gridRow="3/4">{destination}</Text>
        </LocationDiv>
    )
}

export default Locations
