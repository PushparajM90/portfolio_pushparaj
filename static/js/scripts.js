var header = document.getElementById('portfolio-header');
var houseIcon = document.getElementById('fa-solid_fa-house');
var userIcon = document.getElementById('fa-solid_fa-user');
var phoneIcon = document.getElementById('fas_fa-phone');
var bottem_logo = document.getElementById('bottem_logo');
var menu_icons = document.getElementById('menu_icons');

var header_bottom_flag = false;


var cuur_headerBottom = 0;
var g_last_color = 'black'


// Register the ScrollTrigger plugin
// Then, your Lenis and ScrollTrigger code should work
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', (e) => {// lintern scroll
    console.log(e)
})

window.lenis = lenis

window.addEventListener('resize', () => {//screen zoom or minimize
    lenis.resize()
})

const proxyLenis = new Proxy(lenis, {})
const scrollToTop = document.getElementById('scroll-to-top')

scrollToTop.addEventListener('click', () => {
    console.log(proxyLenis.isStopped)
    proxyLenis.scrollTo(0, {
        lerp: 0.1,
    })
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

///////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    applySelectedColor('fa-solid_fa-house');
    
    var all_ele = document.querySelectorAll("[name=onhover_same]");
    all_ele.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            g_last_color = element.style.color
            element.style.color = "blue";
        });
        element.addEventListener("mouseout", function () {
            element.style.color = g_last_color;
        });
    });
});

function copyToClipboard() {
    var phoneNumber = document.getElementById("mobile_no").innerText.trim();

    var tempInput = document.createElement("textarea");
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Phone number copied to clipboard: " + phoneNumber);
}


window.onscroll = function () { toggleIconDisplay() };

function toggleIconDisplay() {
    //24
    cuur_headerBottom = header.getBoundingClientRect().bottom;
    if (cuur_headerBottom > 23){
        if (!header_bottom_flag == false) {
            header_bottom_flag = false;
            changeVisiblity(false);
        } 
    }else{
        if (!header_bottom_flag == true) {
            header_bottom_flag = true;
            changeVisiblity(true);
        }
    }  
}

function changeVisiblity(flag){
    if (!flag) {
        bottem_logo.style.height = '0';
        bottem_logo.style.overflow = 'hidden';
        bottem_logo.style.transition = 'height 0.5s ease';
        menu_icons.style.display = 'none';
    } else {
        bottem_logo.style.height = '160px';
        bottem_logo.style.transition = 'height 0.5s ease';
        menu_icons.style.display = 'block'; // First make the element block-level again
        setTimeout(function () {
            menu_icons.style.transition = 'opacity 0.500s ease'; // Transition for opacity
            menu_icons.style.opacity = '1'; // Fade in
        }, 10);
    }
}

function applySelectedColor(id_or_ele) {

    if (typeof id_or_ele !== 'string'){
        var i_ele = id_or_ele.querySelector('i');
        id_or_ele = i_ele.getAttribute('name');
        var name = id_or_ele + '_container';
    }
    
    var id_list = ['fa-solid_fa-house', 'fa-solid_fa-user', 'fas_fa-phone'];

    var index = id_list.indexOf(id_or_ele);
    if (index !== -1) {
        id_list.splice(index, 1);
    }

    var ele = document.getElementById(id_or_ele);
    var ele2 = document.querySelector(`[name="${id_or_ele}"]`);
    if (ele && ele2) {
        ele.style.color = '#007BFF';
        ele2.style.color = '#007BFF';
        var ele2_parent = ele2.parentElement;
        ele2_parent.classList.add('active');
    }

    for (var i = 0; i < id_list.length; i++) { 
        if (id_list[i] !== id_or_ele) {
            var new_ele = document.getElementById(id_list[i]);
            var new_ele2 = document.querySelector(`[name="${id_list[i]}"]`);
            if (new_ele && new_ele2) {
                new_ele.style.color = '#ffffff';
                new_ele2.style.color = 'black';
                var new_ele2_parent = new_ele2.parentElement;
                new_ele2_parent.classList.remove('active');
            }
        }
    }
    
}
