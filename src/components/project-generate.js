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

    // place video here
    let videoEl

    if (currentProject.videoLink) {
      videoEl = document.createElement('iframe')
      videoEl.src = currentProject.videoLink
      videoEl.width = currentProject.videoWidth
      videoEl.height = currentProject.videoHeight
      videoEl.classList.add('article-project-video')
      videoEl.classList.add('iframe-video')
    } else {
      let videoFile
      try {
        videoFile = require(`public/videos/${data}.mp4`)
      } catch {}

      if (videoFile) {
        videoEl = document.createElement('video')
        videoEl.classList.add('article-project-video')
        videoEl.controls = true
        videoEl.src = videoFile
      }
    }
    document.querySelector('.article-project-video-container').innerHTML = '' // Sanitize the inside of the container if a pre-existing video is potentially there.
    if (!videoEl) {
      document.querySelector('.article-project-video-container').style.display = 'none'
    }
    document.querySelector('.article-project-video-container').appendChild(videoEl)

    document.querySelector('.article-project-technical-details-body').innerHTML = currentProject.technicalDetails.replace(/\n/g, '<br>')

    document.querySelector('.article-project-responsibilities-body').innerHTML = currentProject.responsibilities
      .replace(/(^|\n\n)([^:\n]+?):/g, (match, p1 = '', p2) => `${p1}<b>${p2.trim()}:</b>`)
      .replace(/\n/g, '<br>')
  },
}
