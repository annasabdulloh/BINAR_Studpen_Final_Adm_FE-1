import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarAdminTiketTersedia.css";

const SidebarAdminTiketTersedia = ({ onClose }) => {
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
    <div className="sidebar-admin-tiket-tersedia" data-animate-on-scroll>
      <div className="side-nav2">
        <div className="brand-nav-list2">
          <div className="nav-brand2">
            <div className="logo-web2">
              <img
                className="logo-web-icon3"
                alt=""
                src="../logo-web1@2x.png"
              />
            </div>
          </div>
          <div className="nav-list3">
            <div className="nav-item24">
              <div className="leading-icon-nav-link24">
                <div className="leading-icon24">
                  <img className="home-icon3" alt="" src="../home1.svg" />
                </div>
                <div className="nav-link20">
                  <div className="dashboard13">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item25" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link24">
                <div className="leading-icon24">
                  <img className="home-icon3" alt="" src="../3-user1.svg" />
                </div>
                <div className="nav-link20">
                  <div className="dashboard13">Users</div>
                </div>
              </div>
            </div>
            <div className="nav-item26" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link24">
                <div className="leading-icon24">
                  <img
                    className="home-icon3"
                    alt=""
                    src="../edit-square1.svg"
                  />
                </div>
                <div className="nav-link20">
                  <div className="dashboard15">Posts</div>
                </div>
              </div>
            </div>
            <div className="nav-item27" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link24">
                <div className="leading-icon24">
                  <img className="home-icon3" alt="" src="../image3.svg" />
                </div>
                <div className="nav-link20">
                  <div className="dashboard13">Media</div>
                </div>
              </div>
            </div>
            <div className="nav-item25" onClick={onNavItemContainer4Click}>
              <div className="nav-brand2">
                <div className="leading-icon24">
                  <img className="home-icon3" alt="" src="../document1.svg" />
                </div>
              </div>
            </div>
            <div className="nav-item25" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link24">
                <div className="leading-icon24">
                  <img
                    className="home-icon3"
                    alt=""
                    src="../chat--notification2.svg"
                  />
                </div>
                <div className="nav-link20">
                  <div className="dashboard13">Comments</div>
                </div>
              </div>
            </div>
            <div className="nav-item24">
              <div className="nav-brand2">
                <div className="leading-icon24">
                  <img className="home-icon3" alt="" src="../setting1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logout-toogle3">
          <div className="nav-item31">
            <div className="leading-icon-nav-link24">
              <div className="leading-icon24">
                <img className="home-icon3" alt="" src="../logout1.svg" />
              </div>
              <div className="nav-link20">
                <div className="dashboard15">Logout</div>
              </div>
            </div>
            <div className="trailing-icon-badge2">
              <div className="badge2">
                <div className="number-notification-badge2">
                  <div className="div6">1</div>
                </div>
              </div>
              <div className="badge2">
                <img
                  className="arrow-right-22"
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

export default SidebarAdminTiketTersedia;
