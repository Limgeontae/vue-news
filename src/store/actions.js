import { fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo } from '@/api'

export default {
  FETCH__NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_NEWS' , response.data);
      }).catch(error => console.log(error))

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
  FETCH__ITEM(context, id){
    fetchItemInfo(id)
      .then(response => {
        context.commit('SET_ITEM', response.data);
      })
  }
}