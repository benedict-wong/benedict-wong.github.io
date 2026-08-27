import skillCategories from '../data/skills.json'

export const TechStackGenerate = {
  init() {
    skillCategories.forEach((category) => {
      console.log(`tech-stack-${category.id}`)
      const categoryEl = document.getElementById(`tech-stack-${category.id}`)
      console.log(categoryEl)
      const title = document.createElement('h2')
      title.textContent = category.title
      categoryEl.appendChild(title)
      const techStackDiv = document.createElement('div')
      techStackDiv.classList.add('tech-stack-skills-container')
      categoryEl.appendChild(techStackDiv)
      category.skills.forEach((skill) => {
        console.log('skill', skill)
        const skillEl = document.createElement('span')
        skillEl.classList.add('tech-stack-skill')
        skillEl.textContent = skill
        techStackDiv.appendChild(skillEl)
      })
    })
  },
}
