export const generateRandomReferralCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referralCode += characters.charAt(randomIndex);
    }
  
    return referralCode;
  };
  
  export const generateExpirationTime = () => {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24); // Tambahkan 24 jam
    return expirationDate;
  };
  