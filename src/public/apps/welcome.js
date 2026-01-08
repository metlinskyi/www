welcome = function(){
    let s = String.raw`
    __  __     ____         _       __           __    ____
   / / / /__  / / /___     | |     / /___  _____/ /___/ / /
  / /_/ / _ \/ / / __ \    | | /| / / __ \/ ___/ / __  / / 
 / __  /  __/ / / /_/ /    | |/ |/ / /_/ / /  / / /_/ /_/  
/_/ /_/\___/_/_/\____/     |__/|__/\____/_/  /_/\__,_(_)   

Welcome to JSOS ${os.version} (c) Roman Metlinskyi

This is a simulated operating system running in your web browser.
You can run commands just like in a regular terminal.
Type 'help' to see a list of available commands.    
`;  
    os.execute('clear',()=>{
        os.cli.write(s.slice(1,-1));
    });
};