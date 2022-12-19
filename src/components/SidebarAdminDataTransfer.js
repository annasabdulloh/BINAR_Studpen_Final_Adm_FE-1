import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarAdminDataTransfer.css";

const SidebarAdminDataTransfer = ({ onClose }) => {
  const navigate = useNavigate();

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

  const onNavItemContainer5Click = useCallback(() => {
    navigate("/admin-datatransfer1");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="sidebar-admin-data-transfer" data-animate-on-scroll>
      <div className="side-nav">
        <div className="brand-nav-list">
          <div className="nav-brand">
            <div className="logo-web">
              <img
                className="logo-web-icon1"
                alt=""
                src="../logo-web1@2x.png"
              />
            </div>
          </div>
          <div className="nav-list1">
            <div className="nav-item8">
              <div className="leading-icon-nav-link8">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../home1.svg"
                  />
                </div>
                <div className="nav-link8">
                  <div className="comments">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item9" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link8">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../3-user1.svg"
                  />
                </div>
                <div className="nav-link8">
                  <div className="comments">Users</div>
                </div>
              </div>
            </div>
            <div className="nav-item10" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link8">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../edit-square1.svg"
                  />
                </div>
                <div className="nav-link8">
                  <div className="dashboard5">Posts</div>
                </div>
              </div>
            </div>
            <div className="nav-item9" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link8">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../image1.svg"
                  />
                </div>
                <div className="nav-link8">
                  <div className="comments">Media</div>
                </div>
              </div>
            </div>
            <div className="nav-item9" onClick={onNavItemContainer4Click}>
              <div className="nav-brand">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../document1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="nav-item13" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link8">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../chat--notification.svg"
                  />
                </div>
                <div className="nav-link8">
                  <div className="comments">Comments</div>
                </div>
              </div>
            </div>
            <div className="nav-item8">
              <div className="nav-brand">
                <div className="leading-icon8">
                  <img
                    className="chat-notification"
                    alt=""
                    src="../setting1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logout-toogle1">
          <div className="nav-item15">
            <div className="leading-icon-nav-link8">
              <div className="leading-icon8">
                <img
                  className="chat-notification"
                  alt=""
                  src="../logout1.svg"
                />
              </div>
              <div className="nav-link8">
                <div className="dashboard5">Logout</div>
              </div>
            </div>
            <div className="trailing-icon-badge">
              <div className="badge">
                <div className="number-notification-badge">
                  <div className="div4">1</div>
                </div>
              </div>
              <div className="badge">
                <img
                  className="arrow-right-2"
                  alt=""
                  src="../arrow--right-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdminDataTransfer;
