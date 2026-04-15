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

document.addEventListener('DOMContentLoaded', function() {
    const tel = document.getElementById('telphone');
    const btn = document.getElementById('zayavka');

    if (tel && btn) {
        // 1. ЗАБОРОНА ВИДАЛЕННЯ (Клавіші)
        tel.addEventListener('keydown', function(e) {
            if (tel.selectionStart <= 4 && (e.keyCode === 8 || e.keyCode === 46)) {
                e.preventDefault();
            }
        });

        // 2. ГОЛОВНА ЛОГІКА (Введення, Фільтр, Кнопка)
        tel.addEventListener('input', function() {
            // Видаляємо все, крім цифр і плюса
            let value = tel.value.replace(/[^\d+]/g, '');

            // Жорстко тримаємо префікс
            if (!value.startsWith('+380')) {
                value = '+380';
            }

            // Обрізаємо зайве (max 13)
            tel.value = value.substring(0, 13);

            // КЕРУВАННЯ КНОПКОЮ
            if (tel.value.length === 13) {
                btn.disabled = false;
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";
            } else {
                btn.disabled = true;
                btn.style.opacity = "0.9"; // Якщо занадто прозоро, постав 0.7
                btn.style.cursor = "not-allowed";
                
            }
        });

        // 3. ЗАБОРОНА КЛІКУ В ПОЧАТОК
        tel.addEventListener('click', function() {
            if (tel.selectionStart < 4) {
                tel.setSelectionRange(4, 4);
            }
        });
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const citys = document.getElementById('citys');
//     const namas = document.getElementById('name');

//     if (citys && namas) {
//         citys.addEventListener('change', function() {
//             // Перевіряємо, чи значення НЕ порожнє і НЕ є початковим "placeholder"
//             // Якщо у першого option value="" або value="none"
//             if (citys.value !== "" && citys.value !== "none") {
//                 namas.style.display = "block"; 
//             } else {
//                 namas.style.display = "none"; // Це "закриє" поле імені
//             }
//         });
//     }
// });