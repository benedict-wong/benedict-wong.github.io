import portfolioPreviews from '../data/portfolio-previews.json';

export const PortfolioGenerate = {
    init() {
        const previews = portfolioPreviews.previews
        for (let i = 0; i < previews.length; i++) {
            const preview = previews[i];
            const portfolioSquare = document.createElement('div');
            portfolioSquare.className = 'portfolio-square cantap';
            portfolioSquare.onclick = () => { console.log('tapped') }
            const img = document.createElement('img');
            img.className = 'portfolio-square-image'
            console.log(preview.image);
            img.src = require(`../assets/images/project-${1}/preview.png`);
            img.alt = preview.title;
            portfolioSquare.appendChild(img);
            const title = document.createElement('h2');
            title.textContent = preview.title;
            title.className = 'portfolio-square-title'
            portfolioSquare.appendChild(title);
            const description = document.createElement('p');
            title.className = 'portfolio-square-description'
            description.textContent = preview.description;
            portfolioSquare.appendChild(description);
            const footer = document.createElement('div');
            footer.className = 'portfolio-square-footer'
            portfolioSquare.appendChild(footer);
            const type = document.createElement('p');
            type.className = 'portfolio-square-type'
            type.textContent = preview.type;
            footer.appendChild(type);
            const date = document.createElement('p');
            date.className = 'portfolio-square-date'
            date.textContent = preview.date;
            footer.appendChild(date);
            document.querySelector('.portfolio-content-container').appendChild(portfolioSquare);
        }

    }
}