import portfolioPreviews from '../data/portfolio-previews.json'

export const PortfolioGenerate = {
  init() {
    const sortedPreviews = [...portfolioPreviews.previews].sort((a, b) => new Date(b.hiddenDate) - new Date(a.hiddenDate))
    sortedPreviews.forEach((preview) => {
      const square = PortfolioGenerate.generatePortfolioSquares(preview)
      document.querySelector('.portfolio-content-container').appendChild(square)
    })
  },
  generatePortfolioSquares(preview) {
    const portfolioSquare = document.createElement('div')
    portfolioSquare.className = 'portfolio-square cantap'
    portfolioSquare.onclick = () => {
      window.location.href = `project.html?projectId=${encodeURIComponent(preview.id)}`
    }

    const img = document.createElement('img')
    img.className = 'portfolio-square-image'
    img.src = require(`../assets/images/previews/preview-${preview.id}.png`) // use preview.id
    img.alt = preview.title
    portfolioSquare.appendChild(img)

    const title = document.createElement('h2')
    title.textContent = preview.title
    title.className = 'portfolio-square-title'
    portfolioSquare.appendChild(title)

    const description = document.createElement('p')
    description.className = 'portfolio-square-description'
    description.textContent = preview.description
    portfolioSquare.appendChild(description)

    const footer = document.createElement('div')
    footer.className = 'portfolio-square-footer'

    const type = document.createElement('p')
    type.className = 'portfolio-square-type'
    type.textContent = preview.type
    footer.appendChild(type)

    const date = document.createElement('p')
    date.className = 'portfolio-square-date'
    date.textContent = preview.date
    footer.appendChild(date)

    portfolioSquare.appendChild(footer)

    return portfolioSquare
  },
}
