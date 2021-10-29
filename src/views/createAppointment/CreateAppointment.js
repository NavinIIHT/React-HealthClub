import React from 'react'

import axios from 'axios';
import CreateAppointmentView from './CreateAppointmentView';
import { apiService } from 'src/reusable/Api';

const CreateAppointment = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: '',
        age: "",
        streetName: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',
        trainerPreferences: '',
        physioRequired: '',
        weeks: 1,
        package: '',
        totalAmount: 0
    }

    const onFormSubmit = async (values, { resetForm }) => {
        apiService('POST', '/allfriends', values)
            .then((res) => {
                resetForm()
            })
    }
    return (
        <>
            <CreateAppointmentView
                initialValues={initialValues}
                onFormSubmit={onFormSubmit}
            />
        </>
    )
}


export default CreateAppointment
