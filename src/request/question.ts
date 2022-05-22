import request from "./request";

export const allQuestion = () => {
  return request({
    method: 'GET',
    url: '/bingo/que/all'
  })
}