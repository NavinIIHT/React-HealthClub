import React from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";

const ViewAppointmentView = ({ data, fields }) => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            View Appointment
            {/* <Link to="/help/create">
                        <CButton color="primary" className="px-4" style={{ float: "right" }}>Add Help</CButton>
                    </Link> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable
              id='table'
              items={data}
              fields={fields}
              tableFilter
              sorter
              itemsPerPageSelect={{
                label: "Items per page:",
                values: [10, 20, 30, 40, 50],
              }}
              hover
              striped
              itemsPerPage={10}
              pagination
              scopedSlots={{
                'S.No.': (item, index) => (
                  <td>
                    {
                      index + 1
                    }
                  </td>
                ),
                'Name': (item, index) => (
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                ),
                'email': (item) => (
                  <td>
                    {item.email}
                  </td>
                ),
                'phone': (item) => (
                  <td>
                    {item.mobile}
                  </td>
                ),
                'completeAddress': (item) => (
                  <td>
                    {`${item.streetName}, ${item.city}, ${item.state}, ${item.country}, ${item.pinCode}`}
                  </td>
                ),
              }
              }
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ViewAppointmentView;
