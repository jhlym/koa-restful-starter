import axios from 'axios';
import * as Utils from '../lib/Utils';

const CASHDOC_PROTOCOL = 'https://';
const CASHDOC_HOST = 'api-test.cashdoc.io';
const CASHDOC_VERSION = '/v1';
const CASHDOC_API_URL = `${CASHDOC_PROTOCOL}${CASHDOC_HOST}${CASHDOC_VERSION}`;

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 
  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/
const cashdocClient = axios.create();

// host name 지정
cashdocClient.defaults.baseURL = CASHDOC_API_URL;

export const CashdocAPI = {
  get: async function (pathname) {
    try {
      const response = await cashdocClient.get(pathname);
      if (Utils.isSuccessApiCall(response)) return response.data;
      else {
        throw new Error('API 호출 에러');
      }
    } catch (e) {
      // TODO: 에러 처리, 로그 적재
      console.dir(e);
    }
  },
  post: {},
  put: {},
  delete: {},
};
