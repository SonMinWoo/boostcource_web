# css의 style을 적용하는 방법

1. inline
HTML태그 내에 직접 적용한다.
`<p style="border:1px solid gray;color:red;font-size:2em;">?`

2. internal
style 태그로 지정한다. 구조와 스타일이 섞여 유지보수가 어렵다.
`<head><style>p  {font-size : 2em;border:1px solid gray; color: red;}</style></head>`

3. external
외부 파일로 지정한다. css파일로 분리하고 합치는 방법으로, 현업에서 사용한다.
`<head><link rel="stylesheet" href="style.css"></head>`

## 우선순위
inline이 최고 우선순위를 가지고, internal과 external은 동등한 우선순위를 가진다.
겹치는 선언이 있으면 나중에 선언된 속성이 반영된다.
