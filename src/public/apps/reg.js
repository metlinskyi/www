app = window.os.apps.reg = window.os.apps.reg || {};
app.instance = async function(args){
    
    const c = window.os.cli;

    let login  = ''
    let is_login_valid = false;
    while(is_login_valid === false) {
        await c.write('Enter login:', async (e) => {
            login = await c.read('text', e);
            if (login.trim().length < 3)  {
                await c.write('- login must be at least 3 characters long. Please try again.');
                login = '';     
            } else {
                is_login_valid = true;
            }
        });
    }   

    let password  = ''
    let is_password_valid = false;
    while(is_password_valid === false) {
        await c.write(`Entered password: `, async (e) => {
            password = await c.read('password', e);
            if (password.trim().length < 4)  {
                await c.write('- password must be at least 4 characters long. Please try again.');
                password = '';     
            } else {
                is_password_valid = true;
            }
        }); 
    }

    await c.write(
`
User account registered successfully for 
login: ${login} 
password: ${'*'.repeat(password.length)}
`);

};