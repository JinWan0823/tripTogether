# 🛫 TripTogether 

<div align=center>
<img src="https://github.com/JinWan0823/tripTogether/assets/124158547/a575a8ed-fb86-4a8a-a406-98087b963b7e" width="200"/>
<p ><b>프로젝트 기간 : 2023.06.05 ~ 2023.07.03</b></p>
TripTogether는 한국의 관광지와 축제를 소개하고 여행자들이 소통할 수 있는 웹앱입니다. <br>
다양한 정보를 공유받고, 커뮤니티를 통해 사용자들끼리 좋은 기억을 공유하고,<br> 여행에 동행할 수 있는 동행자를 찾을 수 있도록 도와줍니다.
<br>
 <br>

<span style=font-size:24px><b>🛠 Tech Stacks 🛠 </b></span>
 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><br>
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
 <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

<br>
<br>
<span style=font-size:24px><b>🔥 Environment / Db  🔥 </b></span> <br><br>
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-C71D23?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"><br>

</div>

<br>
<br>

# 🛫 TripTogether 주요 기능

<div>
<h3>메인페이지</h3>
<img src="https://github.com/JinWan0823/tripTogether/assets/124158547/7355e285-de46-4563-942b-8f8797efb330"  width="450"/ >

<br>

- 로그인 유무에 따라 Login/Logout 버튼이 헤더에 렌더링됩니다.
- 배너 밑에 `openweathermap` api를 이용해 사용자 위치 기반 날씨를 렌더링합니다.
- `한국관광공사_국문 관광정보 서비스_GW` api를 이용해 대표 지역 추천 여행지를 렌더링하고, 탭 클릭시 대표 지역의 상태를 변화시켜 다른 지역의 데이터를 렌더링합니다.
- 하단 푸터 영역에서는 firebase를 이용한 커뮤니티에 있는 게시글중 조회수가 가장 높은 4개의 글을 렌더링합니다.

<br><br>

<h3>로그인/회원가입 페이지</h3>

| 로그인 페이지 | 회원가입 페이지 |
| -------- | -------- |
| <img src="https://github.com/JinWan0823/tripTogether/assets/124158547/be17850e-5281-4943-8198-d9ff9ee1d8d8" /> | <img src="https://github.com/JinWan0823/tripTogether/assets/124158547/3d411a56-f84c-4b40-9c55-8758d135b9aa" />   |

- firebase를 이용한 로그인, 회원가입 페이지 입니다.
- 회원가입의 경우 id중복, 비밀번호 길이, 비밀번호 확인의 유효성 검사가 적용되어있습니다.
- context Api를 이용해 회원 user 정보를 저장하고 있습니다. 모든 페이지에서 user 정보를 불러오고 로그인 유무를 확인할 수 있습니다. 

<br><br>

<h3>여행지/축제 리스트 페이지</h3


| 여행지 리스트 페이지 | 축제 리스트 페이지 |
| -------- | -------- |
| <img src="https://github.com/JinWan0823/tripTogether/assets/124158547/e9ae3517-4918-4139-ba9d-511dff863cca" /> | <img src="https://github.com/JinWan0823/tripTogether/assets/124158547/d831d687-b5da-497b-8572-9e173a88ed89" />   |

- 한국의 다양한 관광지/축제를 소개하고 관련 정보와 대표사진을 제공합니다.
- 더보기 버튼을 이용해 데이터를 6개씩 추가해서 볼 수 있습니다.
- 최신순/제목순 탭메뉴를 이용해 데이터를 렌더링 할 수 있습니다.


<br><br>

<h3>여행지/축제 상세 페이지</h3>

<img src="https://github.com/JinWan0823/tripTogether/assets/124158547/d08d4d24-2bcf-45c7-9078-33a363955828" />

<br>

- 여행지/축제의 상세 정보와 이미지를 제공합니다.
- 리스트 페이지 또는 메인 페이지에서 Link를 연결해 데이터의 contentId를 전달하고 contentId를 이용해 상세 정보와 추가 이미지 api를 새로 호출합니다.
- 대표이미지를 제외한 추가 제공 이미지가 있다면 캐러셀로 렌더링되게 하였고, 만약 추가 이미지가 없다면 대표이미지가 렌더링됩니다.

<br><br>

<h3>커뮤니티 리스트 페이지</h3>

<img src="https://github.com/JinWan0823/tripTogether/assets/124158547/29850abb-6acf-4955-b58f-52a038c61984" />

<br>

- firebase의 travel 컬렉션에 게시글을 5개씩 페이지네이션을 이용해 렌더링해옵니다.
- 최신순/조회순을 이용해 상황에 맞는 데이터를 렌더링합니다.
- 로그인을 했다면 작성하기 버튼을 이용해 write 페이지로 넘어갈 수 있습니다.

<br><br>

<h3>커뮤니티 뷰 페이지</h3>

<img src="https://github.com/JinWan0823/tripTogether/assets/124158547/eebd37a8-3b49-46ca-8ffa-587df5736b5b" />

<br>
- list페이지에서 Id를 전달받아 Id와 일치하는 데이터를 불러옵니다. 
- 댓글 폼을 이용해 댓글을 comment 컬렉션에 저장할 수 있습니다. 
- 댓글 리스트에서 comment 컬렉션의 id와 게시글의 id가 일치한다면 댓글을 렌더링합니다. 
- 로그인을 하지 않았다면 댓글을 작성할 수 없다는 알람이 나옵니다.
- 작성자와 현재 회원의 정보가 일치한다면 수정/삭제 버튼이 렌더링됩니다. 

<br><br>

<h3>커뮤니티 글쓰기/수정 페이지</h3>

| 글쓰기 페이지 | 수정 페이지 |
| -------- | -------- |
| <img src="https://github.com/JinWan0823/tripTogether/assets/124158547/6a0dcd6d-24d4-4e34-8438-43e8207bc1fe" /> | <img src="https://github.com/JinWan0823/tripTogether/assets/124158547/6b4aaaf1-5b53-42e9-9cd0-699ae1ab28d0" /> |

<br>

- 로그인을 하지 않았다면 write페이지에 접근하지 못합니다.
- write form을 이용해 travel 컬렉션에 데이터를 저장합니다.
- view 페이지에서 작성자라면 수정버튼을 이용해 edit 페이지로 넘어올 수 있습니다. 기존 입력했던 데이터를 그대로 불러옵니다.
 
</div>

  
