import React from "react";
import renderer from "react-test-renderer";
import Error from "../Error";

describe("Error", () => {
  test("should render", () => {
    const component = renderer.create(<Error />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
