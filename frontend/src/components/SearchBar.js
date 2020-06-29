import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchUrl } from '../redux'

const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    grid-column:1/12;
    grid-row:2/3;
    padding:8px 12px;
    margin:10px 3px;
    box-sizing:border-box;
    box-shadow:4px 2px 20px 4px rgba(0, 0, 0, 0.05);
    border-radius:8px;
    background:#fff;
`;

const Input = styled.input`
    padding:0 10px;
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
    color:#455971;
    width:95%;
    font-size:14px;
    border:none;
    outline:none;
`;

const SearchButton = styled.button`
    padding:8px 12px;
    border-radius:4px;
    background:#FF256F;
    outline:none;
    border:none;
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
    color:#fff;
        &:hover {
            cursor: pointer;
        }
`;

function SearchBar({ fetchUrl }) {

    const [state, setstate] = useState('')

    const setInput = (text) => {
        setstate(text)
        fetchUrl(`?q=${text}`)
    }

    return (
        <Div>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                <path fill="#c5c3c3" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
            <Input placeholder="Search..............." value={state} onChange={(e) => setInput(e.target.value)} />
            <SearchButton>Search</SearchButton>
        </Div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUrl: (state) => dispatch(fetchUrl(state)),
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)
