import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DetailUser from "../components/DetailUser";
import PortalPopup from "../components/PortalPopup";
import "./AdminTiketTersedia.css";

const AdminTiketTersedia = () => {
  const [isSidebarAdminTiketTersediaOpen, setSidebarAdminTiketTersediaOpen] =
    useState(false);
  const navigate = useNavigate();

  return (
    <>
      
          <div>
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
                
                <div className="frame-div111">
                  <div className="frame-div113" style={{
                    borderRadius: "8px", fontSize: "12pt"
                  }}>
                    <div className="frame-div114" style={{
                      borderRadius: "8px 8px 0px 0px"
                    }}>
                      <b className="kelas-ekonomi4">Kelas Ekonomi</b>
                      <img
                        className="image-57-icon"
                        alt=""
                        src="../image-57@2x.png"
                      />
                      
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
                                <div className="nomor-tiket-pesawat"  style={{fontSize: "12pt"}}>
                                  Nomor Tiket Pesawat :
                                </div>
                                <div className="nomor-penerbangan4"  style={{fontSize: "12pt"}}>
                                  Nomor Penerbangan :
                                </div>
                                <div className="nomor-penerbangan4"  style={{fontSize: "12pt"}}>Dari :</div>
                                <div className="nomor-penerbangan4"  style={{fontSize: "12pt"}}>
                                  Tujuan :
                                </div>
                              </div>
                              <div className="frame-div123">
                                <div className="hcbd0214"  style={{fontSize: "12pt"}}>HCBD021</div>
                                <div className="h240a124"  style={{fontSize: "12pt"}}>H240/A12</div>
                                <div className="jakarta4"  style={{fontSize: "12pt"}}>Jakarta</div>
                                <div className="bali4"  style={{fontSize: "12pt"}}>Bali</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-div124">
                          <div className="frame-div125">
                            <div className="harga-tiket" style={{fontSize: "12pt"}}>Harga Tiket</div>
                            <b className="rp-2500000" style={{fontSize: "12pt"}}>Rp. 2.500.000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
     
    </>
  );
};

export default AdminTiketTersedia;
