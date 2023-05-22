import axios from 'axios';

// 로그인 액션 타입 정의
const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// 로그인 액션 생성자 함수
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

// 로그인 비동기 액션 생성자 함수
export const login = (id, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const data = {
      id: id,
      password: password,
    };
    
    const res = await axios.post('http://localhost:5000/auth/login', data);
    dispatch(loginSuccess());
    return res;
  
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

// 초기 상태 정의
const initialState = {
  loading: false,
  error: null,
};

// 리듀서 함수 정의
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
