document.addEventListener('DOMContentLoaded', function () {

    window.onscroll = function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    };
});

function openParagraph(element) {
    console.log(element);
    var div = element.querySelector('[name="find_hidden"]');
    console.log("div--->", div);
    if (div) {
        var classList = div.classList;
        console.log(classList);

        if (classList.contains('is_hidden_true')) {
            classList.add('is_hidden_false');
            classList.remove('is_hidden_true');
            div.removeAttribute('hidden');
        }else{
            classList.add('is_hidden_true');
            classList.remove('is_hidden_false');
            div.setAttribute('hidden', true);
        }
    }
}

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