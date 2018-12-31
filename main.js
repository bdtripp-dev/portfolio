var navHidden = true;
var showingSrc = false;

function init() {
//    let sourceCodeBtns = document.getElementsByClassName("source_code_icon");
    
    document.getElementById("menu_icon").addEventListener("click", slideOut);
    document.getElementsByTagName("main")[0].addEventListener("click", slideIn);
    window.addEventListener("resize", function() {
        let slideOut = document.getElementById("slide_out");
        let main = document.getElementsByTagName("main")[0];
        
        if (window.innerWidth >= 1000) {
//            if (showingSrc) {
//                main.style.marginLeft = "0";
//            } else {
//                main.style.marginLeft = "15%";
//            }
            slideOut.style.left = "0";
            document.getElementsByTagName("header")[0].style.zIndex = "3";
            if (!showingSrc) {
                document.getElementById("overlay").style.display = "none";
            }
        }
        if (window.innerWidth < 1000) {
//            main.style.marginLeft = "0";
            if (navHidden) {
                slideOut.style.left = "-200px";
            } else {
                document.getElementById("overlay").style.display = "block";
            }
            document.getElementsByTagName("header")[0].style.zIndex = "2";
        }
       
    });
}

function checkSize(inFrontId, accomplishmentsId, btn) {
    if (window.innerWidth >= 580 && (btn.className === 'src_code_icon hide_in_mobile') || (btn.className === 'src_code_icon')) {
        displayFullScreen(inFrontId, accomplishmentsId);
    } else if (btn.className === 'src_code_icon') {
        slideUp(inFrontId)
    } else if (window.innerWidth >= 580 && btn.className === 'close_btn') {
        closeFullScreen(inFrontId, accomplishmentsId);
    } else if (btn.className === 'close_btn' && showingSrc) {
        closeFullScreen(inFrontId, accomplishmentsId);   
    } else if (btn.className === 'close_btn') {
        slideDown(inFrontId);
    }
}

function slideOut() {
    if (navHidden) {
        document.getElementById("slide_out").style.left = "0px";
        document.getElementById("overlay").style.display = "block";
        navHidden = false;
    } 
}

function slideIn() {

    if (!navHidden && window.innerWidth < 1000) {
        document.getElementById("slide_out").style.left = "-200px";
        document.getElementById("overlay").style.display = "none";
        navHidden = true;
    }
    
    if (window.innerWidth > 1000) {
        document.getElementById("slide_out").style.left = "0";
        if (!showingSrc) {
            document.getElementById("overlay").style.display = "none";
        }
    }
    event.stopPropagation();
    

}

function slideUp(inFrontId, accomplishmentsId) {
    let inFront = document.getElementById(inFrontId);
    
    inFront.style.transform = "translateY(-100%)";
}

function slideDown(inFrontId) {
    document.getElementById(inFrontId).style.transform = "translateY(100%)";
    event.stopPropagation();
}

function hideElement(id) {
    document.getElementById(id).style.opacity = 0;
}

function displayFullScreen(inFrontId, accomplishmentsId) { 
    let inFront = document.getElementById(inFrontId);
    let parent = inFront.parentElement;
    let accomplishments = document.getElementById(accomplishmentsId);
    let overlay = document.getElementById("overlay");
    let main = document.getElementsByTagName("main")[0];
    let hiddenCards = document.getElementsByClassName("hidden_card");
    
    for (let card of hiddenCards) {
        card.style.display = "none";
    }
    
    document.body.style.overflow = "hidden";
    main.style.overflow = "hidden";
    inFront.style.display = "block";
    inFront.style.position = "fixed";
    if (inFront.className === "src_code hidden_card") {
        inFront.style.maxWidth = "90%";
    }
    inFront.style.height = "auto";
    inFront.style.maxHeight = "90vh";
    inFront.style.zIndex = "5";
    inFront.style.left = "50%";
    inFront.style.top = "50%";
    inFront.style.transform = "translate(-50%, -50%)";
    inFront.style.transition = "all 0s ease 0s";
    parent.style.position = "static";
    accomplishments.style.display = "none";
    overlay.style.display = "block";
    overlay.style.zIndex = "5";
    event.stopPropagation();
//    main.style.marginLeft = "0";
    
    showingSrc = true;
}

function closeFullScreen(inFrontId, accomplishmentsId) {
    let inFront = document.getElementById(inFrontId);
    let parent = inFront.parentElement;
    let accomplishments = document.getElementById(accomplishmentsId);
    let overlay = document.getElementById("overlay");
    let main = document.getElementsByTagName("main")[0];
    let hiddenCards = document.getElementsByClassName("hidden_card");
    
    for (let card of hiddenCards) {
        card.style.display = "block";
    }
    
    document.body.style.overflow = "scroll";
    main.stly.overflow = "auto";
    inFront.style.width = "100%";
    inFront.style.height = "311px";
    inFront.style.zIndex = "5";
    inFront.style.left = "0";
    inFront.style.top = "100%";
    inFront.style.transform = "translate(0, 0)";
//    inFront.style.maxWidth = "100%";
    inFront.style.position = "absolute";
    inFront.style.maxHeight = "none";
    inFront.style.zIndex = "1";
    parent.style.position = "relative";
    accomplishments.style.display = "block";
    overlay.style.display = "none";
    overlay.style.zIndex = "3";
    event.stopPropagation();
//    if (window.innerWidth >= 1000) {
//        main.style.marginLeft = "15%";
//    } else {
//        main.style.marginLeft = "0";
//    }
    showingSrc = false;
}