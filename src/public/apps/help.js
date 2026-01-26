app = window.os.apps.help = window.os.apps.help || {};
app.instance = function(args){

    for(var name in window.os.apps){
        var app = window.os.apps[name];
        if(app.description){
            var s = name;
            while(s.length < 15) s += ' ';
            s += ' : ' + app.description;
            window.os.cli.write(s);
        }
    }
};