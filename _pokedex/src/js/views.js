class GlobalFunctions {
  constructor() {
    this.theme = this.get_local_storage();
  }
  set_local_storage( theme ) {
    localStorage.setItem('theme', theme);
    this.theme = theme;
  }
  get_local_storage() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      return theme;
    } else {
      return 'dark-theme';
    }
  }
}

export default GlobalFunctions;