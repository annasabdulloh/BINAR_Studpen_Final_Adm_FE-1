import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminDaftarUser1 from "./pages/AdminDaftarUser1";
import AdminTiketTerjual from "./pages/AdminTiketTerjual";
import AdminTambahTiket from "./pages/AdminTambahTiket";
import AdminDataTransfer from "./pages/AdminDataTransfer";
import AdminTiketTersedia from "./pages/AdminTiketTersedia";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-tiketterjual":
        title = "";
        metaDescription = "";
        break;
      case "/admin-tambahtiket1":
        title = "";
        metaDescription = "";
        break;
      case "/admin-datatransfer1":
        title = "";
        metaDescription = "";
        break;
      case "/admin-tikettersedia1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminDaftarUser1 />} />

      <Route path="/admin-tiketterjual" element={<AdminTiketTerjual />} />

      <Route path="/admin-tambahtiket1" element={<AdminTambahTiket />} />

      <Route path="/admin-datatransfer1" element={<AdminDataTransfer />} />

      <Route path="/admin-tikettersedia1" element={<AdminTiketTersedia />} />
    </Routes>
  );
}
export default App;
