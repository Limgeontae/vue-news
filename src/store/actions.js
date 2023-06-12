import { fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo } from '@/api'

export default {
  async FETCH__NEWS(context) {
    let response =  await fetchNewsList()
    console.log(response.data);
    context.commit('SET_NEWS', response.data)
    return response
  },
  FETCH__ASK(context){
    fetchAskList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_ASK', response.data);
      })
  },
  FETCH__JOBS(context){
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data);
      })
  },
  FETCH__USER(context, name){
    fetchUserInfo(name)
      .then(response => {
        console.log(response.data)
        context.commit('SET_USER', response.data);
      })
  },
  FETCH__ITEM ({commit},id){
    fetchItemInfo(id)
      .then(response => {
        commit('SET_ITEM', response.data);
      })
  }
}