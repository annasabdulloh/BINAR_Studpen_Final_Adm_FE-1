import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import SidebarAdminTiketTersedia from "../components/SidebarAdminTiketTersedia";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import DetailUser1 from "../components/DetailUser1";
import PortalPopup from "../components/PortalPopup";
import "./AdminTiketTersedia.css";

const AdminTiketTersedia = () => {
  const [isSidebarAdminTiketTersediaOpen, setSidebarAdminTiketTersediaOpen] =
    useState(false);
  const navigate = useNavigate();
  const [isDetailUser1PopupOpen, setDetailUser1PopupOpen] = useState(false);
  const [isDetailUser1Popup1Open, setDetailUser1Popup1Open] = useState(false);
  const [isDetailUser1Popup2Open, setDetailUser1Popup2Open] = useState(false);
  const [isDetailUser1Popup3Open, setDetailUser1Popup3Open] = useState(false);

  const openSidebarAdminTiketTersedia = useCallback(() => {
    setSidebarAdminTiketTersediaOpen(true);
  }, []);

  const closeSidebarAdminTiketTersedia = useCallback(() => {
    setSidebarAdminTiketTersediaOpen(false);
  }, []);

  const onNavItemContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavItemContainer2Click = useCallback(() => {
    navigate("/admin-tiketterjual");
  }, [navigate]);

  const onNavItemContainer4Click = useCallback(() => {
    navigate("/admin-tambahtiket1");
  }, [navigate]);

  const onNavItemContainer5Click = useCallback(() => {
    navigate("/admin-datatransfer1");
  }, [navigate]);

  const openDetailUser1Popup = useCallback(() => {
    setDetailUser1PopupOpen(true);
  }, []);

  const closeDetailUser1Popup = useCallback(() => {
    setDetailUser1PopupOpen(false);
  }, []);

  const openDetailUser1Popup1 = useCallback(() => {
    setDetailUser1Popup1Open(true);
  }, []);

  const closeDetailUser1Popup1 = useCallback(() => {
    setDetailUser1Popup1Open(false);
  }, []);

  const openDetailUser1Popup2 = useCallback(() => {
    setDetailUser1Popup2Open(true);
  }, []);

  const closeDetailUser1Popup2 = useCallback(() => {
    setDetailUser1Popup2Open(false);
  }, []);

  const openDetailUser1Popup3 = useCallback(() => {
    setDetailUser1Popup3Open(true);
  }, []);

  const closeDetailUser1Popup3 = useCallback(() => {
    setDetailUser1Popup3Open(false);
  }, []);

  return (
    <>
      <div className="admin-tiket-tersedia">
        <div className="header-section1">
          <div className="header-elements-row1">
            <div className="frame-div50">
              <div
                className="hambuger-menu1"
                onClick={openSidebarAdminTiketTersedia}
              >
                <div className="line-div3" />
                <div className="line-div3" />
                <div className="line-div3" />
              </div>
              <div className="frame-div51">
                <img
                  className="logo-web-icon5"
                  alt=""
                  src="../logo-web@2x.png"
                />
              </div>
            </div>
            <div className="frame-div52">
              <div className="account-section1">
                <img
                  className="notification-bell-icon1"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="profile-picture-icon1"
                  alt=""
                  src="../top_avatar1@2x.png"
                />
              </div>
              <div className="seperator1" />
              <button className="profile1">Profile</button>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="nav-list5">
            <div className="nav-item40">
              <div className="leading-icon-nav-link40">
                <div className="leading-icon40">
                  <img className="home-icon5" alt="" src="../home5.svg" />
                </div>
                <div className="leading-icon40">
                  <div className="dashboard23">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item41" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link40">
                <div className="leading-icon40">
                  <img className="home-icon5" alt="" src="../3-user5.svg" />
                </div>
                <div className="leading-icon40">
                  <div className="dashboard23">User Register</div>
                </div>
              </div>
            </div>
            <div className="nav-item41" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link40">
                <div className="leading-icon40">
                  <img
                    className="home-icon5"
                    alt=""
                    src="../edit-square5.svg"
                  />
                </div>
                <div className="leading-icon40">
                  <div className="dashboard23">Tiket Terjual</div>
                </div>
              </div>
            </div>
            <div className="nav-item43">
              <div className="leading-icon-nav-link40">
                <div className="leading-icon40">
                  <img className="home-icon5" alt="" src="../image5.svg" />
                </div>
                <div className="leading-icon40">
                  <div className="tiket-tersedia1">Tiket Tersedia</div>
                </div>
              </div>
            </div>
            <div className="nav-item41" onClick={onNavItemContainer4Click}>
              <div className="leading-icon-nav-link40">
                <div className="leading-icon40">
                  <img className="home-icon5" alt="" src="../document5.svg" />
                </div>
                <div className="leading-icon40">
                  <div className="dashboard23">Tambah Tiket</div>
                </div>
              </div>
            </div>
            <div className="nav-item45" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link45">
                <div className="leading-icon45">
                  <img className="home-icon5" alt="" src="../chat1.svg" />
                </div>
                <div className="leading-icon40">
                  <div className="dashboard23">Data Transfer</div>
                </div>
              </div>
            </div>
            <div className="nav-item46">
              <div className="leading-icon-nav-link40">
                <div className="leading-icon40">
                  <img className="home-icon5" alt="" src="../setting5.svg" />
                </div>
                <div className="leading-icon40">
                  <div className="dashboard23">Settings</div>
                </div>
              </div>
            </div>
            <div className="logout-toogle5">
              <div className="nav-item47">
                <div className="leading-icon-nav-link40">
                  <div className="leading-icon47">
                    <img className="logout-icon5" alt="" src="../logout5.svg" />
                  </div>
                  <div className="leading-icon47">
                    <div className="dashboard25">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-layout-frame1">
            <div className="title-frame1">
              <div className="frame-div53">
                <div className="frame-div54">
                  <div className="frame-div55">
                    <div className="frame-div56">
                      <div className="frame-div57">
                        <div className="tiket-tersedia2">Tiket Tersedia</div>
                      </div>
                      <div className="frame-div58">
                        <div className="description1">
                          Daftar Tiket Tersedia
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-div59">
                <div className="frame-div60">
                  <div className="frame-div61">
                    <TextField
                      className="group-textfield"
                      sx={{ width: 335 }}
                      color="info"
                      variant="outlined"
                      type="search"
                      label="Cari sesuatu"
                      placeholder="Cari Sesuatu"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <div className="frame-div62">
                  <TextField
                    className="group-textfield"
                    sx={{ width: 354 }}
                    color="info"
                    variant="outlined"
                    type="search"
                    label="Cari sesuatu"
                    placeholder="Cari Sesuatu"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className="frame-div63">
                  <div className="frame-div64">
                    <div className="frame-div65">
                      <div className="frame-div66">
                        <div className="kelas-ekonomi">Kelas Ekonomi</div>
                        <div className="frame-div67">
                          <Button
                            className="frame-button5"
                            sx={{ width: 85 }}
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={openDetailUser1Popup}
                          >
                            Tersedia
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div68">
                      <div className="frame-div69">
                        <div className="frame-div70">
                          <img
                            className="logo-web-icon6"
                            alt=""
                            src="../logo-web6@2x.png"
                          />
                        </div>
                        <i className="boarding-pass">BOARDING PASS</i>
                      </div>
                    </div>
                    <div className="frame-div71">
                      <div className="no-tiket-pesawat">No Tiket Pesawat</div>
                      <div className="jakarta">HCBD021</div>
                    </div>
                    <div className="frame-div72">
                      <div className="nomor-penerbangan">Nomor Penerbangan</div>
                      <div className="jakarta">H240/A12</div>
                    </div>
                    <div className="frame-div73">
                      <div className="dari">Dari</div>
                      <div className="jakarta">Jakarta</div>
                    </div>
                    <div className="frame-div74">
                      <div className="tujuan">Tujuan</div>
                      <div className="jakarta">Bali</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div63">
                  <div className="frame-div64">
                    <div className="frame-div65">
                      <div className="frame-div66">
                        <div className="kelas-ekonomi">Kelas Ekonomi</div>
                        <div className="frame-div67">
                          <Button
                            className="frame-button5"
                            sx={{ width: 85 }}
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={openDetailUser1Popup1}
                          >
                            Tersedia
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div68">
                      <div className="frame-div69">
                        <div className="frame-div70">
                          <img
                            className="logo-web-icon6"
                            alt=""
                            src="../logo-web6@2x.png"
                          />
                        </div>
                        <i className="boarding-pass">BOARDING PASS</i>
                      </div>
                    </div>
                    <div className="frame-div71">
                      <div className="no-tiket-pesawat">No Tiket Pesawat</div>
                      <div className="jakarta">HCBD021</div>
                    </div>
                    <div className="frame-div72">
                      <div className="nomor-penerbangan">Nomor Penerbangan</div>
                      <div className="jakarta">H240/A12</div>
                    </div>
                    <div className="frame-div73">
                      <div className="dari">Dari</div>
                      <div className="jakarta">Jakarta</div>
                    </div>
                    <div className="frame-div74">
                      <div className="tujuan">Tujuan</div>
                      <div className="jakarta">Bali</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div63">
                  <div className="frame-div64">
                    <div className="frame-div65">
                      <div className="frame-div66">
                        <div className="kelas-ekonomi">Kelas Ekonomi</div>
                        <div className="frame-div67">
                          <Button
                            className="frame-button5"
                            sx={{ width: 85 }}
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={openDetailUser1Popup2}
                          >
                            Tersedia
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div68">
                      <div className="frame-div69">
                        <div className="frame-div70">
                          <img
                            className="logo-web-icon6"
                            alt=""
                            src="../logo-web6@2x.png"
                          />
                        </div>
                        <i className="boarding-pass">BOARDING PASS</i>
                      </div>
                    </div>
                    <div className="frame-div71">
                      <div className="no-tiket-pesawat">No Tiket Pesawat</div>
                      <div className="jakarta">HCBD021</div>
                    </div>
                    <div className="frame-div72">
                      <div className="nomor-penerbangan">Nomor Penerbangan</div>
                      <div className="jakarta">H240/A12</div>
                    </div>
                    <div className="frame-div73">
                      <div className="dari">Dari</div>
                      <div className="jakarta">Jakarta</div>
                    </div>
                    <div className="frame-div74">
                      <div className="tujuan">Tujuan</div>
                      <div className="jakarta">Bali</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div63">
                  <div className="frame-div64">
                    <div className="frame-div65">
                      <div className="frame-div66">
                        <div className="kelas-ekonomi">Kelas Ekonomi</div>
                        <div className="frame-div67">
                          <Button
                            className="frame-button5"
                            sx={{ width: 85 }}
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={openDetailUser1Popup3}
                          >
                            Tersedia
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div68">
                      <div className="frame-div69">
                        <div className="frame-div70">
                          <img
                            className="logo-web-icon6"
                            alt=""
                            src="../logo-web6@2x.png"
                          />
                        </div>
                        <i className="boarding-pass">BOARDING PASS</i>
                      </div>
                    </div>
                    <div className="frame-div71">
                      <div className="no-tiket-pesawat">No Tiket Pesawat</div>
                      <div className="jakarta">HCBD021</div>
                    </div>
                    <div className="frame-div72">
                      <div className="nomor-penerbangan">Nomor Penerbangan</div>
                      <div className="jakarta">H240/A12</div>
                    </div>
                    <div className="frame-div73">
                      <div className="dari">Dari</div>
                      <div className="jakarta">Jakarta</div>
                    </div>
                    <div className="frame-div74">
                      <div className="tujuan">Tujuan</div>
                      <div className="jakarta">Bali</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div111">
                  <div className="frame-div112">
                    <div className="no">No</div>
                    <div className="nama-user4">Nama User</div>
                    <div className="dari-tujuan">Dari-Tujuan</div>
                    <div className="no-tiket">No. Tiket</div>
                    <div className="no-penerbangan">No. Penerbangan</div>
                    <div className="status">Status</div>
                  </div>
                  <div className="frame-div113">
                    <div className="frame-div114">
                      <b className="kelas-ekonomi4">Kelas Ekonomi</b>
                      <img
                        className="image-57-icon"
                        alt=""
                        src="../image-57@2x.png"
                      />
                      <Button
                        sx={{ width: 121 }}
                        variant="contained"
                        color="success"
                        size="large"
                      >
                        Detail
                      </Button>
                    </div>
                    <div className="daftar-user3">
                      <div className="frame-div115">
                        <div className="frame-div70">
                          <div className="frame-div117">
                            <div className="frame-div70">
                              <img
                                className="logo-web-icon6"
                                alt=""
                                src="../logo-web10@2x.png"
                              />
                            </div>
                            <i className="boarding-pass">BOARDING PASS</i>
                          </div>
                        </div>
                        <div className="frame-div119">
                          <div className="frame-div120">
                            <div className="frame-div121">
                              <div className="frame-div122">
                                <div className="nomor-tiket-pesawat">
                                  Nomor Tiket Pesawat :
                                </div>
                                <div className="nomor-penerbangan4">
                                  Nomor Penerbangan :
                                </div>
                                <div className="nomor-penerbangan4">Dari :</div>
                                <div className="nomor-penerbangan4">
                                  Tujuan :
                                </div>
                              </div>
                              <div className="frame-div123">
                                <div className="hcbd0214">HCBD021</div>
                                <div className="h240a124">H240/A12</div>
                                <div className="jakarta4">Jakarta</div>
                                <div className="bali4">Bali</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-div124">
                          <div className="frame-div125">
                            <div className="harga-tiket">Harga Tiket</div>
                            <b className="rp-2500000">Rp. 2.500.000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-div113">
                    <div className="frame-div114">
                      <b className="kelas-ekonomi4">Kelas Ekonomi</b>
                      <img
                        className="image-57-icon"
                        alt=""
                        src="../image-57@2x.png"
                      />
                      <Button
                        sx={{ width: 121 }}
                        variant="contained"
                        color="success"
                        size="large"
                      >
                        Detail
                      </Button>
                    </div>
                    <div className="daftar-user3">
                      <div className="frame-div115">
                        <div className="frame-div70">
                          <div className="frame-div117">
                            <div className="frame-div70">
                              <img
                                className="logo-web-icon6"
                                alt=""
                                src="../logo-web10@2x.png"
                              />
                            </div>
                            <i className="boarding-pass">BOARDING PASS</i>
                          </div>
                        </div>
                        <div className="frame-div119">
                          <div className="frame-div120">
                            <div className="frame-div121">
                              <div className="frame-div122">
                                <div className="nomor-tiket-pesawat">
                                  Nomor Tiket Pesawat :
                                </div>
                                <div className="nomor-penerbangan4">
                                  Nomor Penerbangan :
                                </div>
                                <div className="nomor-penerbangan4">Dari :</div>
                                <div className="nomor-penerbangan4">
                                  Tujuan :
                                </div>
                              </div>
                              <div className="frame-div123">
                                <div className="hcbd0214">HCBD021</div>
                                <div className="h240a124">H240/A12</div>
                                <div className="jakarta4">Jakarta</div>
                                <div className="bali4">Bali</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-div124">
                          <div className="frame-div125">
                            <div className="harga-tiket">Harga Tiket</div>
                            <b className="rp-2500000">Rp. 2.500.000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-div113">
                    <div className="frame-div114">
                      <b className="kelas-ekonomi4">Kelas Ekonomi</b>
                      <img
                        className="image-57-icon"
                        alt=""
                        src="../image-57@2x.png"
                      />
                      <Button
                        sx={{ width: 121 }}
                        variant="contained"
                        color="success"
                        size="large"
                      >
                        Detail
                      </Button>
                    </div>
                    <div className="daftar-user3">
                      <div className="frame-div115">
                        <div className="frame-div70">
                          <div className="frame-div117">
                            <div className="frame-div70">
                              <img
                                className="logo-web-icon6"
                                alt=""
                                src="../logo-web10@2x.png"
                              />
                            </div>
                            <i className="boarding-pass">BOARDING PASS</i>
                          </div>
                        </div>
                        <div className="frame-div119">
                          <div className="frame-div120">
                            <div className="frame-div121">
                              <div className="frame-div122">
                                <div className="nomor-tiket-pesawat">
                                  Nomor Tiket Pesawat :
                                </div>
                                <div className="nomor-penerbangan4">
                                  Nomor Penerbangan :
                                </div>
                                <div className="nomor-penerbangan4">Dari :</div>
                                <div className="nomor-penerbangan4">
                                  Tujuan :
                                </div>
                              </div>
                              <div className="frame-div123">
                                <div className="hcbd0214">HCBD021</div>
                                <div className="h240a124">H240/A12</div>
                                <div className="jakarta4">Jakarta</div>
                                <div className="bali4">Bali</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-div124">
                          <div className="frame-div125">
                            <div className="harga-tiket">Harga Tiket</div>
                            <b className="rp-2500000">Rp. 2.500.000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSidebarAdminTiketTersediaOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSidebarAdminTiketTersedia}
        >
          <SidebarAdminTiketTersedia onClose={closeSidebarAdminTiketTersedia} />
        </PortalDrawer>
      )}
      {isDetailUser1PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetailUser1Popup}
        >
          <DetailUser1 onClose={closeDetailUser1Popup} />
        </PortalPopup>
      )}
      {isDetailUser1Popup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetailUser1Popup1}
        >
          <DetailUser1 onClose={closeDetailUser1Popup1} />
        </PortalPopup>
      )}
      {isDetailUser1Popup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetailUser1Popup2}
        >
          <DetailUser1 onClose={closeDetailUser1Popup2} />
        </PortalPopup>
      )}
      {isDetailUser1Popup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetailUser1Popup3}
        >
          <DetailUser1 onClose={closeDetailUser1Popup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminTiketTersedia;
