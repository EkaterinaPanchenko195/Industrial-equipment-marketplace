import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import { Login } from "./pages/Login/Login";
import { WrongAddress } from "./pages/WrongAddress/WrongAddress";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { Home } from "./pages/Home/Home";
import { AddNewProduct } from "./pages/AddNewProduct/AddNewProduct";
import { UserProfile } from "./pages/ UserProfile/ UserProfile";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { SignUp } from "./pages/SignUp/SignUp";
import { Footer } from "./components/Footer/Footer";
import { EnterСode } from "./pages/ForgotPassword/EnterСode";
import { ResetPassword } from "./pages/ForgotPassword/ResetPassword";
import SeeAll from "./pages/SeeAll/SeeAll";
import { Categories } from "./pages/Categories/Categories";
import { CategorieLaser } from "./pages/Categories/CategorieLaser/CategorieLaser";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<WrongAddress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/post-an-offer" element={<AddNewProduct />} />
          <Route path="/enter-code" element={<EnterСode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/see-all" element={<SeeAll />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categorieLaser" element={<CategorieLaser />} />

          
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
