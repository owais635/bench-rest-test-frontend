import React from "react";
import renderer from "react-test-renderer";
import Loading from "../Loading";

describe("Loading", () => {
  test("should render", () => {
    const component = renderer.create(<Loading />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
