import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './AdminDataTransfer.css';

const testing = () => {
  const [users, Transactions] = useState(null);

  const AdminDataTransfer = () => {
    try {
      const url = `${process.env.REACT_APP_API_SERVER_URL}`;
      const response = fetch(`${url}/api/v1/admin-transactions`, {
        method: 'GET',
        headers: {
          'x-access-token': localStorage.getItem('x-access-token'),
        },
      })
        .then(async (response) => {
          const data = await response.json();
          console.log(data);
          Transactions(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      setErrMsg(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    AdminDataTransfer();
  }, []);
  return (
    <>
      <div>
        <div className="title-frame2">
          <div className="frame-div155">
            <div className="frame-div156">
              <div className="frame-div157">
                <div className="frame-div158">
                  <div className="frame-div159">
                    <div className="tiket-terjual3">Pembayaran</div>
                  </div>
                  <div className="frame-div160">
                    <div className="description2">Daftar Pembayaran User</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-div161">
            {/*  */}
            {users !== null ? console.log(users.transaction) : console.log('Data User masih kosong')}
            {users === null
              ? 'Data masih kosong'
              : users.transaction.map((dataforecast, carts) => (
                  <div className="transaksi  mt-4 pt-5">
                    <div className="container-fluid text-center border border-1">
                      <div className="row fw-bold ">
                        <div className="col fs-3">username </div>
                        <div className="col fs-3">Nama User</div>
                        <div className="col fs-3">Email</div>
                      </div>
                      <div className="row mt-2">
                        <div className="col fs-4 text-uppercase">{dataforecast.user.username}</div>
                        <div className="col fs-5">{dataforecast.user.f_name + ' ' + dataforecast.user.l_name}</div>
                        <div className="col fs-5">{dataforecast.user.email}</div>
                      </div>
                      <hr />

                      <div className="row mt-5 ">
                        <div className="col fs-4 fw-bold">Dari : </div>
                        <div className="col fs-5 ">{dataforecast.from}</div>
                        <div className="col fs-5"></div>
                      </div>
                      <div className="row mt-5 ">
                        <div className="col fs-4 fw-bold">Tujuan : </div>
                        <div className="col fs-5 ">{dataforecast.dest}</div>
                        <div className="col fs-5"></div>
                      </div>
                      <div className="row mt-5 ">
                        <div className="col fs-4 fw-bold">Harga Tiket : </div>
                        <div className="col fs-5 fw-bold">{dataforecast.price}</div>
                        <div className="col fs-5"></div>
                      </div>
                      <div className="row mt-5 pb-5">
                        <div className="col fs-4 fw-bold">Status : </div>
                        <div className="col fs-5 fw-bold text-uppercase">{dataforecast.status}</div>
                        <div className="col fs-5"></div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default testing;
