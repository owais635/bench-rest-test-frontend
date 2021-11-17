import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("Header", () => {
  test("should render with a title", () => {
    const component = renderer.create(<Header title="This is a title" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render without a title", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
