// code.js - Figma Plugin Main Thread

figma.showUI(__html__, {
  width: 420,
  height: 640,
  title: "Category Image Uploader",
});

function sendSelectionInfo() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({ type: "selection", data: null });
    return;
  }

  if (selection.length > 1) {
    figma.ui.postMessage({
      type: "selection",
      data: null,
      error: "Faqat bitta node tanlang",
    });
    return;
  }

  const node = selection[0];
  figma.ui.postMessage({
    type: "selection",
    data: { id: node.id, name: node.name, type: node.type },
  });
}

figma.on("selectionchange", () => sendSelectionInfo());
sendSelectionInfo();

figma.ui.onmessage = async (msg) => {
  if (msg.type === "export-image") {
    const selection = figma.currentPage.selection;

    if (selection.length === 0) {
      figma.ui.postMessage({
        type: "export-error",
        error: "Hech narsa tanlanmagan",
      });
      return;
    }

    const node = selection[0];

    try {
      const bytes = await node.exportAsync({
        format: "PNG",
        constraint: { type: "SCALE", value: 2 },
      });
      figma.ui.postMessage({
        type: "export-result",
        bytes: Array.from(bytes),
        name: node.name,
      });
    } catch (e) {
      figma.ui.postMessage({
        type: "export-error",
        error: "Rasmni export qilib bo'lmadi: " + e.message,
      });
    }
  }

  if (msg.type === "close") figma.closePlugin();

  if (msg.type === "notify") {
    figma.notify(msg.message, {
      timeout: msg.timeout || 3000,
      error: msg.error || false,
    });
  }
};
