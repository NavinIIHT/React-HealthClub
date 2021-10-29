import React from "react";
import { CButton, CCard, CCardBody, CCol, CRow } from "@coreui/react";

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non scelerisque risus. Curabitur euismod, enim non convallis
              auctor, sem nisi cursus sem, et fermentum mi ex iaculis nunc.
              Integer et libero orci. Nam vehicula, elit non tempus porta, neque
              erat semper sapien, at maximus risus tortor ac metus. In ac metus
              lectus. Vestibulum tincidunt vitae justo a porttitor. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Morbi dapibus urna tortor, eu elementum metus
              luctus et. Phasellus varius gravida tempus. Etiam vulputate
              iaculis ultricies. Aliquam turpis erat, mollis nec diam ac, ornare
              euismod nunc. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Phasellus quis malesuada arcu, nec viverra lorem.
              Maecenas eleifend, neque ut ultricies pellentesque, risus diam
              ultrices neque, ac dapibus lorem felis ut nulla. Nulla facilisi.
              Mauris at placerat purus. Donec a magna rhoncus, vehicula dui
              eget, accumsan est. Donec lacus ante, pharetra eu rhoncus non,
              auctor id turpis. Morbi tincidunt sed urna quis tempus. Nam
              feugiat fermentum congue. Nullam augue ligula, bibendum at arcu a,
              tristique gravida dui. Nulla erat nibh, tincidunt eu magna ac,
              dictum efficitur sem. Suspendisse eros erat, vehicula non finibus
              nec, tincidunt eget neque.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody style={{ margin: "auto" }}>
              <CButton
                style={{ width: 600, height: 100, fontSize: 50 }}
                variant="outline"
                shape="pill"
                type="submit"
                color="danger"
              >
                Apply for Trainer
              </CButton>{" "}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
