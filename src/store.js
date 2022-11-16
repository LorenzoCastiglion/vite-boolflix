import { reactive } from "vue";


export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    options: {
        params: {
            api_key: '17f37c920e1c0e0a5f05cac02361fe4c',
            query: ''
        }
    },

    clicker: true


});