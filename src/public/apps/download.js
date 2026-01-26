app = window.os.apps.download = window.os.apps.download || {};
app.instance = function(args){
    let url = args[0];  
    if (!url) {
        return 'missing URL argument, download <url>';
    }
    // let e = document.createElement('iframe');
    // e.style.display = 'none';
    // e.src = url;
    // e.onload = () => {
    //     setTimeout(() => {
    //         document.body.removeChild(e);
    //     }, 3000);
    // }
    // document.body.appendChild(e);
    // window.os.cli.write(`Downloading from ${url}...\n`);
    let e = document.createElement('a');
    e.href = url;
    e.download = 'download.pdf';
    e.style.display = 'none';
    e.target = '_blank';
    document.body.appendChild(e).click();

};