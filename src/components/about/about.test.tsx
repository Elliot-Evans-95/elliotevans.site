import * as React from "react";
import styled from '@emotion/styled';
import * as renderer from "react-test-renderer";

const Button = styled.div`
  color: hotpink;
`;

test("Button renders correctly", () => {
  expect(
    renderer.create(<Button>This is hotpink.</Button>).toJSON()
  ).toMatchSnapshot()
});
