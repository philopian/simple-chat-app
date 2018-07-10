import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import "raf/polyfill";
import Adapter from "enzyme-adapter-react-16";
import Component from "./index.js";

Enzyme.configure({ adapter: new Adapter() });

describe("Header (Snapshot)", () => {
  it("Header renders without crashing", () => {
    const component = renderer.create(<Component />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe("Header Component - ", () => {
  it("Make sure the props are being passing thru to the component", () => {
    // Render the component
    const component = shallow(<Component title="some title here!" />);

    // Make sure that the props.message is being printed
    expect(component.find("p").text()).toEqual("some title here!");
  });
});
