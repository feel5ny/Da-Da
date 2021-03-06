import * as types from '../actions/ActionTypes'
import API_HOST from '../config'

// 1. db 값 받는 action
export const fetchWeightFromDB = () => {
  return dispatch => {
    fetch(`${API_HOST}/diary/kg`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.FETCHED_WEIGHT_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        console.log('fetchWeightLogsToDB error')
      })
  }
}

// 2. input에서 받은 값을 db로 보내는 action(post)
export const postWeightToDB = requestBody => {
  return dispatch => {
    fetch(`${API_HOST}/diary/kg`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(res => {
        if (res.ok) {
          return fetch(`${API_HOST}/diary/kg`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${window
                .localStorage.token}`,
            },
          })
            .then(res => res.json())
            .then(data => {
              // console.log(data)
              dispatch({
                type:
                  types.POST_AND_GET_WEIGHT_SUCCESS,
                payload: data,
              })
              dispatch({
                type: types.UPDATE_WEIGHT_CHART,
                payload: data.shift(),
              })
            })
            .catch(error => {
              console.log(
                'POSTandGETWeightLogsToDB error',
              )
            })
        }
      })
      .catch(error => {
        console.log('postWeightToDB error')
      })
  }
}

// 3. delete
export const deleteWeightOfDB = id => {
  return dispatch => {
    fetch(`${API_HOST}/weight/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          return fetch(`${API_HOST}/diary/kg`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${window
                .localStorage.token}`,
            },
          })
            .then(res => res.json())
            .then(data => {
              dispatch({
                type:
                  types.DELETE_AND_GET_WEIGHT_SUCCESS,
                payload: data,
              })
            })
            .catch(error => {
              console.log(
                'DeleteandGETWeightLogsToDB error',
              )
            })
        }
      })
      .catch(error => {
        console.log(
          'DeleteandGETWeightLogsToDB error',
        )
      })
  }
}

// 4. get All (등록된 모든 체중 get)
export const getAllWeightFromDB = () => {
  return dispatch => {
    dispatch({
      type: types.GET_WEIGHT_ALL_REQUEST,
    })
    fetch(`${API_HOST}/weight/all`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.allDayLog)
        let chartData = []
        data.allDayLog.map(aDay => {
          if (!aDay.day_log_kg) {
            return
          }

          chartData.push({
            current: aDay.day_log_kg,
            date: aDay.day_log_diary_date
              .substr(5, 5)
              .replace('-', '/'),
            goal: data.goal_weight,
          })
        })
        console.log(chartData, '<<')
        dispatch({
          type: types.GET_WEIGHT_ALL_SUCCESS,
          payload: {
            allLog: chartData.reverse(),
            goalWeight: data.goal_weight,
          },
        })
      })
      .catch(error => {
        type: types.GET_WEIGHT_ALL_FAILED
        console.error(error)
      })
  }
}

// 5. 특정 날짜의 체중 get
export const getWeightByDate = date => {
  return dispatch => {
    dispatch({
      type: types.GET_WEIGHT_BY_DATE_REQUEST,
    })
    fetch(`${API_HOST}/weight?date=${date}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_WEIGHT_BY_DATE_SUCCESS,
          payload: data,
        }).catch(error => {
          dispatch({
            type: types.GET_WEIGHT_BY_DATE_FAILED,
          })
          console.error(error)
        })
      })
  }
}
