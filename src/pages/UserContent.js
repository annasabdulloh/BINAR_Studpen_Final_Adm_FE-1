import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import Popup from "../components/Popup";
import DetailUser from "../components/DetailUser";
// import "./AdminDaftarUser1.css";

const UserContent = () => {
  const [isSidebarAdminDaftarUserOpen, setSidebarAdminDaftarUserOpen] =
    useState(false);
  const navigate = useNavigate();
  const [isDetailUserPopupOpen, setDetailUser1PopupOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openDetailUserPopup = useCallback(() => {
    setDetailUser1PopupOpen(true);
  }, []);

  const closeDetailUserPopup = useCallback(() => {
    setDetailUser1PopupOpen(false);
  }, []);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>


      <div className="">
        <div className="title-frame5">
          <div className="daftar-user9">Daftar User</div>
          <div className="description5">Daftar User Teregistrasi</div>
          <div className="frame-div375" style={{fontSize: "12pt"}}>
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
                    onClick={openDetailUserPopup}
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
          <div className="frame-div389" style={{fontSize: "12pt"}}>
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
                    onClick={openDetailUserPopup}
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
        </div>
      </div>


      {isDetailUserPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetailUserPopup}
        >
          <DetailUser onClose={closeDetailUserPopup} />
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

    </>
  );
};

export default UserContent;
