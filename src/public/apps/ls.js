app = window.os.apps.ls = window.os.apps.ls || {};
app.instance = function(args){
    let result = `.\n`;
    let path = "/public/" + (args[0] || '');
    console.log("Fetching path:", path);
    let list = [];
    try{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", path, false );
    xmlHttp.send( null );
    list = JSON.parse(xmlHttp.responseText); 
    } catch(e){
        return `cannot access '${args[0]}': No such file or directory`;
    }

    for(var i in list) {
        var item = list[i];
        switch(item.type) {
            case "directory":
                result += `.${item.name}\n`;
                break;
            case "file":
                if (item.name.endsWith('.js')) {
                    result += `${item.name.split('.').slice(0, -1).join('.')}\n`;
                } else {
                    result += `${item.name}\n`;
                }
                break;
            default:
                result += `${item.name}\n`;
                break;
        }

    }

    return result;
};