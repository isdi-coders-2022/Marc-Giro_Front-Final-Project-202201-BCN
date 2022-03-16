import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}movies/?s=Hola`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: "622cde84023eda26afe3d1fc",
            Title: "Hola",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
            Type: "movie",
            Year: 2009,
            id: "622cde84023eda26afe3d1fc",
          },
          {
            _id: "622cde86023eda26afe3d1fd",
            Title: "Hola",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
            Type: "movie",
            Year: 2009,
            id: "622cde86023eda26afe3d1fd",
          },
        ])
      );
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}movies/622cde84023eda26afe3d1fc`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "Movie deleted" }));
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}movies/akljsdg3489`,
    (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          message: "We couldn't find the movie you requested to delete",
        })
      );
    }
  ),

  rest.post(`${process.env.REACT_APP_API_URL}movies`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        movie: {
          Title: "Adeu",
          Actors: "protagonist supporting character",
          Director: "movie director",
          Genre: "drama",
          Plot: "summary of the movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZT...",
          Runtime: 120,
          Type: "movie",
          Writer: "movie writers",
          Year: "1999",
        },
        message: "Movie created",
      })
    );
  }),
];
