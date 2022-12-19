import { useState, useCallback } from "react";
import SidebarAdminDataTransfer from "../components/SidebarAdminDataTransfer";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./AdminDataTransfer.css";

const AdminDataTransfer = () => {
  const [isSidebarAdminDataTransferOpen, setSidebarAdminDataTransferOpen] =
    useState(false);
  const navigate = useNavigate();

  const openSidebarAdminDataTransfer = useCallback(() => {
    setSidebarAdminDataTransferOpen(true);
  }, []);

  const closeSidebarAdminDataTransfer = useCallback(() => {
    setSidebarAdminDataTransferOpen(false);
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

  const onNavItemContainer4Click = useCallback(() => {
    navigate("/admin-tambahtiket1");
  }, [navigate]);

  return (
    <>
      <div className="admin-data-transfer">
        <div className="header-section2">
          <div className="header-elements-row2">
            <div className="frame-div152">
              <div
                className="hambuger-menu2"
                onClick={openSidebarAdminDataTransfer}
              >
                <div className="line-div6" />
                <div className="line-div6" />
                <div className="line-div6" />
              </div>
              <div className="frame-div153">
                <img
                  className="logo-web-icon13"
                  alt=""
                  src="../logo-web@2x.png"
                />
              </div>
            </div>
            <div className="frame-div154">
              <div className="account-section2">
                <img
                  className="notification-bell-icon2"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="profile-picture-icon2"
                  alt=""
                  src="../top_avatar1@2x.png"
                />
              </div>
              <div className="seperator2" />
              <button className="profile2">Profile</button>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="nav-list6">
            <div className="nav-item48">
              <div className="leading-icon-nav-link48">
                <div className="leading-icon48">
                  <img className="home-icon6" alt="" src="../home5.svg" />
                </div>
                <div className="leading-icon48">
                  <div className="dashboard26">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item49" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link48">
                <div className="leading-icon48">
                  <img className="home-icon6" alt="" src="../3-user5.svg" />
                </div>
                <div className="leading-icon48">
                  <div className="dashboard26">User Register</div>
                </div>
              </div>
            </div>
            <div className="nav-item49" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link48">
                <div className="leading-icon48">
                  <img
                    className="home-icon6"
                    alt=""
                    src="../edit-square5.svg"
                  />
                </div>
                <div className="leading-icon48">
                  <div className="dashboard26">Tiket Terjual</div>
                </div>
              </div>
            </div>
            <div className="nav-item49" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link51">
                <div className="leading-icon48">
                  <img className="home-icon6" alt="" src="../image6.svg" />
                </div>
                <div className="leading-icon48">
                  <div className="dashboard26">Tiket Tersedia</div>
                </div>
              </div>
            </div>
            <div className="nav-item49" onClick={onNavItemContainer4Click}>
              <div className="leading-icon-nav-link48">
                <div className="leading-icon48">
                  <img className="home-icon6" alt="" src="../document5.svg" />
                </div>
                <div className="leading-icon48">
                  <div className="dashboard26">Tambah Tiket</div>
                </div>
              </div>
            </div>
            <div className="nav-item53">
              <div className="leading-icon-nav-link53">
                <div className="leading-icon53">
                  <img className="home-icon6" alt="" src="../chat2.svg" />
                </div>
                <div className="leading-icon48">
                  <div className="data-transfer2">Data Transfer</div>
                </div>
              </div>
            </div>
            <div className="nav-item54">
              <div className="leading-icon-nav-link48">
                <div className="leading-icon48">
                  <img className="home-icon6" alt="" src="../setting5.svg" />
                </div>
                <div className="leading-icon48">
                  <div className="dashboard26">Settings</div>
                </div>
              </div>
            </div>
            <div className="logout-toogle6">
              <div className="nav-item55">
                <div className="leading-icon-nav-link48">
                  <div className="leading-icon55">
                    <img className="logout-icon6" alt="" src="../logout5.svg" />
                  </div>
                  <div className="leading-icon55">
                    <div className="dashboard28">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-layout-frame2">
            <div className="title-frame2">
              <div className="frame-div155">
                <div className="frame-div156">
                  <div className="frame-div157">
                    <div className="frame-div158">
                      <div className="frame-div159">
                        <div className="tiket-terjual3">Tiket Terjual</div>
                      </div>
                      <div className="frame-div160">
                        <div className="description2">Daftar Tiket Terjual</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-div161">
                <div className="frame-div162">
                  <div className="frame-div163">
                    <div className="frame-div164">
                      <div className="frame-div165">
                        <div className="no1">No</div>
                        <div className="frame-div166">
                          <div className="group-div22">
                            <img
                              className="ellipse-icon2"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div10">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div167">
                      <div className="title4">Title</div>
                      <div className="testi5">Testi</div>
                    </div>
                    <div className="frame-div168">
                      <div className="nama-user5">Nama User</div>
                      <div className="testi6">Testi</div>
                    </div>
                    <div className="frame-div169">
                      <div className="email-user4">Email User</div>
                      <div className="testgmailcom2">test@gmail.com</div>
                    </div>
                  </div>
                  <div className="frame-div170">
                    <div className="frame-div171">
                      <div className="frame-div172">
                        <div className="tiket">Tiket</div>
                      </div>
                    </div>
                    <div className="frame-div173">
                      <div className="frame-div174">
                        <div className="frame-div175">
                          <img
                            className="logo-web-icon14"
                            alt=""
                            src="../logo-web6@2x.png"
                          />
                        </div>
                        <i className="boarding-pass7">BOARDING PASS</i>
                      </div>
                    </div>
                    <div className="frame-div176">
                      <div className="dari7">Dari</div>
                      <div className="jakarta7">Jakarta</div>
                    </div>
                    <div className="frame-div177">
                      <div className="tujuan7">Tujuan</div>
                      <div className="bali7">Bali</div>
                    </div>
                    <div className="frame-div178">
                      <div className="harga-tiket-pesawat">
                        Harga Tiket Pesawat
                      </div>
                      <div className="rp-250000">Rp. 2.500.00</div>
                    </div>
                    <div className="frame-div179">
                      <div className="dibayar-pada-tanggal">
                        Dibayar Pada Tanggal
                      </div>
                      <div className="div11">23/11/2022</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div162">
                  <div className="frame-div163">
                    <div className="frame-div164">
                      <div className="frame-div165">
                        <div className="no1">No</div>
                        <div className="frame-div166">
                          <div className="group-div22">
                            <img
                              className="ellipse-icon2"
                              alt=""
                              src="../ellipse-16.svg"
                            />
                            <div className="div10">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-div167">
                      <div className="title4">Title</div>
                      <div className="testi5">Testi</div>
                    </div>
                    <div className="frame-div168">
                      <div className="nama-user5">Nama User</div>
                      <div className="testi6">Testi</div>
                    </div>
                    <div className="frame-div169">
                      <div className="email-user4">Email User</div>
                      <div className="testgmailcom2">test@gmail.com</div>
                    </div>
                  </div>
                  <div className="frame-div170">
                    <div className="frame-div171">
                      <div className="frame-div172">
                        <div className="tiket">Tiket</div>
                      </div>
                    </div>
                    <div className="frame-div173">
                      <div className="frame-div174">
                        <div className="frame-div175">
                          <img
                            className="logo-web-icon14"
                            alt=""
                            src="../logo-web6@2x.png"
                          />
                        </div>
                        <i className="boarding-pass7">BOARDING PASS</i>
                      </div>
                    </div>
                    <div className="frame-div176">
                      <div className="dari7">Dari</div>
                      <div className="jakarta7">Jakarta</div>
                    </div>
                    <div className="frame-div177">
                      <div className="tujuan7">Tujuan</div>
                      <div className="bali7">Bali</div>
                    </div>
                    <div className="frame-div178">
                      <div className="harga-tiket-pesawat">
                        Harga Tiket Pesawat
                      </div>
                      <div className="rp-250000">Rp. 2.500.00</div>
                    </div>
                    <div className="frame-div179">
                      <div className="dibayar-pada-tanggal">
                        Dibayar Pada Tanggal
                      </div>
                      <div className="div11">23/11/2022</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div198">
                  <div className="frame-div199">
                    <div className="group-div24">
                      <img
                        className="ellipse-icon4"
                        alt=""
                        src="../ellipse-192.svg"
                      />
                      <div className="div14">1</div>
                    </div>
                    <div className="frame-div200">
                      <div className="frame-div201">
                        <div className="frame-div202">
                          <div className="title6">Title</div>
                          <div className="testi9">Testi</div>
                        </div>
                        <div className="frame-div203">
                          <div className="nama-user7">Nama User</div>
                          <div className="testi10">Testi</div>
                        </div>
                        <div className="frame-div204">
                          <div className="email-user6">Email User</div>
                          <div className="testgmailcom4">test@gmail.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daftar-user6">
                    <div className="frame-div205">
                      <div className="frame-div206">
                        <div className="frame-div207">
                          <div className="frame-div208">
                            <div className="frame-div209">
                              <div className="dari9">Dari :</div>
                              <div className="dari9">Tujuan :</div>
                              <div className="dari9">Harga Tiket Pesawat :</div>
                              <div className="dibayar-pada-tanggal2">
                                Dibayar Pada Tanggal :
                              </div>
                            </div>
                            <div className="frame-div210">
                              <div className="jakarta9">Jakarta</div>
                              <div className="bali9">Bali</div>
                              <div className="nama-user7">Rp. 2.500.000</div>
                              <div className="div15">23/11/2022</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-div211">
                        <div className="frame-div212">
                          <div className="frame-div175">
                            <img
                              className="logo-web-icon14"
                              alt=""
                              src="../logo-web10@2x.png"
                            />
                          </div>
                          <i className="boarding-pass7">BOARDING PASS</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div198">
                  <div className="frame-div199">
                    <div className="group-div24">
                      <img
                        className="ellipse-icon4"
                        alt=""
                        src="../ellipse-192.svg"
                      />
                      <div className="div14">1</div>
                    </div>
                    <div className="frame-div200">
                      <div className="frame-div201">
                        <div className="frame-div202">
                          <div className="title6">Title</div>
                          <div className="testi9">Testi</div>
                        </div>
                        <div className="frame-div203">
                          <div className="nama-user7">Nama User</div>
                          <div className="testi10">Testi</div>
                        </div>
                        <div className="frame-div204">
                          <div className="email-user6">Email User</div>
                          <div className="testgmailcom4">test@gmail.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="daftar-user6">
                    <div className="frame-div205">
                      <div className="frame-div206">
                        <div className="frame-div207">
                          <div className="frame-div208">
                            <div className="frame-div209">
                              <div className="dari9">Dari :</div>
                              <div className="dari9">Tujuan :</div>
                              <div className="dari9">Harga Tiket Pesawat :</div>
                              <div className="dibayar-pada-tanggal2">
                                Dibayar Pada Tanggal :
                              </div>
                            </div>
                            <div className="frame-div210">
                              <div className="jakarta9">Jakarta</div>
                              <div className="bali9">Bali</div>
                              <div className="nama-user7">Rp. 2.500.000</div>
                              <div className="div15">23/11/2022</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-div211">
                        <div className="frame-div212">
                          <div className="frame-div175">
                            <img
                              className="logo-web-icon14"
                              alt=""
                              src="../logo-web10@2x.png"
                            />
                          </div>
                          <i className="boarding-pass7">BOARDING PASS</i>
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
      {isSidebarAdminDataTransferOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSidebarAdminDataTransfer}
        >
          <SidebarAdminDataTransfer onClose={closeSidebarAdminDataTransfer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AdminDataTransfer;
