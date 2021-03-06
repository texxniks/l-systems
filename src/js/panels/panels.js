import dom from "../dom.js";
import channel from "../channel.js";
import "./collections.js";
import "./settings.js";
import "./appearance.js";
import "./exporting.js";

let openedPanel = [...dom.ui.get(".panels").values()]
    .find(el => el.classList.contains("ls-panel-open"));

let panels = {
    show(panelId, allowToggle = false) {
        let panel = dom.ui.get(".panels").get(panelId);
        if (!panel) {
            return;
        }
        if (panel !== openedPanel) {
            if (openedPanel) {
                openedPanel.classList.remove("ls-panel-open");
            }
            panel.classList.add("ls-panel-open");
            openedPanel = panel;
        } else if (allowToggle) {
            this.hide();
        }
    },

    hide() {
        if (openedPanel) {
            openedPanel.classList.remove("ls-panel-open");
            openedPanel = null;
        }
    }
};

dom.ui.get("tabs").addEventListener("click", e => {
    let ref = e.target.dataset.lsRef;
    if (ref) {
        panels.show(ref, true);
    }
});

channel.subscribe("LSystemConfigured", () => {
    panels.show("settings");
});

export default panels;
