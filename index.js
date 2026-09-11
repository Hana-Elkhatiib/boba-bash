const searchBox = document.getElementById('search-box');
const boxes = document.querySelectorAll('.home .box-container .box');
const noResults = document.getElementById('no-results');

searchBox.addEventListener('input', () => {
    const query = searchBox.value.trim().toLowerCase();
    let visibleCount = 0;

    boxes.forEach(box =>{
        const name = box.getAttribute('data-name').toLowerCase();
        if(name.includes(query)){
            box.classList.remove('hide');
            visibleCount++;
        } else{
            box.classList.add('hide');
        }
    });

    noResults.style.display = visibleCount === 0? 'block' : 'none';
})