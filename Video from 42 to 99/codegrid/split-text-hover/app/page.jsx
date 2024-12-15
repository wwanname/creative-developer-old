'use client'
export default function Home() {
  return (
    <>
      <nav>
        <div className="menu-toggle"><p>Menu</p></div>
        <p>Collection</p>
      </nav>
      <div className="container">
        <div className="menu-container">
          <div className="menu">
            <div className="menu-main">
              <div className="menu-top">
                <div className="menu-top-tile">
                  <p>Discover</p>
                </div>
                <div className="menu-top-content">
                  <div className="menu-item" id="active">
                    <div className="menu-item-link">
                      <div className="bg-hover"></div>
                      <a href="#">Story</a>
                    </div>
                    <span>Page 001</span>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-link">
                      <div className="bg-hover"></div>
                      <a href="#">Gallery</a>
                    </div>
                    <span>Page 002</span>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-link">
                      <div className="bg-hover"></div>
                      <a href="#">Protocol</a>
                    </div>
                    <span>Page 003</span>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-link">
                      <div className="bg-hover"></div>
                      <a href="#">Journal</a>
                    </div>
                    <span>Page 004</span>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-link">
                      <div className="bg-hover"></div>
                      <a href="#">Contact</a>
                    </div>
                    <span>Page 005</span>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-link">
                      <div className="bg-hover"></div>
                      <a href="#">About</a>
                    </div>
                    <span>Page 006</span>
                  </div>
                </div>
              </div>
              <div className="menu-bottom">
                <div className="menu-sub-item">
                  <div className="menu-title"><p>Connect</p></div>
                  <div className="menu-contnent"><p>Discord</p></div>
                </div>
                <div className="menu-sub-item">
                  <div className="menu-title"><p>Buy on</p></div>
                  <div className="menu-contnent"><p>Opensea</p></div>
                </div>
                <div className="menu-sub-item">
                  <div className="menu-title"><p>US-EN</p></div>
                  <div className="menu-contnent"><p>2024</p></div>
                </div>
              </div>
            </div>
            <div className="menu-sldebar">
              <div className="close-btn">
                <ion-icon name="close-sharp"></ion-icon>
              </div>
              <div className="logo">
                <ion-icon name="funnel-sharp"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
