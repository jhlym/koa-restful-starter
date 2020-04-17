import { Controller, Param, Body, Get, Post, Put, Delete, BodyParam } from 'routing-controllers';
/** API */
import { CashdocAPI } from '../lib/API';
/** 상수 */
import routes from '../constant/Routes';
import BlockIdEnum from '../constant/BlockIdEnum';
/** 타입 */
import { GetCompanyResponse } from '../constant/type/Insurance';
/** 카카오 챗봇 스킬 서버 응답 포맷 */
import SkillResponse from '../vendor/kakao/SkillResponse';

@Controller()
export class InsuranceController {
  @Post('/insurance/company')
  async getInsuranceCompany(@Body() body: any) {
    const {
      action: { params },
    } = body;
    const { list }: GetCompanyResponse = await CashdocAPI.get(routes.companys.pathname);
    const searchResultCompanys = list.filter((company) =>
      // TODO: 검색 필터링 조건 자세히 할 것
      company.name.includes(params.name)
    );
    // 바로 가기 응답 설정
    const quickReplies = searchResultCompanys.map((company) => ({
      action: 'block',
      label: company.name,
      messageText: company.name,
      blockId: BlockIdEnum.insured,
    }));
    const response = new SkillResponse()
      .setOutputs([{ simpleText: { text: '검색된 보험사를 선택해주세요.' } }])
      .setQuickReplies(quickReplies)
      .getResult();
    return response;
  }
}
