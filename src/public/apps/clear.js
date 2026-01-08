app = window.os.apps.clear = window.os.apps.clear || {};
app.instance = function(){
    let elements = document.getElementsByTagName("pre");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};