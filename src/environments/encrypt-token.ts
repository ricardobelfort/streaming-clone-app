import * as CryptoJS from 'crypto-js';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTU3NjIyOTI2NWU1Njc0MTYzODFiYzNhOGVjMmU4OCIsIm5iZiI6MTcyMzIwOTg0Ny42MzQ3MjgsInN1YiI6IjYyM2U2NzVlMGYzNjU1MDA0YTAzYjU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOb_salVL8M_6iKkRZNibA3QGrM3yiWdy-D-Luscp-I';
const secretKey = 'C@hosfwd419';

const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
console.log('Encrypted Token:', encryptedToken);
