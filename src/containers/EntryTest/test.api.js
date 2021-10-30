import request from 'utils/request';

export function postEntryTestAPI(payload) {
  return request.post('v1/entrytest', payload);
}
