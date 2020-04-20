import { Service, Inject } from 'typedi';
import { CompanyRepository } from '../repository/CompanyRepository';
import BlockIdEnum from '../constant/BlockIdEnum';

@Service()
export abstract class CompanyService {
  @Inject()
  companyRepository: CompanyRepository;

  getList() {
    return this.companyRepository.companys;
  }

  getSearchResult(companyName) {
    const searchResultCompanys = this.companyRepository.companys.filter((company) =>
      // TODO: 검색 필터링 조건 자세히 할 것
      company.name.includes(companyName)
    );
    return searchResultCompanys;
  }

  getQuickReplies(companyName) {
    const companys = this.getSearchResult(companyName);
    const quickReplies = companys.map((company) => ({
      action: 'block',
      label: company.name,
      messageText: company.name,
      blockId: BlockIdEnum.insured,
    }));
    return quickReplies;
  }
}
