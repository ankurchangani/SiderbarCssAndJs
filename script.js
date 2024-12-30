const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');


sidebar.style.left = '0px';


toggleBtn.addEventListener('click', () => {
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
});


closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});
