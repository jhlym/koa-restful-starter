import { Controller, Param, Body, Get, Post, Put, Delete, BodyParam } from 'routing-controllers';
import companys from '../mockup/insurance.company';

@Controller()
export class InsuranceController {
  @Post('/insurance/company')
  getInsuranceCompany(@BodyParam('name') name: string) {
    return companys.filter((company) => company.name.includes(name));
  }
}
