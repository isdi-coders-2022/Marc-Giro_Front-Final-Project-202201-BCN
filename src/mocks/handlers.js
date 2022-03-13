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
];
