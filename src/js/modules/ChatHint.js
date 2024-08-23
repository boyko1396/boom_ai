export class ChatHint {
  constructor(hintWrapperSelector, hintButtonSelector, dropdownSelector) {
    this.hintWrapper = document.querySelector(hintWrapperSelector);
    this.hintButtons = document.querySelectorAll(hintButtonSelector);
    this.dropdowns = document.querySelectorAll(dropdownSelector);
    this.activeDropdownIndex = -1;
    if (this.hintWrapper && this.hintButtons.length > 0 && this.dropdowns.length > 0) {
      this.init();
    }
  }

  init() {
    this.hintButtons.forEach((hintButton, index) => {
      hintButton.addEventListener('mouseenter', () => {
        this.activateHint(index);
      });

      hintButton.addEventListener('mouseleave', () => {
        setTimeout(() => {
          this.deactivateHint(index);
        }, 100);
      });
    });

    this.dropdowns.forEach((dropdown, index) => {
      dropdown.addEventListener('mouseenter', () => {
        this.keepDropdownOpen(index);
      });

      dropdown.addEventListener('mouseleave', () => {
        this.closeDropdown();
      });
    });

    if (this.hintWrapper) {
      this.hintWrapper.addEventListener('mouseleave', () => {
        this.closeAllHints();
      });
    }
  }

  activateHint(index) {
    this.hintButtons.forEach(btn => btn.classList.remove('is-active'));
    this.dropdowns.forEach(dropdown => dropdown.classList.remove('is-show'));

    if (this.dropdowns[index]) {
      this.dropdowns[index].classList.add('is-show');
      this.hintButtons[index].classList.add('is-active');
      this.activeDropdownIndex = index;
    }
  }

  deactivateHint(index) {
    if (this.activeDropdownIndex !== index) {
      this.hintButtons[index].classList.remove('is-active');
      if (this.dropdowns[index]) {
        this.dropdowns[index].classList.remove('is-show');
      }
    }
  }

  keepDropdownOpen(index) {
    this.activeDropdownIndex = index;
    this.dropdowns[index].classList.add('is-show');
  }

  closeDropdown() {
    if (this.activeDropdownIndex !== -1) {
      this.dropdowns[this.activeDropdownIndex].classList.remove('is-show');
      this.activeDropdownIndex = -1;
    }
  }

  closeAllHints() {
    this.hintButtons.forEach(btn => btn.classList.remove('is-active'));
    this.dropdowns.forEach(dropdown => dropdown.classList.remove('is-show'));
    this.activeDropdownIndex = -1;
  }
}