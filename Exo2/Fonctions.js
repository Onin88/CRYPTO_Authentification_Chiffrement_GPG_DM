function hachage(string){
    return createHash('sha256').update(String(string)).digest('hex');
}

function ajouterUsager(){
    const getSHA256Hash = async (input) => {
        const textAsBuffer = new TextEncoder().encode(input);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        return hash;
    }

    let password = document.getElementById("mdp").value;
    let salt = "d4ed4nrg8e2";
    let email = document.getElementById("email").value;

    getSHA256Hash(password).then(function(hache) {
        getSHA256Hash(salt.concat(password)).then(function(hacheSale) {
            getSHA256Hash(email.concat(password)).then(function(hacheSaleUsager){      
                var key = CryptoJS.enc.Utf8.parse('az7ms4dsxzde85bf2gatafze226rty98');    
                var iv  = CryptoJS.enc.Utf8.parse('daz7da7qd4t5c8rt');                   
                var encryptedCP = CryptoJS.AES.encrypt("result3", key, { iv: iv });
                var encryptedBase64 = encryptedCP.toString();
                localStorage.setItem(email, password);
                localStorage.setItem(email+"Hash", hache);   
                localStorage.setItem(email+"HashSale", hacheSale);    
                localStorage.setItem(email+"HashSaleUser", hacheSaleUsager);   
                localStorage.setItem(email+"Chiffre", encryptedBase64);      
            });
        });
    });      
};