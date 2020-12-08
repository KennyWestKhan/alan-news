import IconifyIcon from "@iconify/vue";

import homeIconData from "@iconify-icons/mdi-light/home";
import formatListBulleted from "@iconify-icons/mdi-light/format-list-bulleted";

// Assign name 'home' to icon
IconifyIcon.addIcon("home", homeIconData);
IconifyIcon.addIcon("bulletList", formatListBulleted);

export default IconifyIcon