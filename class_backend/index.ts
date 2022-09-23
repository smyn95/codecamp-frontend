// console.log("반갑습니다~");

// const aaa: number = 2;

import { DataSource } from 'typeorm';
import { Board } from './Board.postgres';

// const { ApolloServer, gql } = require("apollo-server"); => 옛날방식(commonjs)
import { ApolloServer, gql } from 'apollo-server'; //      => 요즘방식(module)

// DOCS
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # (연습용 example 방식)
    # createBoard: String

    #싦무용 (bakcend 방식)
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두 꺼내기
      const result = await Board.find();

      // 한개만 골라서 꺼내기
      // Board.findOne({ where: { number: 3 } });
      return result; // [{ number: 1, writer: "철수", title: "안녕하세요", contents: "반갑습니다" }, { ... }, { ... }, ...]
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoadrdInput

        // writer: args.createBoadrdInput.writer,
        // title: args.createBoadrdInput.tile,
        // contents: args.createBoadrdInput.contents,
      });

      return '게시글 등록에 성공하였습니다.';
    },

//     updateBoard: async() => {
//     await  Board.update({number:3}, {writer: "영희"}); //3번 게시글의 작성자를 영희로 바꿔줘

//       return "게시글 수정에 성공하였습니다."
//   },

//   deleteBoard: async() => {
//    await Board.delete({number}) //3번 게시글 지워줘
//    await Board.update ({number: 3}, {isDeleted: true})      


      // return "게시글 삭제를 완료하였습니다."
// };

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: true,

  // 선택한 사이트만 풀어주고 싶을때
  // cors: {
  //   origin: ["http://naver.com","http://qqq.com"]
  // }
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '34.64.199.68',
  port: 5050,
  username: 'postgres',
  password: 'postgres2022',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log('DB접속에 성공했습니다!!!');

    // DB 연결까지 모두 끝나고, 가장 마지막에 실행(다른 사람들의 접속을 기다리기 위해서)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => {
    console.log('DB접속에 실패했습니다');
    console.log('원인: ');
    console.log(error);
  });
