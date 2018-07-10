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
  title: "Message",
  about: "this is a component for other people's messages",
  userProps: {
    usersMessage: true,
    username: "Some User",
    message: "hello from me!",
    timestamp: "10:50pm"
  },
  otherUserProps: {
    usersMessage: false,
    username: "Some User",
    message: "this is a message passed from another user!",
    timestamp: "10:10pm"
  }
};

storiesOf(Info.componentSection, module)
  .addDecorator(withKnobs)
  .add(
    Info.title,
    withInfo(Info.about)(() => (
      <div>
        <Component {...Info.otherUserProps} />
        <div style={{ height: "20px" }} />
        <Component {...Info.userProps} />
      </div>
    ))
  );
