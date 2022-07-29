export interface Movie {
    // saearch by title:
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string
    // search by id :
    Rated?: string
    Released?: string
    Runtime?: string
    Genre?: string
    Director?: string
    Writer?: string
    Actors?: string
    Plot?: string
    Language?: string
    Country?: string
    Awards?: string
    Metascore?: string
    Ratings?: { Source: string, Value: string }[]
    BoxOffice?: string
    DVD?: string
    imdbVotes?: string
    Response?: string
    Website?: string
    Production?: string
    imdbRating?: string
}

