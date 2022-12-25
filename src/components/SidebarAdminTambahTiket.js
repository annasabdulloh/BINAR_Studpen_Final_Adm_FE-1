import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SidebarAdminTambahTiket.css';

const SidebarAdminTambahTiket = ({ onClose }) => {
  const navigate = useNavigate();

  const onNavItemContainer1Click = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onNavItemContainer2Click = useCallback(() => {
    navigate('/admin-tiketterjual');
  }, [navigate]);

  const onNavItemContainer3Click = useCallback(() => {
    navigate('/admin-tikettersedia1');
  }, [navigate]);

  const onNavItemContainer4Click = useCallback(() => {
    navigate('/admin-tambahtiket1');
  }, [navigate]);

  const onNavItemContainer5Click = useCallback(() => {
    navigate('/admin-datatransfer1');
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add('animate');
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
    <div className="sidebar-admin-tambah-tiket" data-animate-on-scroll>
      <div className="side-nav1">
        <div className="brand-nav-list1">
          <div className="nav-brand1">
            <div className="logo-web1">
              <img className="logo-web-icon2" alt="" src="../logo-web2@2x.png" />
            </div>
          </div>
          <div className="nav-list2">
            <div className="nav-item16">
              <div className="leading-icon-nav-link16">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../home2.svg" />
                </div>
                <div className="nav-link14">
                  <div className="dashboard8">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="nav-item17" onClick={onNavItemContainer1Click}>
              <div className="leading-icon-nav-link16">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../3-user2.svg" />
                </div>
                <div className="nav-link14">
                  <div className="dashboard8">Users</div>
                </div>
              </div>
            </div>
            <div className="nav-item18" onClick={onNavItemContainer2Click}>
              <div className="leading-icon-nav-link16">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../edit-square1.svg" />
                </div>
                <div className="nav-link14">
                  <div className="dashboard10">Posts</div>
                </div>
              </div>
            </div>
            <div className="nav-item17" onClick={onNavItemContainer3Click}>
              <div className="leading-icon-nav-link16">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../image1.svg" />
                </div>
                <div className="nav-link14">
                  <div className="dashboard8">Media</div>
                </div>
              </div>
            </div>
            <div className="nav-item20" onClick={onNavItemContainer4Click}>
              <div className="nav-brand1">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../document2.svg" />
                </div>
              </div>
            </div>
            <div className="nav-item17" onClick={onNavItemContainer5Click}>
              <div className="leading-icon-nav-link16">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../chat--notification1.svg" />
                </div>
                <div className="nav-link14">
                  <div className="dashboard8">Comments</div>
                </div>
              </div>
            </div>
            <div className="nav-item16">
              <div className="nav-brand1">
                <div className="leading-icon16">
                  <img className="home-icon2" alt="" src="../setting2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logout-toogle2">
          <div className="nav-item23">
            <div className="leading-icon-nav-link16">
              <div className="leading-icon16">
                <img className="home-icon2" alt="" src="../logout2.svg" />
              </div>
              <div className="nav-link14">
                <div className="dashboard10">Logout</div>
              </div>
            </div>
            <div className="trailing-icon-badge1">
              <div className="badge1">
                <div className="number-notification-badge1">
                  <div className="div5">1</div>
                </div>
              </div>
              <div className="badge1">
                <img className="arrow-right-21" alt="" src="../arrow--right-21.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdminTambahTiket;
