import * as CryptoJS from 'crypto-js';

const secretKey = 'C@hosfwd419';

export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  tokenTMDB:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTU3NjIyOTI2NWU1Njc0MTYzODFiYzNhOGVjMmU4OCIsIm5iZiI6MTcyMzIwOTg0Ny42MzQ3MjgsInN1YiI6IjYyM2U2NzVlMGYzNjU1MDA0YTAzYjU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOb_salVL8M_6iKkRZNibA3QGrM3yiWdy-D-Luscp-I',
  encryptedToken:
    'U2FsdGVkX182auWyDICKnBYtf4Sh0/KTfWB9Y3Wsz8NkYlGzg+niXyStBjLoNRVSbJIDt27dhbbGhFReRvqVObz+9QQeXsv8OhC7dNWXxT9ot++SJXuOzguI71wd46aA81bNObzShjo3nor5ECVH5J9B2P1e8mLE+dJ0usvAOdQmbC6eW+/Mb8/85sxJlVeCM21xZTXC+7YLZkSCoiueJhTk7EaACSiQ8/p4AsQsN/1M2bCooYoWH7b0NvTEycj5YlS6C8C5J3DAiziyDVFCFXUZn4x2zoMTrYrGMQVPOfyYYdMCt/sYCWtgvecaV2Tzmd/0zjmBysgGqlCUuFVQliIL2ybRdAxaLpY1FsXj2Lk=',
  get tokenAPITMDB() {
    const bytes = CryptoJS.AES.decrypt(this.encryptedToken, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  },
};
