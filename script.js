// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');

// Messages


    const messagesNotifications = document.querySelector('#messagse-notifications');

    const messages = document.querySelector('.messages');

    // const message = messages.querySelectorAll('.message');
    // const messageSearch = document.querySelector('#message-search');

    // THEME
    const theme = document.querySelector('#theme'); 
    const themeModal = document.querySelector('.theme-customization');
    const fontSizes = document.querySelectorAll('.choose-size span');
    var root = document.querySelector(':root');
    const colorPalette = document.querySelectorAll('.choose-color span');


    

// ====================== Side Bar===================

// Remove active class for all items
const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click' , () => {
        changeActiveItems(); 
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
    
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
       
    })
});

// ====================== Messages===================



    $("#message-search").keyup(function(){
        var value = $(this).val().toLowerCase();
        $('.message').each(function(){
            var id = $(this).text().toLowerCase();
            $(this).toggle(id.indexOf(value) !== -1);
        })
    })
   
    // accept friend request
    function accpet_friend_request(name){
        alert("Now you are friend with"+ name);
    }

// searches chats
// const searchMessage = () => {
//     const val = messageSearch.value.toLowerCase;
  
//     message.forEach(search  => {
//         let name = search.querySelectorAll('h4').textContent.toLowerCase();
//         if(name.indexOf(val) != -1) {
//             val.style.display ='flex';
//         }
//         else{
//             val.style.display ='none';
//         }
//     })
// }

// search chat

// messageSearch.addEventListener('keyup', searchMessage);


// Highlight message card when messages menu item is clicked

messagesNotifications.addEventListener('click' , () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notifications-count').style.display ='none';

    setTimeout( () => {
        messages.style.boxShadow ='none';


    }, 2000);
})


//  THEME/DISPLAY CUSTOMIZATION 

// open modal

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
theme.addEventListener('click' , openThemeModal);

// closes modal

const closeThemeModal = (e) => {
    if(e.target.classList.contains('theme-customization')){
        themeModal.style.display = 'none';
    }
}

// close modal
themeModal.addEventListener('click' , closeThemeModal);

// ============font size=================

// remove active class from the font size or span 
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
    size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    

    size.addEventListener('click' , () => {

        removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
    
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
    
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
    
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
    
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
    
        }
        
    // change the size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })

})

// change active class from colors
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//  change Primary Color 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // change active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = '252';
        }
        else if(color.classList.contains('color-2')){
            primaryHue = '52';
        }else if(color.classList.contains('color-3')){
            primaryHue = '352';
        }else if(color.classList.contains('color-4')){
            primaryHue = '152';
        }else if(color.classList.contains('color-5')){
            primaryHue = '202';
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue' , primaryHue);
    })
})


//  BACKGROUND COLORS =================

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// Theme Background Value ++====

let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

//  Changes Background color

const changeBG = () => {
    root.style.setProperty('--light-color-lightness' , lightColorLightness);
    root.style.setProperty('--white-color-lightness' , whiteColorLightness);
    root.style.setProperty('--dark-color-lightness' , darkColorLightness);
}
//  For bg color 1

bg1.addEventListener('click' , () => {
   
    // add active class 

        bg1.classList.add('active');
    // remove active class

    bg2.classList.remove('active');  
    bg3.classList.remove('active');

    window.location.reload();
});

// For bg color 2

bg2.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class 

        bg2.classList.add('active');
    // remove active class

    bg1.classList.remove('active');  
    bg3.classList.remove('active');

    changeBG();
});

// for bg color 3

bg3.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class 

        bg3.classList.add('active');
    // remove active class

    bg1.classList.remove('active');  
    bg2.classList.remove('active');

    changeBG();
});
