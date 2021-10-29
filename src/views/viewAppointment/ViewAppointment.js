import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ViewAppointmentView from './ViewAppointmentView';
import { apiService } from 'src/reusable/Api';


const ViewAppointment = () => {

    const [data, setData] = useState([])
    const fields1 = ['firstName', 'lastName', 'email', 'mobile', 'age', 'streetName', 'city', 'state', 'country', 'pinCode', 'preferences', 'package', 'action(s)']
    const fields = ['S.No.', 'Name', 'email', 'phone', 'age', 'completeAddress', 'trainerPreferences', 'physioRequired', 'package', 'totalAmount']
    useEffect(() => {
        const fetchData = () => {
            apiService('GET', '/allfriends', null)
                .then((res) => {
                    console.log("Result===", res)
                    setData(res.data)
                })
        }
        fetchData()
    }, [])

    return (
        <ViewAppointmentView data={data} fields={fields} />
    )
}

export default ViewAppointment
