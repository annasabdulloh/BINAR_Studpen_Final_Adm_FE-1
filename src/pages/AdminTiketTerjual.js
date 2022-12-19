import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import SidebarAdminTiketTerjual from "../components/SidebarAdminTiketTerjual";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./AdminTiketTerjual.css";

const AdminTiketTerjual = () => {
  const [isSidebarAdminTiketTerjualOpen, setSidebarAdminTiketTerjualOpen] =
    useState(false);
  const navigate = useNavigate();

  const openSidebarAdminTiketTerjual = useCallback(() => {
    setSidebarAdminTiketTerjualOpen(true);
  }, []);

  const closeSidebarAdminTiketTerjual = useCallback(() => {
    setSidebarAdminTiketTerjualOpen(false);
  }, []);

  const onNavItemContainer1Click = useCallback(() => {
    navigate("/");
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

  return (
    <>
      <div className="admin-tiket-terjual">
        <div className="header-section4">
          <div className="header-elements-row4">
            <div className="frame-div281">
              <div
                className="hambuger-menu4"
                onClick={openSidebarAdminTiketTerjual}
              >
                <div className="line-div12" />
                <div className="line-div12" />
                <div className="line-div12" />
              </div>
              <div className="frame-div282">
                <img
                  className="logo-web-icon19"
                  alt=""
                  src="../logo-web@2x.png"
                />
              </div>
            </div>
            <div className="frame-div283">
              <div className="account-section4">
                <img
                  className="notification-bell-icon4"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="profile-picture-icon4"
                  alt=""
                  src="../top_avatar1@2x.png"
                />
              </div>
              <div className="seperator4" />
              <button className="profile4">Profile</button>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="nav-list8">
            <div className="nav-item64">
              <div className="leading-icon-nav-link64">
                <div className="leading-icon64">
                  <img className="home-icon8" alt="" src="../home8.svg" />
                </div>
                <div className="leading-icon64">
                  <div className="dashboard32">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item65" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link64">
                <div className="leading-icon64">
                  <img className="home-icon8" alt="" src="../3-user8.svg" />
                </div>
                <div className="leading-icon64">
                  <div className="dashboard32">User Register</div>
                </div>
              </div>
            </div>
            <div className="nav-item66">
              <div className="leading-icon-nav-link64">
                <div className="leading-icon64">
                  <img
                    className="home-icon8"
                    alt=""
                    src="../edit-square8.svg"
                  />
                </div>
                <div className="leading-icon64">
                  <div className="tiket-terjual5">Tiket Terjual</div>
                </div>
              </div>
            </div>
            <div className="nav-item65" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link67">
                <div className="leading-icon64">
                  <img className="home-icon8" alt="" src="../image8.svg" />
                </div>
                <div className="leading-icon64">
                  <div className="dashboard32">Tiket Tersedia</div>
                </div>
              </div>
            </div>
            <div className="nav-item65" onClick={onNavItemContainer4Click}>
              <div className="leading-icon-nav-link64">
                <div className="leading-icon64">
                  <img className="home-icon8" alt="" src="../document5.svg" />
                </div>
                <div className="leading-icon64">
                  <div className="dashboard32">Tambah Tiket</div>
                </div>
              </div>
            </div>
            <div className="nav-item69" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link69">
                <div className="leading-icon69">
                  <img className="home-icon8" alt="" src="../chat4.svg" />
                </div>
                <div className="leading-icon64">
                  <div className="dashboard32">Data Transfer</div>
                </div>
              </div>
            </div>
            <div className="nav-item70">
              <div className="leading-icon-nav-link64">
                <div className="leading-icon64">
                  <img className="home-icon8" alt="" src="../setting8.svg" />
                </div>
                <div className="leading-icon64">
                  <div className="dashboard32">Settings</div>
                </div>
              </div>
            </div>
            <div className="logout-toogle8">
              <div className="nav-item71">
                <div className="leading-icon-nav-link64">
                  <div className="leading-icon71">
                    <img className="logout-icon8" alt="" src="../logout8.svg" />
                  </div>
                  <div className="leading-icon71">
                    <div className="dashboard34">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-layout-frame4">
            <div className="title-frame4">
              <div className="frame-div284">
                <div className="frame-div285">
                  <div className="frame-div286">
                    <div className="frame-div287">
                      <div className="frame-div288">
                        <div className="tiket-terjual6">Tiket Terjual</div>
                      </div>
                      <div className="frame-div289">
                        <div className="description4">Daftar Tiket Terjual</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-div290">
                <div className="frame-div291">
                  <div className="frame-div292">
                    <TextField
                      className="group-textfield4"
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
                <div className="frame-div293">
                  <TextField
                    className="group-textfield4"
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
                <div className="frame-div294">
                  <div className="frame-div295">
                    <div className="frame-div296">
                      <div className="frame-div297">
                        <div className="no3">No</div>
                        <div className="frame-div298">
                          <div className="group-div26">
                            <img
                              className="ellipse-icon6"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div18">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div299">
                      <div className="frame-div300">
                        <div className="nama-user9">Nama User</div>
                        <div className="namauser">NamaUser</div>
                      </div>
                    </div>
                    <div className="frame-div301">
                      <div className="dari-tujuan1">Dari-Tujuan</div>
                      <div className="jakarta-bali">Jakarta - Bali</div>
                    </div>
                    <div className="frame-div302">
                      <div className="no-tiket1">No. Tiket</div>
                      <div className="hcbd0217">HCBD021</div>
                    </div>
                    <div className="frame-div303">
                      <div className="no-penerbangan1">No. Penerbangan</div>
                      <div className="ga-507">GA 507</div>
                    </div>
                    <div className="frame-div304">
                      <div className="frame-div305">
                        <div className="frame-div306">
                          <div className="status1">Status</div>
                        </div>
                        <div className="frame-div307">
                          <Button
                            className="group-button"
                            sx={{ width: 99 }}
                            variant="contained"
                            color="error"
                            size="small"
                          >
                            Terjual
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div294">
                  <div className="frame-div295">
                    <div className="frame-div296">
                      <div className="frame-div297">
                        <div className="no3">No</div>
                        <div className="frame-div298">
                          <div className="group-div26">
                            <img
                              className="ellipse-icon6"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div18">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div299">
                      <div className="frame-div300">
                        <div className="nama-user9">Nama User</div>
                        <div className="namauser">NamaUser</div>
                      </div>
                    </div>
                    <div className="frame-div301">
                      <div className="dari-tujuan1">Dari-Tujuan</div>
                      <div className="jakarta-bali">Jakarta - Bali</div>
                    </div>
                    <div className="frame-div302">
                      <div className="no-tiket1">No. Tiket</div>
                      <div className="hcbd0217">HCBD021</div>
                    </div>
                    <div className="frame-div303">
                      <div className="no-penerbangan1">No. Penerbangan</div>
                      <div className="ga-507">GA 507</div>
                    </div>
                    <div className="frame-div304">
                      <div className="frame-div305">
                        <div className="frame-div306">
                          <div className="status1">Status</div>
                        </div>
                        <div className="frame-div307">
                          <Button
                            className="group-button"
                            sx={{ width: 99 }}
                            variant="contained"
                            color="error"
                            size="small"
                          >
                            Terjual
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div294">
                  <div className="frame-div295">
                    <div className="frame-div296">
                      <div className="frame-div297">
                        <div className="no3">No</div>
                        <div className="frame-div298">
                          <div className="group-div26">
                            <img
                              className="ellipse-icon6"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div18">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div299">
                      <div className="frame-div300">
                        <div className="nama-user9">Nama User</div>
                        <div className="namauser">NamaUser</div>
                      </div>
                    </div>
                    <div className="frame-div301">
                      <div className="dari-tujuan1">Dari-Tujuan</div>
                      <div className="jakarta-bali">Jakarta - Bali</div>
                    </div>
                    <div className="frame-div302">
                      <div className="no-tiket1">No. Tiket</div>
                      <div className="hcbd0217">HCBD021</div>
                    </div>
                    <div className="frame-div303">
                      <div className="no-penerbangan1">No. Penerbangan</div>
                      <div className="ga-507">GA 507</div>
                    </div>
                    <div className="frame-div304">
                      <div className="frame-div305">
                        <div className="frame-div306">
                          <div className="status1">Status</div>
                        </div>
                        <div className="frame-div307">
                          <Button
                            className="group-button"
                            sx={{ width: 99 }}
                            variant="contained"
                            color="error"
                            size="small"
                          >
                            Terjual
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div294">
                  <div className="frame-div295">
                    <div className="frame-div296">
                      <div className="frame-div297">
                        <div className="no3">No</div>
                        <div className="frame-div298">
                          <div className="group-div26">
                            <img
                              className="ellipse-icon6"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div18">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div299">
                      <div className="frame-div300">
                        <div className="nama-user9">Nama User</div>
                        <div className="namauser">NamaUser</div>
                      </div>
                    </div>
                    <div className="frame-div301">
                      <div className="dari-tujuan1">Dari-Tujuan</div>
                      <div className="jakarta-bali">Jakarta - Bali</div>
                    </div>
                    <div className="frame-div302">
                      <div className="no-tiket1">No. Tiket</div>
                      <div className="hcbd0217">HCBD021</div>
                    </div>
                    <div className="frame-div303">
                      <div className="no-penerbangan1">No. Penerbangan</div>
                      <div className="ga-507">GA 507</div>
                    </div>
                    <div className="frame-div304">
                      <div className="frame-div305">
                        <div className="frame-div306">
                          <div className="status1">Status</div>
                        </div>
                        <div className="frame-div307">
                          <Button
                            className="group-button"
                            sx={{ width: 99 }}
                            variant="contained"
                            color="error"
                            size="small"
                          >
                            Terjual
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div294">
                  <div className="frame-div295">
                    <div className="frame-div296">
                      <div className="frame-div297">
                        <div className="no3">No</div>
                        <div className="frame-div298">
                          <div className="group-div26">
                            <img
                              className="ellipse-icon6"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div18">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div299">
                      <div className="frame-div300">
                        <div className="nama-user9">Nama User</div>
                        <div className="namauser">NamaUser</div>
                      </div>
                    </div>
                    <div className="frame-div301">
                      <div className="dari-tujuan1">Dari-Tujuan</div>
                      <div className="jakarta-bali">Jakarta - Bali</div>
                    </div>
                    <div className="frame-div302">
                      <div className="no-tiket1">No. Tiket</div>
                      <div className="hcbd0217">HCBD021</div>
                    </div>
                    <div className="frame-div303">
                      <div className="no-penerbangan1">No. Penerbangan</div>
                      <div className="ga-507">GA 507</div>
                    </div>
                    <div className="frame-div304">
                      <div className="frame-div305">
                        <div className="frame-div306">
                          <div className="status1">Status</div>
                        </div>
                        <div className="frame-div307">
                          <Button
                            className="group-button"
                            sx={{ width: 99 }}
                            variant="contained"
                            color="error"
                            size="small"
                          >
                            Terjual
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div364">
                  <div className="frame-div365">
                    <div className="no8">No</div>
                    <div className="nama-user14">Nama User</div>
                    <div className="dari-tujuan6">Dari-Tujuan</div>
                    <div className="no-tiket6">No. Tiket</div>
                    <div className="no-penerbangan6">No. Penerbangan</div>
                    <div className="status6">Status</div>
                  </div>
                  <div className="frame-div366">
                    <div className="frame-div367">
                      <div className="group-div31">
                        <img
                          className="ellipse-icon11"
                          alt=""
                          src="../ellipse-167.svg"
                        />
                        <div className="div23">1</div>
                      </div>
                      <div className="namauser5">NamaUser</div>
                      <div className="jakarta-bali5">Jakarta-bali</div>
                      <div className="hcbd02112">HCBD021</div>
                      <div className="h240a127">H240/A12</div>
                      <Button
                        className="group-button"
                        sx={{ width: 152.779296875 }}
                        variant="contained"
                        color="error"
                      >
                        Terjual
                      </Button>
                    </div>
                    <div className="frame-div367">
                      <div className="group-div31">
                        <img
                          className="ellipse-icon11"
                          alt=""
                          src="../ellipse-167.svg"
                        />
                        <div className="div23">1</div>
                      </div>
                      <div className="namauser5">NamaUser</div>
                      <div className="jakarta-bali5">Jakarta-bali</div>
                      <div className="hcbd02112">HCBD021</div>
                      <div className="h240a127">H240/A12</div>
                      <Button
                        className="group-button"
                        sx={{ width: 152.779296875 }}
                        variant="contained"
                        color="error"
                      >
                        Terjual
                      </Button>
                    </div>
                    <div className="frame-div367">
                      <div className="group-div31">
                        <img
                          className="ellipse-icon11"
                          alt=""
                          src="../ellipse-167.svg"
                        />
                        <div className="div23">1</div>
                      </div>
                      <div className="namauser5">NamaUser</div>
                      <div className="jakarta-bali5">Jakarta-bali</div>
                      <div className="hcbd02112">HCBD021</div>
                      <div className="h240a127">H240/A12</div>
                      <Button
                        className="group-button"
                        sx={{ width: 152.779296875 }}
                        variant="contained"
                        color="error"
                      >
                        Terjual
                      </Button>
                    </div>
                    <div className="frame-div367">
                      <div className="group-div31">
                        <img
                          className="ellipse-icon11"
                          alt=""
                          src="../ellipse-167.svg"
                        />
                        <div className="div23">1</div>
                      </div>
                      <div className="namauser5">NamaUser</div>
                      <div className="jakarta-bali5">Jakarta-bali</div>
                      <div className="hcbd02112">HCBD021</div>
                      <div className="h240a127">H240/A12</div>
                      <Button
                        className="group-button"
                        sx={{ width: 152.779296875 }}
                        variant="contained"
                        color="error"
                      >
                        Terjual
                      </Button>
                    </div>
                    <div className="frame-div367">
                      <div className="group-div31">
                        <img
                          className="ellipse-icon11"
                          alt=""
                          src="../ellipse-167.svg"
                        />
                        <div className="div23">1</div>
                      </div>
                      <div className="namauser5">NamaUser</div>
                      <div className="jakarta-bali5">Jakarta-bali</div>
                      <div className="hcbd02112">HCBD021</div>
                      <div className="h240a127">H240/A12</div>
                      <Button
                        className="group-button"
                        sx={{ width: 152.779296875 }}
                        variant="contained"
                        color="error"
                      >
                        Terjual
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSidebarAdminTiketTerjualOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSidebarAdminTiketTerjual}
        >
          <SidebarAdminTiketTerjual onClose={closeSidebarAdminTiketTerjual} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AdminTiketTerjual;
