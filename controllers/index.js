module.exports = {
    // Login
    login: require("./user/login"),

    // Register
    register: require("./user/register"),

    // Encrypt and Decrpyt
    encryptPass: require("./encrypt-decrypt/encrypt_pass"),
    decryptPass: require("./encrypt-decrypt/decrypt_pass"),
};
