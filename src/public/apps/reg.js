reg = async function(args){
    
    const cli = os.cli;

    let login  = ''
    let is_login_valid = false;
    while(is_login_valid === false) {
        await cli.write('Enter login:', async (e) => {
            login = await cli.read('text', e);
            if (login.trim().length < 3)  {
                await cli.write('- login must be at least 3 characters long. Please try again.');
                login = ' ';     
            } else {
                is_login_valid = true;
            }
        });
    }   

    let password  = ''
    let is_password_valid = false;
    while(is_password_valid === false) {
        await cli.write(`Entered password: `, async (e) => {
            password = await cli.read('password', e);
            if (password.trim().length < 4)  {
                await cli.write('- password must be at least 4 characters long. Please try again.');
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