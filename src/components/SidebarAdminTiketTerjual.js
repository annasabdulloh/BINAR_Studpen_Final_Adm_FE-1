import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarAdminTiketTerjual.css";

const SidebarAdminTiketTerjual = ({ onClose }) => {
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
    <div className="sidebar-admin-tiket-terjual" data-animate-on-scroll>
      <div className="side-nav3">
        <div className="brand-nav-list3">
          <div className="nav-brand3">
            <div className="logo-web3">
              <img
                className="logo-web-icon4"
                alt=""
                src="../logo-web1@2x.png"
              />
            </div>
          </div>
          <div className="nav-list4">
            <div className="nav-item32">
              <div className="leading-icon-nav-link32">
                <div className="leading-icon32">
                  <img className="home-icon4" alt="" src="../home1.svg" />
                </div>
                <div className="nav-link26">
                  <div className="dashboard18">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item33" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link32">
                <div className="leading-icon32">
                  <img className="home-icon4" alt="" src="../3-user1.svg" />
                </div>
                <div className="nav-link26">
                  <div className="dashboard18">Users</div>
                </div>
              </div>
            </div>
            <div className="nav-item34" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link32">
                <div className="leading-icon32">
                  <img
                    className="home-icon4"
                    alt=""
                    src="../edit-square4.svg"
                  />
                </div>
                <div className="nav-link26">
                  <div className="dashboard20">Posts</div>
                </div>
              </div>
            </div>
            <div className="nav-item33" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link32">
                <div className="leading-icon32">
                  <img className="home-icon4" alt="" src="../image1.svg" />
                </div>
                <div className="nav-link26">
                  <div className="dashboard18">Media</div>
                </div>
              </div>
            </div>
            <div className="nav-item33" onClick={onNavItemContainer4Click}>
              <div className="nav-brand3">
                <div className="leading-icon32">
                  <img className="home-icon4" alt="" src="../document1.svg" />
                </div>
              </div>
            </div>
            <div className="nav-item33" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link32">
                <div className="leading-icon32">
                  <img
                    className="home-icon4"
                    alt=""
                    src="../chat--notification3.svg"
                  />
                </div>
                <div className="nav-link26">
                  <div className="dashboard18">Comments</div>
                </div>
              </div>
            </div>
            <div className="nav-item32">
              <div className="nav-brand3">
                <div className="leading-icon32">
                  <img className="home-icon4" alt="" src="../setting4.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logout-toogle4">
          <div className="nav-item39">
            <div className="leading-icon-nav-link32">
              <div className="leading-icon32">
                <img className="home-icon4" alt="" src="../logout1.svg" />
              </div>
              <div className="nav-link26">
                <div className="dashboard20">Logout</div>
              </div>
            </div>
            <div className="trailing-icon-badge3">
              <div className="badge3">
                <div className="number-notification-badge3">
                  <div className="div7">1</div>
                </div>
              </div>
              <div className="badge3">
                <img
                  className="arrow-right-23"
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

export default SidebarAdminTiketTerjual;
