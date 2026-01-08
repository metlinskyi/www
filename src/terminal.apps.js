window.os = window.os || {};
window.os.apps = {
    reg: {  
        version: '1.0.0',   
        path : 'apps/reg.js',
        description: 'Regular expression tester',
    },
    clear: {
        version: '1.0.0',   
        path : 'apps/clear.js',
        description: 'Clear the console',
    },
    download: {
        version: '1.0.0',   
        path : 'apps/download.js',
        description: 'Download a file from a URL',
    },
    help: {
        version: '1.0.0',   
        path : 'apps/help.js',
        description: 'Show this help message',

    },
    ls: {
        version: '1.0.0',   
        path : 'apps/ls.js',
        description: 'List files in the current directory',
    },
    login:{
        version: '1.0.0',   
        path : 'apps/login.js',
        description: 'Login as a user',
        autoload: true,
    },
    welcome: {
        version: '1.0.0',   
        path : 'apps/welcome.js',
        description: 'Display the welcome message',
    },
    routing : {
        version: '1.0.0',   
        path : 'apps/routing.js',
        description: 'Manage routing settings',
        autoload: true,
    }
};