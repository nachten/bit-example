import React from "react";
import { Example1 } from "@my-scope/core.types/example-1";

export type SpecificComponent1Props = {
  /**
   * a text to be rendered in the component.
   */
  example: Example1;
};

export function SpecificComponent1({ example }: SpecificComponent1Props) {
  return <div>{example.text}</div>;
}
