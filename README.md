# Simple Opensea clone website

간단한 기능을 가진 Opensea clone 사이트로, ERC-721, ERC-20과 관련된 정보를 얻을 수 있습니다.

### 기능
1. Browse 탭을 통해 Opensea에 등록된 NFT들을 랜덤하게 가져오며 상세보기를 할 수 있습니다.
2. Activity 탭을 통해 특정한 ERC-721의 컨트랙트에서 발행한 NFT와 MetaMask로 로그인한 주인이 가진 NFT들 목록을 확인 할 수 있습니다.
3. Activity 탭에서 MetaMask로 로그인한 주인이 가진 NFT들을 다른 주소로 전송 할 수 있습니다.
4. 로그인 아이콘탭에서 MetaMask로 로그인 할 수 있고 로그인 성공시 색상이 변경됩니다.

### 주의사항
- MetaMask를 로그아웃 하여도 로그인 아이콘 색상은 변경 되지 않습니다.
- ERC-721 입력창에는 NFT를 발행한 ERC-721 컨트랙트 주소를 입력 해야 합니다.
- NFT 전송 시, 전송 받은 상대방 주소도 같은 ERC-721 컨트랙트 주소로 조회해야합니다.
- 전송받을 주소 입력창에 주소를 입력시 다른 NFT목록들의 전송 주소 입력창에도 동시에 입력됩니다.
- Browse 탭을 통해 Opensea의 NFT목록을 받아 올 시 인터넷 상태 또는 해당 NFT의 이미지 파일 여부에 따라 출력되지 않을 수 있습니다.
- 민팅한 NFT가 민팅시 입력한 tokenURL이 이미지주소가 아닌 이미지주소를 포함한 데이터를 담은 .json 주소일 시 보유한 NFT목록이 정상적으로 출력되지 않을 수 있습니다.

