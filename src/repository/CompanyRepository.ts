import { Service } from 'typedi';
import { Company, GetCompanyResponse } from '../constant/type/Insurance';
import { CashdocAPI } from '../lib/API';
import routes from '../constant/Routes';

@Service()
export class CompanyRepository {
  companys: Company[] = [];

  async getCompanyList() {
    if (this.companys.length === 0) {
      const { list }: GetCompanyResponse = await CashdocAPI.get(routes.companys.pathname);
      this.companys = list;
    }
    return this.companys;
  }
}
