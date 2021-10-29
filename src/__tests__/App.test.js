import React from 'react'
import { shallow } from 'enzyme/build'
import App from '../App'
import Dashboard from '../views/dashboard/Dashboard';
import ContactUs from '../views/contactUs/ContactUs';
import CreateAppointment from '../views/createAppointment/CreateAppointment';
import ViewAppointment from '../views/viewAppointment/ViewAppointment';

let testName = "AppTest boundary"

describe("boundary", () => {
  it(`${testName} should mount App without crashing`, () => {
    const wrapper = shallow(<App />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })

  it(`${testName} should mount Dashboard without crashing`, () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })

  it(`${testName} should mount ContactUs without crashing`, () => {
    const wrapper = shallow(<ContactUs />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })

  it(`${testName} should mount CreateAppointment without crashing`, () => {
    const wrapper = shallow(<CreateAppointment />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })

  it(`${testName} should mount ViewAppointment without crashing`, () => {
    const wrapper = shallow(<ViewAppointment />)
    expect(wrapper.getElements()).toMatchSnapshot();
    wrapper.unmount()
  })
})