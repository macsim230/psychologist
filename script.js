// бургер меню
window.onload = () => {
    const btn = document.getElementById('menui');
    const nav = document.querySelector('.navigation');

    btn.onclick = () => {
        nav.classList.toggle('active');
    };
};
// Форма для заповнення данних
document.addEventListener('DOMContentLoaded',function(){
    const citys=document.getElementById('citys');
    const namas=document.getElementById('name');
    if(citys&&namas){
        citys.addEventListener('change',function(){
            if(citys.value!==""){
                namas.style.display="block"; 
            } else {
                namas.style.display="none";
            }
        });
    }

});