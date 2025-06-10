export const DIALOG_HTML_CODE = `
<dialog id="myDialog" class="bg-theme-secondary p-6 rounded-lg text-theme-text shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <h2 class="text-2xl font-bold mb-4">Dialog Title</h2>
  <p>This is a native HTML dialog.</p>
  <div class="text-right mt-4">
    <button
      id="closeDialog"
      class="bg-theme-highlight text-theme-primary font-bold py-2 px-4 rounded"
      >Close</button
    >
  </div>
</dialog>
<button
  id="openDialog"
  class="bg-theme-accent text-theme-text font-bold py-2 px-4 rounded"
  >Open Dialog</button
>`;

export const DIALOG_JS_CODE = `const dialog = document.getElementById("myDialog") as HTMLDialogElement;
const openButton = document.getElementById("openDialog") as HTMLButtonElement;
const closeButton = document.getElementById("closeDialog") as HTMLButtonElement;

if (dialog && openButton && closeButton) {
  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", e => {
    const rect = dialog.getBoundingClientRect();
    if (
      e.clientY < rect.top ||
      e.clientY > rect.bottom ||
      e.clientX < rect.left ||
      e.clientX > rect.right
    ) {
      dialog.close();
    }
  });
}`; 