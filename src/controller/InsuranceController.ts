import { Controller, Param, Body, Get, Post, Put, Delete, BodyParam } from 'routing-controllers';
import companys from '../mockup/insurance.company';

@Controller("/insurance")
export class InsuranceController {
  @Post('/company')
  getInsuranceCompany(@Body() body) {
    // return companys.filter((company) => company.name.includes(name));
    console.dir(body);
    const name = body.action.params.name;
    return {
      version: "2.0",
      template: {
        outputs: [{ simpleText: { text: "보험사를 선택해주세요!" } }],
        quickReplies: companys
          .filter((company) => company.name.includes(name))
          .map((company) => ({
            action: "message",
            label: company.name,
            messageText: company.name
          }))
      }
    }
  }

}
