# Axios Interceptors

- HTTP 요청 및 응답을 처리하기 전후에 사용자 정의 로직을 수행할 수 있는 기능.

1. Request Interceptors(요청 인터셉터)
- 클라이언트에서 HTTP 요청을 서버로 전송하기 전에 실행
- 주로 사용되는 방식
  - request config 수정
  - 헤더 수정
  - 인증 관련 작업(토큰 추가)
  - 로깅
  - 로딩 상태 관리

2. Response Interceptors(응답 인터셉터) 
- 서버에서 응답을 받은 후 Axios가 응답 데이터를 반환하기 전에 실행
- 주로 사용되는 방식
  - response data 가공 및 수정
  - 전역 에러 핸들링
  - 로깅
  - 로딩 상태 관리
  - response를 프로젝트에 반영하기 전에 할 수 있는 작업들

## Reference
- https://axios-http.com/kr/docs/interceptors
- https://brunch.co.kr/@14e1a0684a6c4d5/6