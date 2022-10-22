var CryptoJS = require("crypto-js");

export function startEncryption(secretKey, text) {
    console.info(`Encrypting with Secret Key: ${secretKey.replaceAll(secretKey,'******')}`);
    const encrypted = CryptoJS.AES.encrypt(text, secretKey);
    console.info(`encryptedData: ${encrypted}`);
    console.info('PROCESS END');
    return encrypted;
}

export function startDecryption(secretKey, text) {
    console.info(`Decrypting with Secret Key: ${secretKey.replace(/[a-z/A-Z]d/g,'*')}`);
    const decrypted = CryptoJS.AES.decrypt(text, secretKey);
    console.info(`decryptedData: ${decrypted}`);
    var originalText = decrypted.toString(CryptoJS.enc.Utf8);
    console.info('PROCESS END');
    return originalText;
}