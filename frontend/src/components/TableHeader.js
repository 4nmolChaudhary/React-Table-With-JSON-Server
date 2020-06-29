import React, { useState } from 'react'
import './TableHeader.css'
import { connect } from 'react-redux'
import { fetchUrl } from '../redux'

function TableHeader({ fetchUrl }) {

    const headerLabels = ['ID', 'Name', 'Cargo', 'Mode', 'Type', 'Origin', 'Destination', 'Services', 'Total', 'Status', 'UserID']
    const [isAZ, setAZ] = useState(true)

    const sortAccToHeader = headerValue => {
        setAZ(!isAZ)
        let order = (isAZ) ? 'asc' : 'desc'
        fetchUrl(`?_sort=${headerValue.toLowerCase()}&_order=${order}`)

    }
    return (
        <tr className='header_container'>
            {
                headerLabels.map((item, index) => {
                    return (
                        <th key={index} className={item.toLowerCase()}
                            onClick={() => sortAccToHeader(item)}>
                            {item}
                        </th>
                    )
                })
            }
        </tr>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUrl: (state) => dispatch(fetchUrl(state)),
    }
}

export default connect(null, mapDispatchToProps)(TableHeader)
