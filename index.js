let overlay = document.querySelector('.overlay')
let body = document.querySelector('body')
let modalHTML = `
<div class="modal js-modal" data-modal="1">
    <h2 class="modal_title">Обратная связь</h2>
    <form method="post" action="#">
    <label for="name">ФИО</label>
    <input type="text" name="name" placeholder="Евгений">
    <label for="phone">Телефон</label>
    <input type="text" name="phone" placeholder="+79999999">
    <input class="map_btn" type="submit">
    </form>
 
</div>
`
function openModalWindow(){
    body.insertAdjacentHTML( 'afterbegin', modalHTML ) // создание модалки
//---------------------------добавление классов, плавной анимации ------
    let modal = document.querySelector('.js-modal[data-modal="1"]')
    setTimeout(() => {
        modal.classList.add('is-show')
    overlay.classList.add('is-show')
    }, 100);
}
//----------модалка и затемнение экрана -------------------------------------------
//-----------------уничтожение модалки----------------------------
overlay.addEventListener('click', function(){
    document.querySelector('.js-modal.is-show').classList.remove('is-show')
    overlay.classList.remove('is-show')
    setTimeout(() => {
        let modal = document.querySelector('.modal')
        document.body.append(modal);
        modal.remove();
    }, 400);
})