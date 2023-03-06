//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyDPeyI-eHw86wVZeqRR57pxKY6bZ0zuz04",
    authDomain: "rootfresh-4e845.firebaseapp.com",
    projectId: "rootfresh-4e845",
    storageBucket: "rootfresh-4e845.appspot.com",
    messagingSenderId: "961113846886",
    appId: "1:961113846886:web:49c3e65e791037dda929a7",
    measurementId: "G-0E3Y3EFPCP"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };