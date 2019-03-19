var navHidden = true;
var showingSrc = false;

function init() {
    viewDetailsBtns = document.getElementsByClassName("view_details_btn");
    var detailsShowingTogglers = [];
    for(var i = 0; i < viewDetailsBtns.length; i++) {
        var screenshotCard = viewDetailsBtns[i].parentElement.parentElement;
        var accomplishmentsCard = screenshotCard.getElementsByClassName("accomplishments")[0];
        
        viewDetailsBtns[i].addEventListener("click", toggleDetailsBtn.bind(this, event, viewDetailsBtns[i], accomplishmentsCard.id));
        
        detailsShowingTogglers[accomplishmentsCard.id] = function() {
            var showingDetails = false;
            return function() {
                if(!showingDetails) {
                    showingDetails = true;
                } else {
                    showingDetails = false;
                }
                return showingDetails;
            }
        }();
        
        function toggleDetailsBtn(event, detailsBtn, cardId) {
            detailsShowing = detailsShowingTogglers[cardId]();
            if(!detailsShowing) {
                detailsBtn.innerText = "View Details";
                slideDown(cardId, event);

            } else {
                detailsBtn.innerText = "Hide Details";
                slideUp(cardId, event)
            }
        }
    }
    document.getElementById("menu_icon").addEventListener("click", function(event) {
        slideOut(event);
    });
    document.getElementsByTagName("main")[0].addEventListener("click", function(event) {
        slideIn(event);
    });
    window.addEventListener("resize", function() {
        let slideOut = document.getElementById("slide_out");
        let main = document.getElementsByTagName("main")[0];
        
        if(showingSrc) {
            adjustDocumentHeight();
        }
        if (window.innerWidth >= 1000) {
            slideOut.style.left = "0";
            document.getElementsByTagName("header")[0].style.zIndex = "3";
            if (!showingSrc) {
                document.getElementById("overlay").style.display = "none";
            }
        }
        if (window.innerWidth < 1000) {
            if (navHidden) {
                slideOut.style.left = "-200px";
            } else {
                document.getElementById("overlay").style.display = "block";
            }
            document.getElementsByTagName("header")[0].style.zIndex = "2";
        }
    });
}

function adjustDocumentHeight() {
    var documents = document.getElementsByClassName("document");
    
    for(i = 0; i < documents.length; i++) {
        var iframe = documents[i].getElementsByTagName("iframe")[0];
        var iframeMarginTop = window.getComputedStyle(iframe).marginTop;
        var documentHeight = window.getComputedStyle(documents[i]).height; 
        
        iframe.style.height = parseFloat(documentHeight) - parseFloat(iframeMarginTop) + "px";
    }
}

function checkSize(inFrontId, accomplishmentsId, btn, event) {
    if (window.innerWidth >= 580 && (btn.className === 'src_code_icon hide_in_mobile') || (btn.className === 'src_code_icon')) {
        displayFullScreen(inFrontId, accomplishmentsId, event);
    } else if (btn.className === 'src_code_icon') {
        slideUp(inFrontId, event)
    } else if (window.innerWidth >= 580 && btn.className === 'close_btn') {
        closeFullScreen(inFrontId, accomplishmentsId, event);
    } else if (btn.className === 'close_btn' && showingSrc) {
        closeFullScreen(inFrontId, accomplishmentsId, event);   
    } else if (btn.className === 'close_btn') {
        slideDown(inFrontId, event);
    }
}

function slideOut(event) {
    if (navHidden) {
        document.getElementById("slide_out").style.left = "0px";
        document.getElementById("overlay").style.display = "block";
        navHidden = false;
    }
    event.stopPropagation();
}

function slideIn(event) {

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

function slideUp(inFrontId, event) {
    let inFront = document.getElementById(inFrontId);
    
    inFront.style.transform = "translateY(-100%)";
    event.stopPropagation();
}

function slideDown(inFrontId, event) {
    document.getElementById(inFrontId).style.transform = "translateY(100%)";
    event.stopPropagation();
}

function hideElement(id) {
    document.getElementById(id).style.opacity = 0;
}

function displayFullScreen(inFrontId, accomplishmentsId, event) { 
    let inFront = document.getElementById(inFrontId);
    let parent = inFront.parentElement;
    let accomplishments = document.getElementById(accomplishmentsId);
    let overlay = document.getElementById("overlay");
    let main = document.getElementsByTagName("main")[0];
    let hiddenCards = document.getElementsByClassName("hidden_card");
    
    inFront.ontouchmove = function(event) {
        event.stopPropagation();
    };
    
//    window.ontouchmove = function(event) {
//        event.preventDefault();
//    }
//    
//    window.onwheel = function(event) {
//        event.preventDefault();
//    }
//    
//    window.onscroll = function(event) {
//        event.preventDefault();
//    }
    
//    document.body.ontouchmove = "event.preventDefault()";
//    document.body.onwheel = "event.preventDefault()";
//    document.body.onscroll = "event.preventDefault()";
    
    for (let card of hiddenCards) {
        card.style.display = "none";
    }
    
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    inFront.style.display = "block";
    inFront.style.position = "fixed";
    if (inFront.className === "src_code hidden_card") {
        inFront.style.maxWidth = "90%";
    }
    inFront.style.height = "auto";
    inFront.style.height = "90vh";
    inFront.style.zIndex = "5";
    inFront.style.left = "50%";
    inFront.style.top = "50%";
    inFront.style.transform = "translate(-50%, -50%)";
    inFront.style.transition = "all 0s ease 0s";
    parent.style.position = "static";
    accomplishments.style.display = "none";
    overlay.style.display = "block";
    overlay.style.zIndex = "5";
    
    overlay.addEventListener("click", closeFullScreen.bind(this, inFrontId, accomplishmentsId, event))
    event.stopPropagation();
//    main.style.marginLeft = "0";
    
    showingSrc = true;
    adjustDocumentHeight();
}

function closeFullScreen(inFrontId, accomplishmentsId, event) {
    let inFront = document.getElementById(inFrontId);
    let parent = inFront.parentElement;
    let accomplishments = document.getElementById(accomplishmentsId);
    let overlay = document.getElementById("overlay");
    let main = document.getElementsByTagName("main")[0];
    let hiddenCards = document.getElementsByClassName("hidden_card");
    
    for (let card of hiddenCards) {
        card.style.display = "block";
    }
    
    document.getElementsByTagName("html")[0].style.overflow = "auto";
    document.body.style.overflow = "scroll";
    inFront.style.width = "100%";
    inFront.style.height = "311px";
    inFront.style.zIndex = "5";
    inFront.style.left = "0";
    inFront.style.top = "100%";
    inFront.style.transform = "translate(0, 0)";
    inFront.style.position = "absolute";
    inFront.style.maxHeight = "none";
    inFront.style.zIndex = "1";
    parent.style.position = "relative";
    accomplishments.style.display = "block";
    overlay.style.display = "none";
    overlay.style.zIndex = "3";
    event.stopPropagation();
    showingSrc = false;
}