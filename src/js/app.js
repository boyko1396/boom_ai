/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import ChatToggleMenu from './modules/ChatToggleMenu.js';
import PopupManager from './modules/PopupManager.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import ResponsiveSliders from './modules/SwiperInit.js';
import { InitializePhoneInputs } from './modules/InputMaskTel.js';
import FaqCard from './modules/FaqCard.js';
import TabsChat from './modules/TabsChat.js';
import TabsChatSub from './modules/TabsChatSub.js';
import { ChatHint } from './modules/ChatHint.js';
import { ChatHintButton } from './modules/ChatHintButton.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();
  // chat menu mobile
  new ChatToggleMenu();
  // modal init
  new PopupManager();
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);
  // slider init
  new ResponsiveSliders();
  // faq card
  new FaqCard();
  // input mask tel
  InitializePhoneInputs('.js-input-tel');
  // chat tabs
  new TabsChat('.js-chat-tab-nav', '.js-chat-tab-content', '.js-chat-subnav');
  new TabsChatSub('.js-chat-tabsub-nav', '.js-chat-tabsub-content');
  // chat hint
  new ChatHint('.js-chat-hint-wrapper', '.js-chat-hint', '.js-chat-hint-dropdown');
  new ChatHintButton('.js-chat-hint-btn', '.js-chat-textarea');
});