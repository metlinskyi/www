function addScript(
    src, 
    loadCallback, 
    errorCallback,
    type='text/javascript')
{
    const e = document.createElement('script');
    e.src = src;
    e.type = type;
    e.onload = (event) => {
        console.log(src + " loaded successfully");
        if (loadCallback) loadCallback();
    };
    e.onerror = () => {
        console.error("Failed to load " + src);
        if (errorCallback) errorCallback();
    }; 
    return document.head.appendChild(e);
}

function addLink(
    href, 
    loadCallback, 
    errorCallback,
    rel='stylesheet')
{
    const e = document.createElement('link');
    e.href = href;
    e.rel = rel;
    e.onload = (event) => {
        console.log(href + " loaded successfully");
        if (loadCallback) loadCallback();
    };
    e.onerror = () => {
        console.error("Failed to load " + href);
        if (errorCallback) errorCallback();
    }; 
    return document.head.appendChild(e);
}

function addStyle(style){
    const e = document.createElement('style');
    e.textContent = style;
    return document.head.appendChild(e);
}

async function executeCommand(
    cmd, 
    executeCallback)
{
    let result = undefined;
    let params = cmd.trim().split(' ');
    let name = params[0];
    let args = params.slice(1);
    let app = os.apps[name];
    if (app === undefined) {
        result = `${cmd}: command not found`;
        return executeCallback(result);
    }
    if (app.instance == undefined){
        return os.script(`${app.path}?${app.version}`, async () => {
            result = await app.instance(args);
            executeCallback(result);
        }, (e) => {
            result = e;
            executeCallback(result);
        });
    }
    result = await app.instance(args);
    executeCallback(result);
}

function cli() {
    const os = window.os;
    const cli = document.createElement('div');
    const input = document.createElement('input');
    input.name = "input";
    input.type = "text";
    cli.id = "input";
    cli.appendChild(input);
    document.body.appendChild(cli);
    let readOnly = false;

    input.onkeydown = (event) => {
        if(readOnly) {
            event.preventDefault();
            return false;
        }
        if(event.key === "Enter"){
            event.preventDefault();
            input.onchange(event);
            return false;
        }
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.target.value = localStorage.getItem(`${os.user.username}.lastCommand`) || "";
            event.preventDefault(); 
            return false;
        }

    }
    input.onchange = (event) => {
        let cmd = event.target.value;
        event.target.value = "";
        window.os.user.lastCommand = cmd;
        localStorage.setItem(`${window.os.user.username}.lastCommand`, cmd);
        let output = document.createElement('pre');
        output.className = "output";
        output.textContent = cmd;
        cli.className = "execute";
        document.body.insertBefore(output, cli);
        readOnly = true;
        window.os.execute(cmd, (result) => {  
            if (result !== undefined) {
                let pre = document.createElement('pre');   
                output.appendChild(pre);
                pre.textContent = result;
            }else{
                window.location.hash = `#${cmd}`;
            }
            cli.className = "";
            readOnly = false;
            input.focus();
        });
    }
    input.focus()
    console.log("Command-line interface module initialized");
    return {
        read: async (type= 'text', parent = undefined) => {

            readOnly = true;
            let e = document.createElement('input');
            e.type = type;
            const promise = new Promise((resolve) => {
                e.onchange = (event) => {
                    resolve(event.target.value);
                }  
            });
            if (parent !== undefined){
                parent.appendChild(e);
            } else {
                document.body.insertBefore(e, cli);
            }
            e.focus();
            
            return await promise.then((value) => {
                e.readOnly = true;
                readOnly = false;
                return value;
            });
        },
        write: async (text, nested = async (e) => {}) => {
            readOnly = true;
            let e = document.createElement('pre');   
            e.textContent = text;
            document.body.insertBefore(e, cli);
            return await nested(e).then(() => {
                readOnly = false;
            });
        }
    };
};

function browserInfo(){
    
    const ua = navigator.userAgent;
    let browserName = "Unknown";
    let browserVersion = "Unknown";
    let engine = "Unknown";
    
    // Detect browser
    if (ua.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        browserVersion = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || "Unknown";
        engine = "Gecko";
    } else if (ua.indexOf("Edg") > -1) {
        browserName = "Edge";
        browserVersion = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || "Unknown";
        engine = "Blink";
    } else if (ua.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        browserVersion = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || "Unknown";
        engine = "Blink";
    } else if (ua.indexOf("Safari") > -1) {
        browserName = "Safari";
        browserVersion = ua.match(/Version\/(\d+\.\d+)/)?.[1] || "Unknown";
        engine = "WebKit";
    } else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) {
        browserName = "Opera";
        browserVersion = ua.match(/(?:Opera|OPR)\/(\d+\.\d+)/)?.[1] || "Unknown";
        engine = "Blink";
    }
    
    console.log("Browser module initialized");
    return {
        name: browserName,
        version: browserVersion,
        engine: engine,
        userAgent: ua,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        doNotTrack: navigator.doNotTrack || "Not set"
    };
};

async function bootloader() {
    const os = window.os = window.os || {
        version : "0.0.3",
        user: {},
        script: addScript,
        link: addLink,
        style: addStyle,
        execute: (executeCommand),
        browser: browserInfo(),
        cli: cli(),
    }
    return os.script(`../terminal.apps.js?${os.version}`, async () => {
        console.log("OS Bootloader complete.");
        for(var name in os.apps) {
            let app = window.os.apps[name];
            if(app.autoload)
                await os.execute(`${name} ${app.args || localStorage.getItem(name) || ''}`, () => {});
        }
    }, (e) => {
        console.error(e);
    });   
}

if (document.readyState !== 'loading') {
  (bootloader)()
} else {
  document.addEventListener('DOMContentLoaded', () =>  bootloader(), false)
}

