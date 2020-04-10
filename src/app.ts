import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import * as Controller from './controller';

const app = createKoaServer({
  controllers: [Controller.InsuranceController],
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
