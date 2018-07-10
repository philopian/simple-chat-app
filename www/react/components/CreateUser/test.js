import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import "raf/polyfill";
import Adapter from "enzyme-adapter-react-16";
import Component from "./index.js";

Enzyme.configure({ adapter: new Adapter() });

describe("CreateUser (Snapshot)", () => {
  it("CreateUser renders without crashing", () => {
    const component = renderer.create(<Component />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe("CreateUser Component - ", () => {
  it("Property method gets called", () => {
    const spy = jest.fn();
    // Render the component
    const component = shallow(<Component handleClick={spy} />);

    // Button click should change the click-message
    component.find(".create-user-button").simulate("click");
    component.find(".create-user-button").simulate("click");

    expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls.length).toEqual(2);
  });

  it("changing the input value should change the this.state.input value", () => {
    const component = shallow(<Component />);
    const _this = component.instance();
    // console.log(_this);
    const INPUT_VALUE = "My new value";
    component
      .find("input")
      .simulate("change", { target: { value: INPUT_VALUE } });
    expect(_this.state).toEqual({
      input: INPUT_VALUE
    });
  });

  it("changing the input value and simulating a click should return the this.state.input value", () => {
    let RESULT = "";
    const mockClickEvent = e => {
      RESULT = e;
    };
    const component = shallow(<Component handleClick={mockClickEvent} />);

    // Update the input value
    const INPUT_VALUE = "Button Clicked!";
    component
      .find("input")
      .simulate("change", { target: { value: INPUT_VALUE } });

    // Simulate click
    component.find(".create-user-button").simulate("click");
    expect(INPUT_VALUE).toEqual(RESULT);
  });
});
