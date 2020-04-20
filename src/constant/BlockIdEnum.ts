export enum BlockId {
  // 피보험자 본인 여부 선택 단계
  insured = '5e940bbe6de4a6000129e52d',
  // 수익자 본인 여부 선택 단계
  requirer = '5e9417b66b9d4d000163a419',
  // 사고 유형 선택 단계
  invoiceType = '5e9417fcc010330001ecd3f9',
  // 날짜 입력 단계
  treatmentDate = '5e94185b3e69850001734bac',
  // 진단명 입력 단계
  treatmentReason = '5e94185b3e69850001734bac',
  // 진료 장소 입력 단계
  treatmentOrg = '5e9429323e69850001734c71',
  // 진료 금액 입력 단계
  treatmentAmount = '5e97fbabc010330001ece036',
}

export default BlockId;
