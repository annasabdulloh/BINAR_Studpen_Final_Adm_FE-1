import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SidebarAdminDaftarUser from "../components/SidebarAdminDaftarUser";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import DetailUser1 from "../components/DetailUser1";
import PortalPopup from "../components/PortalPopup";
import Popup from "../components/Popup";
import DetailUser2 from "../components/DetailUser2";
import "./AdminDaftarUser1.css";

const AdminDaftarUser1 = () => {
  const [isSidebarAdminDaftarUserOpen, setSidebarAdminDaftarUserOpen] =
    useState(false);
  const navigate = useNavigate();
  const [isDetailUser1PopupOpen, setDetailUser1PopupOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isDetailUser2PopupOpen, setDetailUser2PopupOpen] = useState(false);
  const [isPopup1Open, setPopup1Open] = useState(false);

  const openSidebarAdminDaftarUser = useCallback(() => {
    setSidebarAdminDaftarUserOpen(true);
  }, []);

  const closeSidebarAdminDaftarUser = useCallback(() => {
    setSidebarAdminDaftarUserOpen(false);
  }, []);

  const onNavItemContainer2Click = useCallback(() => {
    navigate("/admin-tiketterjual");
  }, [navigate]);

  const onNavItemContainer3Click = useCallback(() => {
    navigate("/admin-tikettersedia1");
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

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const openDetailUser2Popup = useCallback(() => {
    setDetailUser2PopupOpen(true);
  }, []);

  const closeDetailUser2Popup = useCallback(() => {
    setDetailUser2PopupOpen(false);
  }, []);

  const openPopup1 = useCallback(() => {
    setPopup1Open(true);
  }, []);

  const closePopup1 = useCallback(() => {
    setPopup1Open(false);
  }, []);

  return (
    <>
      <div className="admin-daftar-user1">
        <div className="header-section5">
          <div className="header-elements-row5">
            <div className="frame-div372">
              <div
                className="hambuger-menu5"
                onClick={openSidebarAdminDaftarUser}
              >
                <div className="line-div15" />
                <div className="line-div15" />
                <div className="line-div15" />
              </div>
              <div className="frame-div373">
                <img
                  className="logo-web-icon20"
                  alt=""
                  src="../logo-web@2x.png"
                />
              </div>
            </div>
            <div className="frame-div374">
              <div className="account-section5">
                <img
                  className="notification-bell-icon5"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="profile-picture-icon5"
                  alt=""
                  src="../top_avatar1@2x.png"
                />
              </div>
              <div className="seperator5" />
              <button className="profile5">Profile</button>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="nav-list9">
            <div className="nav-item72">
              <div className="leading-icon-nav-link72">
                <div className="leading-icon72">
                  <img className="home-icon9" alt="" src="../home9.svg" />
                </div>
                <div className="leading-icon72">
                  <div className="dashboard35">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item73">
              <div className="leading-icon-nav-link72">
                <div className="leading-icon72">
                  <img className="home-icon9" alt="" src="../3-user9.svg" />
                </div>
                <div className="leading-icon72">
                  <div className="user-register5">User Register</div>
                </div>
              </div>
            </div>
            <div className="nav-item74" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link72">
                <div className="leading-icon72">
                  <img
                    className="home-icon9"
                    alt=""
                    src="../edit-square9.svg"
                  />
                </div>
                <div className="leading-icon72">
                  <div className="dashboard35">Tiket Terjual</div>
                </div>
              </div>
            </div>
            <div className="nav-item74" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link72">
                <div className="leading-icon72">
                  <img className="home-icon9" alt="" src="../image9.svg" />
                </div>
                <div className="leading-icon72">
                  <div className="dashboard35">Tiket Tersedia</div>
                </div>
              </div>
            </div>
            <div className="nav-item74" onClick={onNavItemContainer4Click}>
              <div className="leading-icon-nav-link76">
                <div className="leading-icon72">
                  <img className="home-icon9" alt="" src="../document9.svg" />
                </div>
                <div className="leading-icon72">
                  <div className="dashboard35">Tambah Tiket</div>
                </div>
              </div>
            </div>
            <div className="nav-item77" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link77">
                <div className="leading-icon77">
                  <img className="home-icon9" alt="" src="../chat4.svg" />
                </div>
                <div className="leading-icon72">
                  <div className="dashboard35">Data Transfer</div>
                </div>
              </div>
            </div>
            <div className="nav-item78">
              <div className="leading-icon-nav-link72">
                <div className="leading-icon72">
                  <img className="home-icon9" alt="" src="../setting8.svg" />
                </div>
                <div className="leading-icon72">
                  <div className="dashboard35">Settings</div>
                </div>
              </div>
            </div>
            <div className="logout-toogle9">
              <div className="nav-item79">
                <div className="leading-icon-nav-link72">
                  <div className="leading-icon79">
                    <img className="logout-icon9" alt="" src="../logout9.svg" />
                  </div>
                  <div className="leading-icon79">
                    <div className="dashboard37">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-layout-frame5">
            <div className="title-frame5">
              <div className="daftar-user9">Daftar User</div>
              <div className="description5">Daftar User Teregistrasi</div>
              <div className="frame-div375">
                <div className="daftar-user10">
                  <div className="frame-div376">
                    <div className="group-div36">
                      <img
                        className="ellipse-icon16"
                        alt=""
                        src="../ellipse-19.svg"
                      />
                      <div className="div28">1</div>
                    </div>
                    <div className="frame-div377">
                      <div className="frame-div378">
                        <div className="frame-div379">
                          <div className="title8">Title</div>
                          <div className="testi13">Testi</div>
                        </div>
                        <div className="frame-div380">
                          <div className="tanggal-lahir4">Tanggal Lahir</div>
                          <div className="div29">22/23/2022</div>
                        </div>
                        <div className="frame-div381">
                          <div className="no-handphone4">No. Handphone</div>
                          <div className="xxxxxxxxxxxxx2">081xxxxxxxxxxxxx</div>
                        </div>
                        <div className="frame-div382">
                          <div className="username4">Username</div>
                          <div className="xxxxxxxxxxx4">xxxxxxxxxxx</div>
                        </div>
                      </div>
                      <div className="frame-div383">
                        <div className="frame-div384">
                          <div className="nama-user15">Nama User</div>
                          <div className="testi14">Testi</div>
                        </div>
                        <div className="frame-div385">
                          <div className="kebangsaan4">Kebangsaan</div>
                          <div className="indonesia4">Indonesia</div>
                        </div>
                        <div className="frame-div386">
                          <div className="email-user8">Email User</div>
                          <div className="testgmailcom6">test@gmail.com</div>
                        </div>
                        <div className="frame-div382">
                          <div className="password4">Password</div>
                          <div className="xxxxxxxxxxx5">xxxxxxxxxxx</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div388">
                      <Button
                        className="frame-button9"
                        style={{ width: "121px" }}
                        type="primary"
                        icon={<ExclamationCircleOutlined />}
                        size="middle"
                        shape="default"
                        onClick={openDetailUser1Popup}
                      >
                        Detail
                      </Button>
                      <Button
                        className="frame-button9"
                        type="primary"
                        icon={<DeleteOutlined />}
                        size="middle"
                        shape="default"
                        danger
                        onClick={openPopup}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-div389">
                <div className="daftar-user10">
                  <div className="frame-div376">
                    <div className="group-div36">
                      <img
                        className="ellipse-icon16"
                        alt=""
                        src="../ellipse-19.svg"
                      />
                      <div className="div30">2</div>
                    </div>
                    <div className="frame-div377">
                      <div className="frame-div378">
                        <div className="frame-div379">
                          <div className="title8">Title</div>
                          <div className="testi13">Testi2</div>
                        </div>
                        <div className="frame-div380">
                          <div className="tanggal-lahir4">Tanggal Lahir</div>
                          <div className="div29">22/23/2022</div>
                        </div>
                        <div className="frame-div381">
                          <div className="no-handphone4">No. Handphone</div>
                          <div className="xxxxxxxxxxxxx2">081xxxxxxxxxxxxx</div>
                        </div>
                        <div className="frame-div382">
                          <div className="username4">Username</div>
                          <div className="xxxxxxxxxxx4">xxxxxxxxxxx</div>
                        </div>
                      </div>
                      <div className="frame-div383">
                        <div className="frame-div384">
                          <div className="nama-user15">Nama User</div>
                          <div className="testi14">Testi2</div>
                        </div>
                        <div className="frame-div385">
                          <div className="kebangsaan4">Kebangsaan</div>
                          <div className="indonesia4">Indonesia</div>
                        </div>
                        <div className="frame-div386">
                          <div className="email-user8">Email User</div>
                          <div className="testgmailcom6">test2@gmail.com</div>
                        </div>
                        <div className="frame-div382">
                          <div className="password4">Password</div>
                          <div className="xxxxxxxxxxx5">xxxxxxxxxxx</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div388">
                      <Button
                        className="frame-button9"
                        style={{ width: "121px" }}
                        type="primary"
                        icon={<ExclamationCircleOutlined />}
                        size="middle"
                        shape="default"
                        onClick={openDetailUser2Popup}
                      >
                        Detail
                      </Button>
                      <Button
                        className="frame-button9"
                        type="primary"
                        icon={<DeleteOutlined />}
                        size="middle"
                        shape="default"
                        danger
                        onClick={openPopup1}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSidebarAdminDaftarUserOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSidebarAdminDaftarUser}
        >
          <SidebarAdminDaftarUser onClose={closeSidebarAdminDaftarUser} />
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
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Popup onClose={closePopup} />
        </PortalPopup>
      )}
      {isDetailUser2PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetailUser2Popup}
        >
          <DetailUser2 onClose={closeDetailUser2Popup} />
        </PortalPopup>
      )}
      {isPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup1}
        >
          <Popup onClose={closePopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminDaftarUser1;
