import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { setConsoleOptions } from "@storybook/addon-console";

import React from "react";
import Component from "./index.js";

setConsoleOptions({
  panelExclude: [/[HMR]/]
});

const Info = {
  componentSection: "Components",
  title: "NewItem",
  about:
    "allow the user to create a username, if the field is empty make a random name",
  newUserProps: {
    newMessage: false,
    message: "message passed",
    handleClick: action("[NewItem] - handleClick")
  },
  newMessageProps: {
    newMessage: true,
    message: "message passed",
    handleClick: action("[NewItem] - handleClick")
  }
};

storiesOf(Info.componentSection, module)
  .addDecorator(withKnobs)
  .add(
    Info.title,
    withInfo(Info.about)(() => (
      <div>
        <Component {...Info.newUserProps} />
        <div style={{ height: "20px" }} />
        <Component {...Info.newMessageProps} />
      </div>
    ))
  );
