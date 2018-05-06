# 엘리먼트 배치(layout / rendering)

* display
* position
* float

## display 속성

1. block : 벽돌 같이 위아래로 배치된다.
2. inline : 기본 우측으로 흐르며, 공간이 없으면 아래쪽으로 빈자리를 차지한다.
* inline 속성을 가진 태그가 적으므로, 이것만 알아두자! (span, a, strong)

## position 속성

1. static: 기본 속성. 순서대로 배치된다.
2. absolute: top/left/right/bottom으로 설정. static이 아닌 position의 속성이 기준점
3. relative: top/left/right/bottom으로 설정. 원래 자신이 위치해야 할 곳을 기준으로 이동
4. fixed: 좌측 맨 위를 기준으로 동작

### 기타 내용

#### 엘리먼트가 배치되는 방식 (margin:10px)

margin으로 배치가 달라질 수 있습니다.

margin은 위 / 아래 / 좌 / 우 엘리먼트와 본인 간의 간격입니다.

따라서 그 간격만큼 내 위치가 달라집니다.


#### 엘리먼트가 배치되는 방식 (float:left)

float 속성으로 원래 flow에서 벗어날 수 있고 둥둥 떠다닐 수 있습니다.

일반적인 배치에 따라서 배치된 상태에서 float는 벗어난 형태로 특별히 배치됩니다.

따라서 뒤에 block엘리먼트가 float 된 엘리먼트를 의식하지 못하고 중첩돼서 배치됩니다.


float의 속성은 이런 특이성 때문에 웹사이트의 전체 레이아웃 배치에서 유용하게 활용됩니다.


#### 엘리먼트가 배치되는 방식 (box-model)

블록 엘리먼트의 경우 box의 크기와 간격에 관한 속성으로 배치를 추가 결정합니다.

margin, padding, border, outline으로 생성되는 것입니다.

box-shadow 속성도 box-model에 포함지어 설명할 수 있습니다.

box-shadow는 border 밖에 테두리를 그릴 수 있는 속성입니다.


#### 엘리먼트의 크기

block엘리먼트의 크기는 기본적으로는 부모의 크기만큼을 가집니다.

예를 들어, width:100%는 부모의 크기만큼을 다 갖는 것과 같습니다.


#### box-sizing과 padding

padding 속성을 늘리면 엘리먼트의 크기가 달라질 수 있습니다.

box-sizing 속성으로 이를 컨트롤 할 수 있습니다.

box-sizing 속성을 border-box로 설정하면 엘리먼트의 크기를 고정하면서 padding 값만 늘릴 수 있습니다.



#### layout 구현방법은?

전체 레이아웃은 float를 잘 사용해서 2단, 3단 컬럼 배치를 구현합니다.

최근에는 css-grid나 flex 속성 등 layout을 위한 속성을 사용하기 시작했으며 브라우저 지원범위를 확인해서 사용하도록 합니다.

특별한 위치에 배치하기 위해서는 position absolute를 사용하고, 기준점을 relative로 설정합니다.

네비게이션과 같은 엘리먼트는 block 엘리먼트를 inline-block으로 변경해서 가로로 배치하기도 합니다.

엘리먼트안의 텍스트의 간격과 다른 엘리먼트간의 간격은 padding과 margin 속성을 잘 활용해서 위치시킵니다.