// import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import "./AdminTambahTiket.css";

const AdminTambahTiket = () => {


  return (
    <>
      <div>
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
          <div className="frame-div239" >
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
            <div className="frame-div266" style={{
              fontSize: "12pt", borderRadius: "8px", border: "opx"
            }}>
              <div className="frame-div267" style={{
                  fontSize: "12pt", borderRadius: "8px", border: "opx"
                }}>
                <div className="cari-tiket" >Tambah Tiket</div>
              </div>
              <div className="frame-div268">
                <div className="daftar-user8" style={{
                fontSize: "12pt", borderRadius: "8px", border: "opx"
              }}>
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
    </>
  );
};

export default AdminTambahTiket;
