import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './DataRow.css'
import TableHeader from './TableHeader'
import Locations from './Locations';
import CargoCard from './CargoCard';
import ServiceLabel from './ServiceLabel';
import StatusLabel from './StatusLabel';
import { connect } from 'react-redux'

function TableData({ url }) {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}`);
            setData(response.data);
        }

        fetchData();
        return () => console.log('Clean Up')
    }, [url])

    return (
        <div className='data_table'>
            <table className='table'>
                <tbody>
                    <TableHeader />
                    {
                        data.map((item, index) => {
                            return (
                                <tr className='data_row' key={item.id}>
                                    <td className='id'>{item.id}</td>
                                    <td className='name'>{item.name}</td>
                                    <td className='cargo'>
                                        {
                                            item.cargo.map((cargoItem, ind) => {
                                                return (
                                                    <CargoCard
                                                        key={ind}
                                                        type={cargoItem.type}
                                                        desc={cargoItem.description}
                                                        vol={cargoItem.volume}
                                                    >
                                                    </CargoCard>
                                                )
                                            })
                                        }
                                    </td>
                                    <td className='mode'>{item.mode}</td>
                                    <td className='type'>{item.type}</td>
                                    <td className='ori_des' colSpan={2}>
                                        <Locations
                                            origin={item.origin}
                                            destination={item.destination}
                                        />
                                    </td>
                                    <td className='services'>
                                        {
                                            item.services.map((service, ind) => {
                                                return (
                                                    <ServiceLabel
                                                        key={ind}
                                                        type={service.type}
                                                        val={service.value}
                                                    />
                                                )
                                            })
                                        }
                                    </td>
                                    <td className='total'>{item.total}</td>
                                    <td className='status'>
                                        <StatusLabel status={item.status} />
                                    </td>
                                    <td className='userid'>{item.userId}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        url: state.url.url
    }
}

export default connect(mapStateToProps, null)(TableData)
