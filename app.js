const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Retirer la classe 'active' de tous les boutons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
    
            // Ajouter la classe 'active' au bouton cliqué
            e.target.classList.add('active');
    
            // Retirer la classe 'active' de toutes les sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });
    
            // Ajouter la classe 'active' à la section correspondante
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });    
}

PageTransitions();
