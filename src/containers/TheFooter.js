import React from 'react';
import { CCard, CCardBody, CCardFooter, CCol, CFooter, CLink, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';

const TheFooter = () => {
    return (
        <>
            <CCard>
                <CCardBody>
                    <CRow>
                        <CCol className="border-right" xs="4">
                            <CRow content='center' className="border-bottom" ><b>Fitness Tracker</b></CRow>
                        </CCol>
                        <CCol xs="8">
                            <CRow>
                                <CCol className="border-right" xs="6">
                                    <CRow className="mfs-auto" className="border-bottom" ><b>Useful Links</b></CRow>
                                    <CRow className="px-4" style={{ float: "right" }}>
                                        <CCol>
                                            <CRow>
                                                <CLink to="/dashboard">Home</CLink>
                                            </CRow>
                                            <CRow>
                                                <CLink to="/view-appointment">View Appointments</CLink>
                                            </CRow>
                                            <CRow>
                                                <CLink to="/create-appointment">Place Appointments</CLink>
                                            </CRow>
                                            <CRow>
                                                <CLink to="/contact-us">Contact Us</CLink>
                                            </CRow>
                                        </CCol>
                                    </CRow>
                                </CCol>
                                <CCol className="border-right" xs="6">
                                    <CRow className="mfs-auto" className="border-bottom"><b>Contact</b></CRow>
                                    <CRow className="px-4" style={{ float: "right" }}>
                                        <CCol>
                                            <CRow>
                                                Company address
                                            </CRow>
                                            <CRow>
                                                Company email
                                            </CRow>
                                            <CRow>
                                                Company phone
                                            </CRow>
                                            <CRow>
                                                Company fax
                                            </CRow>
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                </CCardBody>
                <CCardFooter className='m-auto'>
                    <div className="mfs-auto">
                        <span className="ml-1">&copy; 2021 Copyright </span>
                        <a href="/" rel="noopener noreferrer">
                            <b>Fitness Tracker</b>
                        </a>
                    </div>
                </CCardFooter>
            </CCard>
        </>

    );
};

export default React.memo(TheFooter);
