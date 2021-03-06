import "./config";

import App from "./widgets/app";

/**
 * Initialize application
 */
export const app = new App({
  appName: "Template App",
  container: document.getElementById("app") as HTMLElement
});
