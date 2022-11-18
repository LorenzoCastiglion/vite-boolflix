import { reactive } from "vue";


export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    genreUrl: 'https://api.themoviedb.org/3/genre/movie/list',
    options: {
        params: {
            api_key: '17f37c920e1c0e0a5f05cac02361fe4c',
            query: ''
        }
    },

    listGenre: [],






    truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;

    },



});


