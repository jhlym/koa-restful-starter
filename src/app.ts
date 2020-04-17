import 'reflect-metadata';
import { createKoaServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

useContainer(Container);

const app = createKoaServer({
  controllers: [__dirname + '/controllers/*.ts'],
});

app.listen(3000, function () {
  console.log(
    '\x1b[33m%s\x1b[0m',
    `
                               __              __                     
                              /  |            /  |                    
  _______   ______    _______ $$ |____    ____$$ |  ______    _______ 
 /       | /      \  /       |$$      \  /    $$ | /      \  /       |
/$$$$$$$/  $$$$$$  |/$$$$$$$/ $$$$$$$  |/$$$$$$$ |/$$$$$$  |/$$$$$$$/ 
$$ |       /    $$ |$$      \ $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |      
$$ \_____ /$$$$$$$ | $$$$$$  |$$ |  $$ |$$ \__$$ |$$ \__$$ |$$ \_____ 
$$       |$$    $$ |/     $$/ $$ |  $$ |$$    $$ |$$    $$/ $$       |
 $$$$$$$/  $$$$$$$/ $$$$$$$/  $$/   $$/  $$$$$$$/  $$$$$$/   $$$$$$$/ 
                                                                      
`
  );
});
