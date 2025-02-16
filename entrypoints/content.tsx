import { createRoot } from "react-dom/client";
import Sidebar from "@/components/Sidebar/Sidebar";

export default defineContentScript({
  matches: ["*://*.facebook.com/*"],
  async main() {
    chrome.runtime.onMessage.addListener(function (request) {
      if (request.message === "showSidebar") injectSidebar();
    });
  },
});

function injectSidebar() {
  if (document.getElementById("fb-sidebar-container")) return;

  const sidebarContainer = document.createElement("div");
  sidebarContainer.id = "fb-sidebar-container";
  document.body.appendChild(sidebarContainer);

  const root = createRoot(sidebarContainer);
  root.render(<Sidebar />);
}
