import React from "react";
import { Example2 } from "@my-scope/core.types/example-2";

export type SpecificComponent2Props = {
  /**
   * a text to be rendered in the component.
   */
  example: Example2;
};

export function SpecificComponent2({ example }: SpecificComponent2Props) {
  return <div>{example.text}</div>;
}
