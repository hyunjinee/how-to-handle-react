브라우저의 localStorage 혹은 sessionStorage에 토큰을 담으면 사용하기가 매우 편리하고 구현하기도 쉽다. 하지만 만약 누국ㄴ가가 페이지에 악성 스크립트를 삽입한다면, 쉽게 토큰을 탈취할 수 있다. 이러한 공격을 XSS라고 부른다 cross site scripting



쿠키에 담아도 문제가발생할 수 있지만 httpOnly라는 속성을 활서오하하면 자바스크립트를 통해 쿠키를 조회할 수 없으므로 악성 스크립트로부터 안전하다. 그 대신 CSRF(Cross Site Request Forgery) 라는 공격에 취약해질 수 있다. 이 공격은 토큰을 쿠키에 담으면 사용자가 서버로 요청을 할 때마다 무조건 토큰이 함께 전달되는점을 이용해서 사용자가 모르게 원하지 않는 API요청을 하게 만든다. 예를 들어서 사용자가 자기도 모르는 상황에서 어떠한 글을 작성하거나 삭제하거나 또는 탈퇴하게 만들 수 있다.

단 CSRF는 CSRF토큰 사용및 Referer검증 등의 방식으로 제대로 막을수 있는 반면, XSS는 보안장치를 적용해 놓아도 개발자가 놓칠 수 있는 다양한 취약점을 통해 공격을 받을 수 있다.