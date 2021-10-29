import React from 'react'
import axios from 'axios';
import ContactUsView from './ContactUsView';
import { apiService } from 'src/reusable/Api';

const ContactUs = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: '',
        message: '',
    }


    const onFormSubmit = async (values, { resetForm }) => {
        apiService('POST', '/contactUs', values)
            .then((res) => {
                console.log("Result===", res)
                resetForm()
            })
    }
    return (
        <>
            <ContactUsView initialValues={initialValues} onFormSubmit={onFormSubmit} />
        </>
    )
}

export default ContactUs
