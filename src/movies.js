// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movies) => {
        return movies.director;
    });

    //BONUS:
    const uniqueDirectors = directors.filter((direc,index) => {
        return directors.indexOf(direc) === index;
    })

    return uniqueDirectors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaMovies = moviesArray.filter((elemSteven) =>{
        return elemSteven.director === "Steven Spielberg" && elemSteven.genre.includes("Drama");
    });

    return stevenDramaMovies.length;
    
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){return 0;}
    const allScores = moviesArray.reduce((scoreAll, movie) =>{
        return movie.score? (scoreAll + movie.score) : scoreAll;
    },0);
    return +(allScores/moviesArray.length).toFixed(2);
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){return 0;}
    const DramaMovies = moviesArray.filter((elem) =>{
        return elem.genre.includes("Drama");
    })
    if(DramaMovies.length === 0){return 0;}
    const allScores = DramaMovies.reduce((scoreAll, movie) =>{
        return movie.score? (scoreAll + movie.score) : scoreAll;
    },0);
    return +(allScores/DramaMovies.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const date = moviesArray.map((x) => x);
    date.sort((a,b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        else{
            return a.year - b.year;
        }
    })
    
    return date;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let twentyMovieArray = [...moviesArray];
    let twentyMovieTitlesArray= twentyMovieArray.map((movie) => {
        return movie.title;
    }).sort();
    return moviesArray < 20 ? twentyMovieTitlesArray:twentyMovieTitlesArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
//     let durArr = moviesArray.map((movie) => {return movie.duration.split(' ')});
//     let durA
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
