import projects from '../data/project-data.json'

export const ProjectGenerate = {
  init() {
    console.log('project generate')
    const params = new URLSearchParams(window.location.search)
    const data = params.get('projectId')
    if (data) {
      console.log('projectId', data)
    }

    const currentProject = projects.find((project) => project.id === data)
    document.querySelector('.section-project-header-title').textContent = currentProject.name
    document.querySelector('.project-header-category-date').textContent = currentProject.date
    document.querySelector('.project-header-category-platform').textContent = currentProject.platform
    document.querySelector('.project-header-category-role').textContent = currentProject.role

    document.querySelector('.article-project-overview-body').innerHTML = currentProject.overview.replace(/\n/g, '<br>')

    const ul1 = document.createElement('ul')
    const impactList = currentProject.impact
      .split('* ')
      .filter((item) => item.trim() !== '')
      .map((item) => `${item.trim()}`)
    impactList.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = item
      ul1.appendChild(li)
    })
    document.querySelector('.article-project-impact-body').appendChild(ul1)

    document.querySelector('.article-project-technical-details-body').innerHTML = currentProject.technicalDetails.replace(/\n/g, '<br>')

    document.querySelector('.article-project-responsibilities-body').innerHTML = currentProject.responsibilities
      .replace(/(^|\n\n)([^:\n]+?):/g, (match, p1 = '', p2) => `${p1}<b>${p2.trim()}:</b>`)
      .replace(/\n/g, '<br>')
  },
}
