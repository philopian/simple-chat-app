import { configure } from '@storybook/react';

function loadStories() {
  require("babel-polyfill");
  require("font-awesome/css/font-awesome.min.css");
  require('../www/sass/global.scss');
  require("../www/react/components/DesktopChatButton/storybook");
  require("../www/react/components/Header/storybook");
  require("../www/react/components/NewItem/storybook");
  require("../www/react/components/Message/storybook");
  require("../www/react/components/UserList/storybook");
} // DONT'T DELETE THIS

configure(loadStories, module);