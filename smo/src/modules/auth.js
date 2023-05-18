// Ducks 패턴으로 Redux 모듈 작성
//Redux 애플리케이션의 코드 구조를 단순화하기 위해 사용되는 방법 중 하나입니다. 이 패턴에서는 액션 유형, 액션 생성자 함수, 리듀서 함수를 한 모듈로 묶어서 관리

// auth.js

// 액션 유형 정의
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGOUT = 'auth/LOGOUT';

// 초기 상태 정의
const initialState = {
  isLoggedIn: false,
  user: null,
};

// 액션 생성자 함수
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

// 리듀서 함수
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
