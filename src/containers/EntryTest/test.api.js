import request from 'utils/request';

export function postTestTestAPI(payload) {
  return request.post('v1/test', payload);
}
