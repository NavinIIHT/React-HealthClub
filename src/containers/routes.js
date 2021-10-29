import React from 'react';

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const CreateAppointment = React.lazy(() => import('../views/createAppointment/CreateAppointment'));
const ViewAppointment = React.lazy(() => import('../views/viewAppointment/ViewAppointment'));
const ContactUs = React.lazy(() => import('../views/contactUs/ContactUs'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/create-appointment', name: 'Place Appointment', component: CreateAppointment },
  { path: '/view-appointment', name: 'View Appointment', component: ViewAppointment },
  { path: '/contact-us', name: 'Contact Us', component: ContactUs },
];

export default routes;
