import React from "react";
import Dashboard from "../views/dashboard/Dashboard";
import { render } from "@testing-library/react";

let testName = "LandingPage boundary"

describe("boundary", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Dashboard />);
  });
  it(`${testName} should render Landing page`, () => {
    expect(wrapper).toBeTruthy();
  });

  it(`${testName} should have a greeting as the title`, () => {
    expect(wrapper.getByText("Apply for Trainer")).toBeTruthy();
  });
});
