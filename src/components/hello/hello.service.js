class helloService {
    constructor($http) {
        this.$http = $http;
    }
    getData(URL) {
        return this.$http.get(URL);
    }
}