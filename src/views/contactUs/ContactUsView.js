import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CTextarea,
} from '@coreui/react'

import { Formik, ErrorMessage } from "formik";
import ErrorLable from '../../reusable/ErrorLable';
import contactUsValidationSchema from './contactUsValidationSchema';
const ContactUsView = ({ onFormSubmit, initialValues }) => {
    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        Contact Us
                    </CCardHeader>
                    <CCardBody>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onFormSubmit}
                            validationSchema={contactUsValidationSchema}
                        >
                            {formik => (
                                <CForm id="form" onSubmit={formik.handleSubmit}>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="firstName">First Name</CLabel>
                                                <CInput autoComplete="nope" id="firstName" placeholder="Enter first name" {...formik.getFieldProps('firstName')} />
                                                <ErrorMessage name="firstName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="lastName">Last Name</CLabel>
                                                <CInput autoComplete="nope" id="lastName" placeholder="Enter last name" name="lastName" {...formik.getFieldProps('lastName')} />
                                                <ErrorMessage name="lastName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="email">Email</CLabel>
                                                <CInput autoComplete="nope" id="email" placeholder="Enter email" name="email" {...formik.getFieldProps('email')} />
                                                <ErrorMessage name="email" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="mobile">Mobile</CLabel>
                                                <CInput autoComplete="nope" id="mobile" placeholder="Enter Mobile No" name="mobile" {...formik.getFieldProps('mobile')} />
                                                <ErrorMessage name="mobile" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="message">Message</CLabel>
                                                <CTextarea id="message" placeholder="Enter Message" name="message" {...formik.getFieldProps('message')} />
                                                <ErrorMessage name="message" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>

                                    <CButton id="button" type="submit" color="primary">Submit</CButton>
                                </CForm>
                            )}
                        </Formik>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow >
    )
}

export default ContactUsView
