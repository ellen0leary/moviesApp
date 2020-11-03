class StubAPI {
    constructor() {
        this.favouriteMovies = [];
    }

    add(movie){
        this.favouriteMovies.push(movie);
    }

    getAll() {
        return this.favouriteMovies;
    }
}

export default new StubAPI();