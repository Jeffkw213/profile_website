import React from "react";
import renderer from "react-test-renderer";
import Nav from "./Nav";
import rec from "../records.json";

function toJson(component) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result;
}

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Nav {...rec.Social} />);

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
