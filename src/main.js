import { createApp } from "vue";
import App from "./App.vue";

import "./assets/style.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faSquareFull,
  faMoneyBill,
  faThLarge,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

library.add([
  faSquareFull,
  faCircle,
  faMoneyBill,
  faThLarge,
  faUniversity,
  faGithub,
  faLinkedin,
  faInstagram,
  faGoogle,
]);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
