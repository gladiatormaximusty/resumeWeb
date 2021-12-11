const skillsSection = document.querySelector('.skills');

const progressBars = document.querySelectorAll('.skills__percentage');

function showProgress(){
    progressBars.forEach(progressBars => {
        const value = progressBars.dataset.progress;
        progressBars.style.width = `${value}%`;
    })
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    // console.log(sectionPos);
    // console.log(screenPos)

    if((sectionPos < (screenPos/2)) && sectionPos > 0 ){
        showProgress();
        // console.log('showProgress');
    }else{
        hideProgress();
        // console.log('hideProgress');
    }
})