export class ChatHintButton {
  constructor(buttonSelector, textareaSelector) {
    this.hintButtons = document.querySelectorAll(buttonSelector);
    this.textarea = document.querySelector(textareaSelector);
    if (this.hintButtons.length > 0 && this.textarea) {
      this.init();
    }
  }

  init() {
    this.hintButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.insertHint(button);
      });
    });
  }

  insertHint(button) {
    const newValue = button.getAttribute('data-chat-hint');
    if (this.textarea) {
      this.textarea.value = newValue;
    }
  }
}