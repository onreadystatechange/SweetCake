import * as types from '../action-types'
import {fetchDetailList,fetchUserCollect} from '../../api/detail'
export default {
    //获取后台详情列表数据
    fetchDetailLists(index){
        //调用fetch方法获取后台返回的数据。then里面放着成功的回调，成功的回调里里参数是列表数据,然后把此数据派发给仓库
        return dispatch => {
            fetchDetailList(index).then(value => {
                //console.log(value);//{...}//返回的那一项
                dispatch({
                    type: types.FETCH_DETAIL_LIST,
                    payload: value
                })
            })
        }
    },
    fetchUserCollect(id){
        return dispatch => {
            fetchUserCollect(id).then(value => {
                dispatch({
                    type: types.FETCH_USER_COLLECT,
                    payload: value
                })
            })
        }
    }
}