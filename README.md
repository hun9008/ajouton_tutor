# ajouton_AMENTO
AMENTO는 멘토링 일지 작성과 일정 관리를 도와주는 자동화 시스템입니다.
<img width="552" alt="image" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/f5677b47-809a-4241-bfe2-214eaece8642">

---
## 🖋️기획 배경

- 멘토는 반복적이고 단순한 보고서 작성이 귀찮다.
- 멘토, 멘티간 약속 시간을 정하는 과정이 번거롭다.

---
## 🎯주요 기능

1. 멘토 링크 생성 페이지
<img width="559" alt="Screenshot 2023-10-30 at 10 51 57 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/09ca23da-1a07-46f8-b214-4dd2579392d7">

- 멘토가 (초기에 딱 한번) 예약 페이지를 생성하는 페이지(멘토와 멘티 정보 등록)
	- 튜터링 예약 서비스를 사용할 튜터의 정보(이름, 이메일, 구글 캘린더 로그인), 튜티들의 정보(이름, 이메일), 과목 정보(과목 코드나 설명 등)을 등록하는 페이지.
	- 등록을 마치고나면 URL이 발급되고 이 링크를 튜터가 아주Bb 공지사항에 올려두면 학생들이 이 링크를 타고 들어와 튜터링 예약을 신청할 수 있음.
	- 구글 캘린더와 연동할 계정을 미리 등록하게 됨. (구글 로그인)

---
2. 튜터링 예약 신청 페이지
<img width="559" alt="Screenshot 2023-10-30 at 11 04 02 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/d8d6ee23-67f4-4317-af0d-71b8dc8113d1">

- 멘티가 (한 학기 동안) 튜터링 예약 신청 페이지
- 학생들이 원하는 질문과 시간을 예약하는 페이지
	- 튜터링 받고자 하는 학번, 날짜, 시간, 장소, 질문 내용을 입력받고 신청하기 버튼을 누르면 튜터링을 예약할 수 있는 페이지
	- 튜터링을 받고 싶은 학생들이 들어와서 사용함.
	- 학번, 날짜, 시간, 장소, 질문 내용을 가지고 신청하면 튜터와 튜티들에게 예약 정보 이메일로 미리 전송하게 됨.
	- 튜터가 사전에 연동했던 구글 캘린더로 일정이 자동으로 등록됨.
	- 튜터와 튜티는 서로 약속한 장소와 시간대에 만나 튜터링을 진행할 수 있음.
	- 튜티에게 보내는 이메일에는 튜터링 후 사진과 함께 만족도 조사를 작성할 수 있는 임시 생성 URL이 같이 전달됨. 튜티는 튜터링이 끝나고 이 링크에서 사진을 등록할 수 있음.

---
3. 튜터링 활동 만족도 조사 페이지
<img width="556" alt="Screenshot 2023-10-30 at 11 05 30 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/3c3419d7-b8d7-43e5-80ee-a5533fe68585">

- (튜터링이 끝나고) 만족도 설문 페이지 (튜티가 튜터링 현장 사진과 함께 튜터링을 평가할 수 있는 페이지)
    - 튜티는 예약할 때 메일로 같이 온 설문 URL을 통해 튜터링이 끝나고 현장 사진을 찍어 업로드 함.
    - 튜티는 사진 업로드와 함께 튜터링에서 배운 점, 좋았던 점 등을 짤막하게 텍스트로 입력하게 됨.
    - 제출 버튼을 누르면 첨부한 사진과 내용이 자동으로 서버에 전송되어 시간과 함께 데이터베이스로 저장됨.
---
4. 튜터링 일지 자동 작성 PDF 다운로드 페이지
<img width="558" alt="Screenshot 2023-10-30 at 11 07 43 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/e482e279-1e97-4a6e-980f-612c9f285ac7">
- (매 달 마다) 튜터링 일지 PDF 다운로드 페이지 (튜터링 일지를 다운받을 때)
    - 튜터가 튜터링 활동들을 일지로 작성해 학교에 제출할 때 사용함
    - 자동으로 기록된 튜터링 활동들을 일지로 만들어 PDF 파일 생성.
    - 튜터는 이 페이지에서 PDF에 포함시킬 활동들을 체크박스 메뉴로 선택할 수 있음.
    - 다운로드 버튼을 누르면 미리 정해진 형식의 일지에 활동 내역들을 채워 자동으로 만들어진 PDF를 다운로드 받을 수 있음

---
## 🔨기술 스택(Technique Used)

	Back-end

| FastAPI | Python | SQLite |
| --- | --- | --- |
| <img width="89" alt="Screenshot 2023-10-30 at 11 11 29 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/53491292-c1fc-40ef-ad27-6061b98de8df"> | <img width="89" alt="Screenshot 2023-10-30 at 11 13 26 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/99eb67b3-cf1a-437a-9360-5c7aad800bcf"> | <img width="91" alt="Screenshot 2023-10-30 at 11 14 08 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/2b9d82ae-3ee0-4fab-9101-ce761c74a6dd"> |




	Front-end

| React |
| --- |
| ![logo192](https://github.com/hun9008/ajouton_tutor/assets/79917152/2ec62a24-2804-443f-b322-2fe54e0c625e) |

	Design

| Figma |
| --- |
| <img width="88" alt="Screenshot 2023-10-30 at 11 15 57 PM" src="https://github.com/hun9008/ajouton_tutor/assets/79917152/35e9ec28-900b-462c-b178-f46215b17ab2"> |

---
## 팀 정보(Team Information)

| Name | Role | github|
| --- | --- | --- |
| 김경수 | Back-end | https://github.com/KyoungsueKim |
| 문경호 | Back-end | https://github.com/Ba-koD |
| 정용훈 | Front-end | https://github.com/hun9008 |
| 조나애 | Front-end | https://github.com/tinon1004 |
| 정제니퍼 | Design | |
