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
    CInputRadio,
    CLabel,
    CRow,
} from '@coreui/react'

import { Formik, ErrorMessage } from "formik";
import ErrorLable from '../../reusable/ErrorLable';
import createAppointmentValidationSchema from './createAppointmentValidationSchema';

const CreateAppointmentView = ({ onFormSubmit, initialValues }) => {

    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        Place Appointment
                    </CCardHeader>
                    <CCardBody>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onFormSubmit}
                            validationSchema={createAppointmentValidationSchema}
                        >
                            {formik => (
                                <CForm id="form" autoComplete="Off" onSubmit={formik.handleSubmit}>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="firstName">First Name</CLabel>
                                                <CInput id="firstName" placeholder="Enter first name" {...formik.getFieldProps('firstName')} />
                                                <ErrorMessage name="firstName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="lastName">Last Name</CLabel>
                                                <CInput id="lastName" placeholder="Enter last name" name="lastName" {...formik.getFieldProps('lastName')} />
                                                <ErrorMessage name="lastName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="email">Email</CLabel>
                                                <CInput id="email" placeholder="Enter Email" name="email" {...formik.getFieldProps('email')} />
                                                <ErrorMessage name="email" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="mobile">Mobile</CLabel>
                                                <CInput id="mobile" placeholder="Enter Mobile No" name="mobile" {...formik.getFieldProps('mobile')} />
                                                <ErrorMessage name="mobile" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="age">Age</CLabel>
                                                <CInput id="age" placeholder="Enter Age" name="age" {...formik.getFieldProps('age')} />
                                                <ErrorMessage name="age" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="streetName">Street Name</CLabel>
                                                <CInput id="streetName" placeholder="Enter Street Name" name="streetName" {...formik.getFieldProps('streetName')} />
                                                <ErrorMessage name="streetName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="city">City</CLabel>
                                                <CInput id="city" placeholder="Enter city" name="city" {...formik.getFieldProps('city')} />
                                                <ErrorMessage name="city" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="state">State</CLabel>
                                                <CInput id="state" placeholder="Enter State" name="state" {...formik.getFieldProps('state')} />
                                                <ErrorMessage name="state" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="country">Country</CLabel>
                                                <CInput id="country" placeholder="Enter country" name="country" {...formik.getFieldProps('country')} />
                                                <ErrorMessage name="country" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="pinCode">Pin Code</CLabel>
                                                <CInput id="pinCode" placeholder="Enter Pin Code" name="pinCode" {...formik.getFieldProps('pinCode')} />
                                                <ErrorMessage name="pinCode" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="12">
                                            <CFormGroup>
                                                <CLabel htmlFor="trainerPreferences">Trainer Preferences</CLabel>
                                                <CRow>
                                                    <CCol>
                                                        <input
                                                            id='malePreference'
                                                            name="trainerPreferences"
                                                            type="radio"
                                                            value="Male"
                                                            checked={formik.values.trainerPreferences === "Male"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span>Male Trainer</span>
                                                    </CCol>
                                                    <CCol>
                                                        <input
                                                            id='femalePreference'
                                                            type="radio"
                                                            name="trainerPreferences"
                                                            value="Female"
                                                            checked={formik.values.trainerPreferences === "Female"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span>Female Trainer</span>
                                                    </CCol>
                                                    <CCol>
                                                        <input
                                                            id='noPreference'
                                                            type="radio"
                                                            name="trainerPreferences"
                                                            value="No"
                                                            checked={formik.values.trainerPreferences === "No"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span>No Preference</span>
                                                    </CCol>
                                                </CRow>
                                                <ErrorMessage name="trainerPreferences" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="12">
                                            <CFormGroup>
                                                <CLabel htmlFor="physioRequired">Do you need Physiotherapist</CLabel>
                                                <CRow>
                                                    <CCol>
                                                        <input
                                                            id='physioRequired1'
                                                            name="physioRequired"
                                                            type="radio"
                                                            value="Yes"
                                                            checked={formik.values.physioRequired === "Yes"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span> Yes</span>
                                                    </CCol>
                                                    <CCol>
                                                        <input
                                                            id='physioRequired2'
                                                            type="radio"
                                                            name="physioRequired"
                                                            value="No"
                                                            checked={formik.values.physioRequired === "No"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span> No</span>
                                                    </CCol>
                                                </CRow>
                                                <ErrorMessage name="physioRequired" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>

                                    <CFormGroup row className="my-0">
                                        <CCol xs="12">
                                            <CFormGroup>
                                                <CLabel htmlFor="package">Select a package</CLabel>
                                                <CCol>
                                                    <CRow>
                                                        <input
                                                            id='package1'
                                                            name="package"
                                                            type="radio"
                                                            value="One Time appointment"
                                                            checked={formik.values.package === "One Time appointment"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span> One Time appointment(Rs. 500/-)</span>
                                                    </CRow>
                                                    <CRow>
                                                        <input
                                                            id='package2'
                                                            type="radio"
                                                            name="package"
                                                            value="4 Sessions per week"
                                                            checked={formik.values.package === "4 Sessions per week"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span> 4 Sessions per week (Rs. 400/-per session)</span>
                                                    </CRow>
                                                    <CRow>
                                                        <input
                                                            id='package3'
                                                            type="radio"
                                                            name="package"
                                                            value="5 Sessions per week"
                                                            checked={formik.values.package === "5 Sessions per week"}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <span> 5 Sessions per week (Rs. 300/-per session)</span>
                                                    </CRow>
                                                </CCol>
                                                <ErrorMessage name="package" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>

                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="weeks">Weeks</CLabel>
                                                <CInput
                                                    disabled={(formik.values.package === "5 Sessions per week" || formik.values.package === "4 Sessions per week")}
                                                    id="weeks"
                                                    placeholder="Enter Weeks"
                                                    name="weeks"
                                                    {...formik.getFieldProps('weeks')}
                                                />
                                                <ErrorMessage name="weeks" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="totalAmount">Amount(Rs.)</CLabel>
                                                <CInput
                                                    disabled
                                                    id="totalAmount"
                                                    placeholder="Total Amount"
                                                    value={
                                                        formik.values.totalAmount =
                                                        formik.values.package === "One Time appointment" ? 500 :
                                                            formik.values.package === "4 Sessions per week" ? (parseInt(formik.values.weeks) * 4 * 400) :
                                                                formik.values.package === "5 Sessions per week" ? (parseInt(formik.values.weeks) * 5 * 300) :
                                                                    0

                                                    }
                                                    name="totalAmount"
                                                /* {...formik.getFieldProps('totalAmount')} */
                                                />
                                                <ErrorMessage name="totalAmount" render={msg => <ErrorLable msg={msg} />} />
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

export default CreateAppointmentView
