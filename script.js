function pushLorem(){                   //replaces text with lorem
    let l = document.getElementsByClassName("lorem");
    for(var i = 0; i < l.length; i++){
        l[i].innerHTML="<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. </p><p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>";
    }
}
pushLorem();

function screenHeight(){                //sets article blocks to screen height
    var h = document.documentElement.clientHeight;
    let l = document.getElementsByClassName("article");
    for(var i = 0; i < l.length; i++){
        l[i].style.height = h+"px";
    }
}
screenHeight();

function scrollTo1(){
    article1.scrollIntoView(true);
}

function scrollTo2(){
    article2.scrollIntoView(true);
}

function scrollTo3(){
    article3.scrollIntoView(true);
}