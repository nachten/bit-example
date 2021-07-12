import React from "react";
import { SpecificComponent1 } from "./components/specific-component-1";
import { SpecificComponent2 } from "./components/specific-component-2";

export type MyComponentProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function MyComponent({ text }: MyComponentProps) {
  return (
    <div>
      {text}
      <SpecificComponent1 example={{ text: "specific component 1" }} />
      <SpecificComponent2 example={{ text: "specific component 2" }} />
    </div>
  );
}
