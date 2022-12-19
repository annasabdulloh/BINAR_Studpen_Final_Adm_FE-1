import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import SidebarAdminTambahTiket from "../components/SidebarAdminTambahTiket";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./AdminTambahTiket.css";

const AdminTambahTiket = () => {
  const [isSidebarAdminTambahTiketOpen, setSidebarAdminTambahTiketOpen] =
    useState(false);
  const navigate = useNavigate();

  const openSidebarAdminTambahTiket = useCallback(() => {
    setSidebarAdminTambahTiketOpen(true);
  }, []);

  const closeSidebarAdminTambahTiket = useCallback(() => {
    setSidebarAdminTambahTiketOpen(false);
  }, []);

  const onNavItemContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavItemContainer2Click = useCallback(() => {
    navigate("/admin-tiketterjual");
  }, [navigate]);

  const onNavItemContainer3Click = useCallback(() => {
    navigate("/admin-tikettersedia1");
  }, [navigate]);

  const onNavItemContainer5Click = useCallback(() => {
    navigate("/admin-datatransfer1");
  }, [navigate]);

  return (
    <>
      <div className="admin-tambah-tiket">
        <div className="header-section3">
          <div className="header-elements-row3">
            <div className="frame-div230">
              <div
                className="hambuger-menu3"
                onClick={openSidebarAdminTambahTiket}
              >
                <div className="line-div9" />
                <div className="line-div9" />
                <div className="line-div9" />
              </div>
              <div className="frame-div231">
                <img
                  className="logo-web-icon18"
                  alt=""
                  src="../logo-web@2x.png"
                />
              </div>
            </div>
            <div className="frame-div232">
              <div className="account-section3">
                <img
                  className="notification-bell-icon3"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="profile-picture-icon3"
                  alt=""
                  src="../top_avatar1@2x.png"
                />
              </div>
              <div className="seperator3" />
              <button className="profile3">Profile</button>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="nav-list7">
            <div className="nav-item56">
              <div className="leading-icon-nav-link56">
                <div className="leading-icon56">
                  <img className="home-icon7" alt="" src="../home7.svg" />
                </div>
                <div className="leading-icon56">
                  <div className="dashboard29">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item57" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link56">
                <div className="leading-icon56">
                  <img className="home-icon7" alt="" src="../3-user7.svg" />
                </div>
                <div className="leading-icon56">
                  <div className="dashboard29">User Register</div>
                </div>
              </div>
            </div>
            <div className="nav-item57" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link56">
                <div className="leading-icon56">
                  <img
                    className="home-icon7"
                    alt=""
                    src="../edit-square7.svg"
                  />
                </div>
                <div className="leading-icon56">
                  <div className="dashboard29">Tiket Terjual</div>
                </div>
              </div>
            </div>
            <div className="nav-item57" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link59">
                <div className="leading-icon56">
                  <img className="home-icon7" alt="" src="../image7.svg" />
                </div>
                <div className="leading-icon56">
                  <div className="dashboard29">Tiket Tersedia</div>
                </div>
              </div>
            </div>
            <div className="nav-item60">
              <div className="leading-icon-nav-link56">
                <div className="leading-icon56">
                  <img className="home-icon7" alt="" src="../document7.svg" />
                </div>
                <div className="leading-icon56">
                  <div className="tambah-tiket3">Tambah Tiket</div>
                </div>
              </div>
            </div>
            <div className="nav-item61" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link61">
                <div className="leading-icon61">
                  <img className="home-icon7" alt="" src="../chat1.svg" />
                </div>
                <div className="leading-icon56">
                  <div className="dashboard29">Data Transfer</div>
                </div>
              </div>
            </div>
            <div className="nav-item62">
              <div className="leading-icon-nav-link56">
                <div className="leading-icon56">
                  <img className="home-icon7" alt="" src="../setting7.svg" />
                </div>
                <div className="leading-icon56">
                  <div className="dashboard29">Settings</div>
                </div>
              </div>
            </div>
            <div className="logout-toogle7">
              <div className="nav-item63">
                <div className="leading-icon-nav-link56">
                  <div className="leading-icon63">
                    <img className="logout-icon7" alt="" src="../logout5.svg" />
                  </div>
                  <div className="leading-icon63">
                    <div className="dashboard31">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-layout-frame3">
            <div className="title-frame3">
              <div className="frame-div233">
                <div className="frame-div234">
                  <div className="frame-div235">
                    <div className="frame-div236">
                      <div className="frame-div237">
                        <div className="tambah-tiket4">Tambah Tiket</div>
                      </div>
                      <div className="frame-div238">
                        <div className="description3">Form Tambah Tiket</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-div239">
                <div className="frame-div240">
                  <div className="frame-div241">
                    <TextField
                      className="group-textfield2"
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
                <div className="frame-div242">
                  <TextField
                    className="group-textfield2"
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
                <div className="frame-div243">
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Kelas Pesawat</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Kelas Pesawat"
                      placeholder="Kelas Pesawat"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Nama Pesawat</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Nama Pesawat"
                      placeholder="Nama Pesawat"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Dari</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Dari"
                      placeholder="Dari"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Tujuan</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Tujuan"
                      placeholder="Tujuan"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Nomor Penerbangan</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Nomor Penerbangan"
                      placeholder="Nomor Penerbangan"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Nomor Tiket</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Nomor Tiket"
                      placeholder="Nomor Tiket"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div244">
                    <div className="frame-div245">
                      <div className="frame-div246">
                        <div className="kelas-pesawat">Harga</div>
                      </div>
                    </div>
                    <TextField
                      className="frame-textfield"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Harga"
                      placeholder="Harga"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="frame-div265">
                    <Button
                      sx={{ width: 297 }}
                      variant="contained"
                      color="error"
                    >
                      Tambahkan tiket
                    </Button>
                  </div>
                </div>
                <div className="frame-div266">
                  <div className="frame-div267">
                    <div className="cari-tiket">Cari Tiket</div>
                  </div>
                  <div className="frame-div268">
                    <div className="daftar-user8">
                      <div className="frame-div269">
                        <div className="frame-div270">
                          <div className="frame-div271">
                            <div className="frame-div272">
                              <div className="frame-div273">
                                <div className="frame-div274">
                                  <div className="kelas-pesawat1">
                                    Kelas Pesawat
                                  </div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Kelas Pesawat"
                                    placeholder="Kelas Pesawat"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                                <div className="frame-div275">
                                  <div className="kelas-pesawat1">
                                    Nama Pesawat
                                  </div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Nama Pesawat"
                                    placeholder="Nama Pesawat"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                                <div className="frame-div275">
                                  <div className="kelas-pesawat1">{`Dari                                 `}</div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Dari"
                                    placeholder="Dari"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                                <div className="frame-div277">
                                  <div className="kelas-pesawat1">{`Tujuan                            `}</div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Tujuan"
                                    placeholder="Tujuan"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                                <div className="frame-div278">
                                  <div className="kelas-pesawat1">
                                    Nomor Penerbangan
                                  </div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Nomor Penerbangan"
                                    placeholder="Nomor Penerbangan"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                                <div className="frame-div277">
                                  <div className="kelas-pesawat1">
                                    Nomor Tiket
                                  </div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Nomor Tiket"
                                    placeholder="Nomor Tiket"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                                <div className="frame-div277">
                                  <div className="kelas-pesawat1">{`Harga                            `}</div>
                                  <TextField
                                    className="frame-textfield"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    label="Harga"
                                    placeholder="Harga"
                                    size="medium"
                                    margin="none"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button variant="contained" color="error">
                            Tambahkan tiket
                          </Button>
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
      {isSidebarAdminTambahTiketOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSidebarAdminTambahTiket}
        >
          <SidebarAdminTambahTiket onClose={closeSidebarAdminTambahTiket} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AdminTambahTiket;
