import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'View Appointments',
    to: '/view-appointment',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Place Appointment',
    to: '/create-appointment',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contact Us',
    to: '/contact-us',
    icon: <CIcon name="cil-contact" customClasses="c-sidebar-nav-icon" />,
  },

]

export default _nav
