Vue.component('navigation', {
    template: `
        <div>
        <div class="container">
        <div class="header">
            <div class="wrapper">
                <div>
                    <a href=""><img class="logo" src="./image/navigation/SpaceX-Logo.svg"></img>
                </div>
                <div class="items">
                    <a href="" v-for="nav in navs" class="item-text capital hover">{{ nav.item }}</a>
                </div>
                <div class="sign-up">
                    <a href="" class="button_sign-up capital hover">sign up</a>
                </div>
            </div>
        </div>
    </div>         
        </div>`
    ,
    data() {
        return {
            navs: [
                {item: 'falcon 9'},
                {item: 'falcan heavy'},
                {item: 'dragon'},
                {item: 'starship'},
                {item: 'moon'},
                {item: 'mars'}
            ]
        }
    },
})

new Vue({
    el: '#demo'
})

const nav = document.querySelector('.header');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
    let currentScrollPos = window.pageYOffset;

    if(prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
    }else{
        nav.classList.remove('hide');
    }
    if(currentScrollPos > window.innerHeight) {
        nav.classList.add('back-color');
    } else {
        nav.classList.remove('back-color');
    }

    prevScrollpos = currentScrollPos;
})