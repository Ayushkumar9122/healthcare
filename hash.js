const bcrypt = require('bcrypt');

async function hashPassword() {
    const password = 'ayush123'; // Your raw password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
}

hashPassword();
