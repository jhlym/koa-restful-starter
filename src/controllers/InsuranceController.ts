import { Controller, Param, Body, Get, Post, Put, Delete, BodyParam } from 'routing-controllers';
import { Inject } from 'typedi';
import SkillResponse from '../vendor/kakao/SkillResponse';
import SkillOutputs from '../vendor/kakao/SkillOutputs';
import { CompanyService } from '../services/CompanyService';

@Controller('/insurance')
export class InsuranceController {
  @Inject()
  companyService: CompanyService;
  @Inject()
  SkillOutputs: SkillOutputs;

  @Post('/company')
  async getInsuranceCompany(@Body() body: any) {
    const {
      action: { params },
    } = body;
    const quickReplies = this.companyService.getQuickReplies(params.name);
    return new SkillResponse()
      .addOutputComponent(this.SkillOutputs.SimpleText('검색된 보험사를 선택해주세요.'))
      .setQuickReplies(quickReplies)
      .getResult();
  }
}
