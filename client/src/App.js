import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import DoAn from "./pages/DoAn";
import Homepage from "./components/homepage";
import SinhVien from "./pages/SinhVien";
import TienDo from "./pages/TienDo";
import SinhVienDeTai from "./pages/SinhVienDeTai";
import SinhVienTienDo from "./pages/SinhVienTienDo";
import SinhVienTienDoCreate from "./pages/SinhVienTienDoCreate";
import AdminTaoHoiDong from "./pages/AdminTaoHoiDong";
import AdminThemHoiDong from "./pages/AdminThemHoiDong";
import GiangVienDuyetDeTai from "./pages/GiangVienDuyetDeTai";
import AdminPhanCongGV from "./pages/AdminPhanCongGV";
import DeTaiDenied from "./pages/DeTaiDenied";
import GiangVienDeCuong from "./pages/GiangVienDeCuong";
import GiangVienDuyetDeCuong from "./pages/GiangVienDuyetDeCuong";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/giangvien/doan" exact component={DoAn}></Route>
          <Route
            path="/giangvien/detai"
            exact
            component={GiangVienDuyetDeTai}
          />
          <Route path="/giangvien/detai/:id" exact component={DeTaiDenied} />
          <Route path="/giangvien/sinhvien" exact component={SinhVien} />
          <Route path="/giangvien/tiendo" exact component={TienDo} />
          <Route path="/sinhvien/detai" exact component={SinhVienDeTai} />
          <Route path="/sinhvien/tiendo" exact component={SinhVienTienDo} />
          <Route
            path="/sinhvien/tiendo/create"
            exact
            component={SinhVienTienDoCreate}
          />
          <Route
            path="/Admin/hoidong/create"
            exact
            component={AdminTaoHoiDong}
          />
          <Route path="/Admin/hoidong/add" exact component={AdminThemHoiDong} />
          <Route path="/Admin/phanconggv" exact component={AdminPhanCongGV} />
          <Route path="/giangvien/decuong" exact component={GiangVienDeCuong} />
          <Route
            path="/giangvien/decuong/duyet"
            exact
            component={GiangVienDuyetDeCuong}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
