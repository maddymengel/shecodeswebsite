const hamburgerButton = document.querySelector(".hamburger-button")
const mobileNav = document.querySelector(".mobile-nav")

hamburgerButton.addEventListener("click", () => {
   mobileNav.classList.toggle("display-none")
})

// const camelCase = 'camelCase'
// const snake_case = 'snake_case'
// const kebab-case = 'kebab-case'
// const PascalCase = 'PascalCase'
// const CONSTANT_CASE = 'CONSTANT_CASE'