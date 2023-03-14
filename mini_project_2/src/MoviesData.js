let movies = [
  {
    id: 1,
    Title: "Avatar",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    imdbRating: "7.9",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    id: 2,
    Title: "I Am Legend",
    Genre: "Drama, Horror, Sci-Fi",
    Director: "Francis Lawrence",
    Actors:
      "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
    imdbRating: "7.2",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
  },
  {
    id: 3,
    Title: "300",
    Genre: "Action, Drama, Fantasy",
    Director: "Zack Snyder",
    Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    imdbRating: "7.7",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
  },
  {
    id: 4,
    Title: "The Avengers",
    Genre: "Action, Sci-Fi, Thriller",
    Director: "Joss Whedon",
    Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
    imdbRating: "8.1",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    id: 5,
    Title: "The Wolf of Wall Street",
    Genre: "Biography, Comedy, Crime",
    Director: "Martin Scorsese",
    Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    imdbRating: "8.2",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    id: 6,
    Title: "Interstellar",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    imdbRating: "8.6",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    id: 7,
    Title: "Game of Thrones",
    Genre: "Adventure, Drama, Fantasy",
    Director: "N/A",
    Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
    imdbRating: "9.5",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    id: 8,
    Title: "Vikings",
    Genre: "Action, Drama, History",
    Director: "N/A",
    Actors: "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
    imdbRating: "8.6",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
  },
  {
    id: 9,
    Title: "Gotham",
    Genre: "Action, Crime, Drama",
    Director: "N/A",
    Actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
    imdbRating: "8.0",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
  },
]

export default movies
