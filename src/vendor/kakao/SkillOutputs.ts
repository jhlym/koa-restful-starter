import { Service } from 'typedi';

// 참조
// https://i.kakao.com/docs/skill-response-format#outputs-%EC%B6%9C%EB%A0%A5-%EA%B7%B8%EB%A3%B9

@Service()
class SkillOutputs {
  // 1000자 이상
  SimpleText(text) {
    return {
      simpleText: { text },
    };
  }
}

export default SkillOutputs;
