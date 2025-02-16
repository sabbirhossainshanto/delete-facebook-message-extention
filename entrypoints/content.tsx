import Sidebar from "@/components/Sidebar/Sidebar";
import { createRoot } from "react-dom/client";
import { storage } from "wxt/storage";

export default defineContentScript({
  matches: ["*://*.facebook.com/*"],
  async main() {
    const deleteFacebookMessageSidebarStatus = await storage.getItem(
      "local:delete-facebook-message-sidebar",
      {
        fallback: "close",
      }
    );

    if (deleteFacebookMessageSidebarStatus === "open") {
      injectSidebar();
    }
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
