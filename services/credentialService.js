import CryptoJS from 'crypto-js';


export const setCredential = (token) => {
    const credential = {
        token: token
    }
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(credential), 'ASDAWFWFACSSFSFSFA').toString();
    localStorage.setItem("credential", ciphertext)
}

export const getCredential = () => {
    const cipherCredential = localStorage.getItem('credential')
    const bytes = CryptoJS.AES.decrypt(cipherCredential, 'ASDAWFWFACSSFSFSFA');
    const decrypCredential = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypCredential
}