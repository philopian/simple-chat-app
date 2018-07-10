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
  title: "OthersMessage",
  about: "this is a component for other people's messages",
  props: {
    username: "Some User",
    message: "message passed",
    timestamp: "10:10pm"
  }
};

storiesOf(Info.componentSection, module)
  .addDecorator(withKnobs)
  .add(Info.title, withInfo(Info.about)(() => <Component {...Info.props} />));
