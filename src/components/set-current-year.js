export const SetCurrentYear = {
  init() {
    document.querySelector('.footer-current-year').innerHTML = new Date().getFullYear()
  },
}
