import { Controller, Param, Body, Get, Post, Put, Delete, BodyParam } from 'routing-controllers';
import { Inject } from 'typedi';
/** 카카오 챗봇 스킬 서버 응답 포맷 */
import SkillResponse from '../vendor/kakao/SkillResponse';
import { CompanyService } from '../services/CompanyService';

@Controller('/insurance')
export class InsuranceController {
  @Inject()
  companyService: CompanyService;

  @Post('/company')
  async getInsuranceCompany(@Body() body: any) {
    const {
      action: { params },
    } = body;
    const quickReplies = this.companyService.getQuickReplies(params.name);
    return new SkillResponse()
      .setOutputs([{ simpleText: { text: '검색된 보험사를 선택해주세요.' } }])
      .setQuickReplies(quickReplies)
      .getResult();
  }
}
