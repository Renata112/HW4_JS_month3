//PHONE BLOCK
const phoneInput=document.querySelector('#phone_input');
const phoneButton=document.querySelector('#phone_button');
const phoneSpan=document.querySelector('#phone_result');

// const regExp= /\+996 [2579][0-9][0-9]/  //= [2579]\d{2}
const regExp= /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick= () =>{
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML='OK'
        phoneSpan.style.color='green'
    } else {
        phoneSpan.innerHTML='NOT OK'
        phoneSpan.style.color='red'
    }
}

//Tab slider

const tabContentBlocks=document.querySelectorAll('.tab_content_block');
const tabItems=document.querySelectorAll('.tab_content_item');
const tabParent=document.querySelector('.tab_content_items');

let currentIndex=0; //переменная для хранения индекса акт вкладки
let autoSliderInterval; // айди авто переключения

const hideTabContent=()=> {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach(item=>{
        item.classList.remove('tab_content_item_active');
    })
}

const showTabContent=(index=0)=>{
    tabContentBlocks[index].style.display='block'
    tabItems[index].classList.add('tab_content_item_active')
}

// Функция для автоматического переключения вкладок
const startAutoSlide=() => {
    autoSliderInterval = setInterval(()=>{
        currentIndex=(currentIndex+1)%tabContentBlocks.length;
        hideTabContent();
        showTabContent(currentIndex)
    },3000)
};
//функция чтобы не было бага, сбрасывает текущий интервал(ручной от юсера) и обновляет в новый автоматический
const resetAutoSlide=()=>{
    clearInterval(autoSliderInterval);
    startAutoSlide();
}
// const switchTab=()=>{
//     hideTabContent();
//     currentIndex=(currentIndex+1)%tabContentBlocks.length;
//     showTabContent(currentIndex)
// }

hideTabContent();
showTabContent();
startAutoSlide();

tabParent.onclick=(event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((item,index)=>{
            if (event.target===item){
                hideTabContent()
                showTabContent(index)
                currentIndex=index
                resetAutoSlide()
            }
        })
    }
}



