app = window.os.apps.login = window.os.apps.login || {};
app.instance = function(args){
    if (args[0] === undefined){ 
        return 'missing login argument, login <username>';
    }
    os.user.login = args[0] || os.user.login;
    localStorage.setItem("login", os.user.login);
    console.log("User logged in as " + os.user.login);
    os.style(`
        #input::before, .output::before {
            content: '@${os.user.login}:>';
        }
    `);
};