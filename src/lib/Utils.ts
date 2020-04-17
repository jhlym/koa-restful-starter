export const isSuccessApiCall = (response) =>
  response.status >= 200 && response.status < 300 && Object.keys(response.data).length > 0;
