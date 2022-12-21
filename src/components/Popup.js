import "antd/dist/antd.min.css";
import { Button } from "antd";
import "./Popup.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup" style={{
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <div className="popup-delete">
        <div className="frame-div47">
          <div className="frame-div48">
            <div className="apa-anda-yakin-ingin-menghapus">
              Apa anda yakin ingin menghapus data ini?
            </div>
          </div>
        </div>
        <div className="frame-div49">
          <Button
            className="frame-button4"
            type="primary"
            size="middle"
            shape="default"
            onClick={onClose}
          >
            Batal
          </Button>
          <Button
            type="primary"
            size="middle"
            shape="default"
            href="/"
            danger
          >{`Hapus `}</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
