import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchUrl } from '../redux'

const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    grid-column:1/12;
    grid-row:4/5;
    padding:8px 12px;
    color:#455971;
`;

const TabButton = styled.button`
    padding:8px 12px;
    border-radius:4px;
    background:transparent;
    background:none;
    outline:none;
    border:none;
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
    color:#455971;
        &:hover {
            cursor: pointer;
        }
        &:focus {
            background:#FF256F;
            color:#fff;
        }
`;

function BottomBar({ fetchUrl }) {

    const rowCounts = [2, 4, 6, 8, 10, 12, 24]
    const [rowCnt, setRowCnt] = useState(24)
    const [pageCnt, setPageCnt] = useState(1)
    const [pageNo, setPageNo] = useState(1)

    function setPageNoAndUpdate(n) {
        setPageNo(n)
        fetchUrl(`?_limit=${rowCnt}&_page=${pageNo}`)
    }

    function setRowCntAndUpdate(n) {
        setRowCnt(n)
        setPageCnt(24 / n)
        console.log('call =')
        fetchUrl(`?_limit=${rowCnt}&_page=${pageNo}`)
    }

    const pageNumbers = []
    for (let index = 1; index <= pageCnt; index++) {
        pageNumbers.push(
            <TabButton key={index} onClick={() => setPageNoAndUpdate(index)}>{index}</TabButton>
        )
    }

    return (
        <Div>
            <div>
                Rows per page :
                {
                    rowCounts.map((rowCount, index) => {
                        return (
                            <TabButton key={index} onClick={() => setRowCntAndUpdate(rowCount)}>{rowCount}</TabButton>
                        )
                    })
                } | {rowCnt}
            </div>
            <div>
                Pages :
                {pageNumbers}
                | {pageCnt}

            </div>
        </Div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUrl: (state) => dispatch(fetchUrl(state)),
    }
}

export default connect(null, mapDispatchToProps)(BottomBar)
