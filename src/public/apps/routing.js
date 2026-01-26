app = window.os.apps.routing = window.os.apps.routing || {};
app.instance = function(args){
    let hash = window.location.hash.slice(1).trim();
    if (!hash || hash === ''){
        return window.os.execute('welcome',() => {});
    }

    let cmd = decodeURIComponent(hash);
    window.os.execute(cmd,(result) => { 
        window.os.cli.write(result);    
     });
}