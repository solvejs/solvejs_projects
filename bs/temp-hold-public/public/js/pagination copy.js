let prevPage = document.getElementById('previous-page');
let nextPage = document.getElementById('next-page');
prevPage.addEventListener('mouseenter', (e) => {
    e.target.innerText = "Prev Page";
})
prevPage.addEventListener('mouseout', (e) => {
    e.target.innerText = '< < < <';
})
nextPage.addEventListener('mouseenter', (e) => {
    e.target.innerText = "Next Page";
})
nextPage.addEventListener('mouseout', (e) => {
    e.target.innerText = '> > > >';
})
window.onload = () => {
    paging(); // calling function to load bumper stickers and pagination
}
nextPage.addEventListener('click', () => {
  //  
})