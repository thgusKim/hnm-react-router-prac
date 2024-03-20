import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션바 만들기
// 2. 전체상품페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 3. 상품 디테일을 눌렀으나 로그인이 안되어있다면 로그인 페이지가 나온다.
// 4. 로그인이 되어있을 경우, 상품 디테일 페이지가 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보임.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
