import 'reflect-metadata';
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { Application } from './config/Appliaction';

useContainer(Container);

export default new Application();

// import { createKoaServer, useContainer } from 'routing-controllers';
// import { Container } from 'typedi';
// import * as config from 'config';

// useContainer(Container);

// const port = config.get('ports.http');

// const app = createKoaServer({
//   controllers: [__dirname + '/controllers/*.ts'],
// });

// app.listen(3000, function () {
//   console.log(
//     '\x1b[33m%s\x1b[0m',
//     `
//                                __              __
//                               /  |            /  |
//   _______   ______    _______ $$ |____    ____$$ |  ______    _______
//  /       | /      \  /       |$$      \  /    $$ | /      \  /       |
// /$$$$$$$/  $$$$$$  |/$$$$$$$/ $$$$$$$  |/$$$$$$$ |/$$$$$$  |/$$$$$$$/
// $$ |       /    $$ |$$      \ $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |
// $$ \_____ /$$$$$$$ | $$$$$$  |$$ |  $$ |$$ \__$$ |$$ \__$$ |$$ \_____
// $$       |$$    $$ |/     $$/ $$ |  $$ |$$    $$ |$$    $$/ $$       |
//  $$$$$$$/  $$$$$$$/ $$$$$$$/  $$/   $$/  $$$$$$$/  $$$$$$/   $$$$$$$/

//   ------------
//   Server Started!

//   Http: http://localhost:${port}
//   ------------
// `
//   );
// });
