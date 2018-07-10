import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import "raf/polyfill";
import Adapter from "enzyme-adapter-react-16";
import Component from "./index.js";

Enzyme.configure({ adapter: new Adapter() });

describe("OthersMessage (Snapshot)", () => {
  it("OthersMessage renders without crashing", () => {
    const component = renderer.create(<Component />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

it("Make sure the 'username' props are being passing thru to the component", () => {
  // Render the component
  const SOME_PROP = "some username prop";
  const component = shallow(<Component username={SOME_PROP} />);

  // Make sure that the props.username is being printed
  expect(component.find(".username").text()).toEqual(SOME_PROP);
});

it("Make sure the 'message' props are being passing thru to the component", () => {
  // Render the component
  const SOME_PROP = "some message prop";
  const component = shallow(<Component message={SOME_PROP} />);

  // Make sure that the props.message is being printed
  expect(component.find(".message").text()).toEqual(SOME_PROP);
});

it("Make sure the 'timestamp' props are being passing thru to the component", () => {
  // Render the component
  const SOME_PROP = "some timestamp prop";
  const component = shallow(<Component timestamp={SOME_PROP} />);

  // Make sure that the props.timestamp is being printed
  expect(component.find(".timestamp").text()).toEqual(SOME_PROP);
});

it("Make sure that all props are being passing thru to the component", () => {
  // Render the component
  const SOME_PROP = {
    username: "some username",
    message: "some message",
    timestamp: "some timestamp"
  };
  const component = shallow(<Component {...SOME_PROP} />);

  // Make sure that the props.timestamp is being printed
  expect(component.find(".timestamp").text()).toEqual(SOME_PROP.timestamp);
  expect(component.find(".message").text()).toEqual(SOME_PROP.message);
  expect(component.find(".timestamp").text()).toEqual(SOME_PROP.timestamp);
});
