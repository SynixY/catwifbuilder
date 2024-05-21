import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Homepage() {
  const contractadd = "";
  const [OffsetY, setOffsetY] = useState(0);
  const [OffsetX, setOffsetX] = useState(0);

  // Get a reference to the root element
  const rootElement = document.getElementById("root");

  // Add the class "page-wrapper" to the root element
  rootElement.classList.add("page-wrapper");

  function mapRange(value, fromMin, fromMax, toMin, toMax) {
    // Calculate the ratio between the input and output ranges
    const ratio = (value - fromMin) / (fromMax - fromMin);

    // Clamp the ratio between 0 and 1 to avoid issues with floating-point precision
    const clampedRatio = Math.min(Math.max(ratio, 0), 1);

    // Map the clamped ratio to the new range
    return clampedRatio * (toMax - toMin) + toMin;
  }

  const handleScroll = (event) => {
    const val = event.currentTarget.scrollY;
    const normalize = val / 23;
    console.log(normalize);
    setOffsetY(mapRange(normalize, 0, 100, 0, -73.9848));
    setOffsetX(mapRange(normalize, 0, 100, 0, -52.2366));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        data-animation="default"
        className="navbar4_component w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="all"
        data-w-id="60913d45-0e92-bab5-1644-723a43787ea6"
        role="banner"
        data-duration={400}
        data-doc-height={1}
      >
        <div className="navbar4_container">
          <a href="#" className="navbar4_logo-link w-nav-brand">
            <img
              src="../images/icon.png"
              loading="lazy"
              alt
              className="navbar4_logo"
            />
            <div className="heading-style-h3">$CIFB</div>
          </a>
          <div className="navbar4_wrapper">
            <a
              href={`https://pump.fun/${contractadd}`}
              className="button is-navbar4-button w-button"
            >
              Buy Now
            </a>
            <nav role="navigation" className="navbar4_menu w-nav-menu">
              <div className="navbar4_menu-wrapper">
                <a href="#" className="navbar4_link w-nav-link">
                  Link One
                </a>
                <a href="#" className="navbar4_link w-nav-link">
                  Link Two
                </a>
                <a href="#" className="navbar4_link w-nav-link">
                  Link Three
                </a>
                <div
                  data-hover="false"
                  data-delay={200}
                  data-w-id="60913d45-0e92-bab5-1644-723a43787eb5"
                  className="navbar4_menu-dropdown w-dropdown"
                >
                  <div
                    className="navbar4_dropdown-toggle w-dropdown-toggle"
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div>Link Four</div>
                    <div className="dropdown-chevron is-navbar4 w-embed">
                      <svg
                        width=" 100%"
                        height=" 100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <nav
                    style={{ height: 0 }}
                    className="navbar4_dropdown-list w-dropdown-list"
                    id="w-dropdown-list-0"
                    aria-labelledby="w-dropdown-toggle-0"
                  >
                    <a
                      href="#"
                      className="navbar4_dropdown-link w-dropdown-link"
                      tabIndex={0}
                    >
                      Link Five
                    </a>
                    <a
                      href="#"
                      className="navbar4_dropdown-link w-dropdown-link"
                      tabIndex={0}
                    >
                      Link Six
                    </a>
                    <a
                      href="#"
                      className="navbar4_dropdown-link w-dropdown-link"
                      tabIndex={0}
                    >
                      Link Seven
                    </a>
                  </nav>
                </div>
              </div>
            </nav>
            <div
              className="navbar4_menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            />
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
      </div>
      <main className="main-wrapper">
        <header className="section_header80">
          <div className="padding-global">
            <div className="header80_component">
              <div className="header80_content-wrapper">
                <div className="header80_images-wrapper">
                  <div
                    className="header80_image-list"
                    style={{
                      willChange: "transform",
                      transform: `translate3d(0px, ${OffsetY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="header80_image-wrapper is-image-1">
                      <img
                        src="/images/builder.png"
                        loading="lazy"
                        id="w-node-_9269cb2a-36d5-a681-4c96-2d64f1b300e2-4c47467a"
                        sizes="(max-width: 767px) 30vw, (max-width: 991px) 28vw, 22vw"
                        alt
                        className="header80_image"
                      />
                    </div>
                    <div className="header80_image-wrapper is-image-2">
                      <img
                        src="/images/tamarr.png"
                        loading="lazy"
                        id="w-node-_9269cb2a-36d5-a681-4c96-2d64f1b300e4-4c47467a"
                        alt
                        className="header80_image"
                      />
                    </div>
                    <div className="header80_image-wrapper is-image-3">
                      <img
                        src="/images/crimi.png"
                        loading="lazy"
                        id="w-node-_9269cb2a-36d5-a681-4c96-2d64f1b300e6-4c47467a"
                        alt
                        className="header80_image"
                      />
                    </div>
                    <div className="header80_image-wrapper is-image-4">
                      <img
                        src="/images/king.png"
                        loading="lazy"
                        id="w-node-_9269cb2a-36d5-a681-4c96-2d64f1b300e8-4c47467a"
                        alt
                        className="header80_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="header80_images-wrapper images-wrapper-right">
                  <div
                    className="header80_image-list image-list-right"
                    style={{
                      willChange: "transform",
                      transform: `translate3d(0px, ${OffsetX}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="header80_image-wrapper is-image-5">
                      <img
                        src="/images/wifhat.png"
                        loading="lazy"
                        id="w-node-_9269cb2a-36d5-a681-4c96-2d64f1b300ec-4c47467a"
                        alt
                        className="header80_image"
                      />
                    </div>
                    <div className="header80_image-wrapper is-image-6">
                      <img
                        src="/images/strong.png"
                        loading="lazy"
                        id="w-node-_9269cb2a-36d5-a681-4c96-2d64f1b300ee-4c47467a"
                        alt
                        className="header80_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="header80_content text-color-white">
                  <div className="max-width-large text-align-center">
                    <div className="margin-bottom margin-small">
                      <h1>CatWifBuilder</h1>
                    </div>
                    <p className="text-size-large z-index-2">
                      Finally a builder for all cats
                    </p>
                    <div className="contract">
                      <div className="text-block">CA:{contractadd}</div>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group is-center z-index-2">
                        <a
                          href={`https://pump.fun/${contractadd}`}
                          className="button w-button"
                        >
                          Buy Now
                        </a>
                        <a
                          href="/build"
                          className="button is-secondary w-button"
                        >
                          Build a Cat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="9269cb2a-36d5-a681-4c96-2d64f1b300fc"
                className="header80_ix-trigger"
              />
            </div>
          </div>
        </header>

        <section className="section_cta51">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="w-layout-grid cta51_component">
                  <div className="cta51_card">
                    <div className="text-align-center">
                      <div className="max-width-large">
                        <div className="margin-bottom margin-small">
                          <h2>Join our community!</h2>
                        </div>
                        <p className="text-size-medium">
                          Connect with chads all across the globe on our Twitter
                          and Telegram Chat
                        </p>
                      </div>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group is-center">
                        <a
                          href="https://x.com/catwifbuilder"
                          target="_blank"
                          className="button is-icon w-inline-block"
                        >
                          <div>Twitter</div>
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                fill="CurrentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://t.me/catwifbuilder"
                          className="button is-icon w-inline-block"
                        >
                          <div>Telegram</div>
                          <div className="icon-embed-xxsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--bx"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer7_component">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-vertical padding-xxlarge">
                <div className="padding-bottom padding-large">
                  <div className="footer7_top-wrapper">
                    <a
                      href="#"
                      id="w-node-_0f2eef1c-d9e3-5412-7885-d745773aa673-4c47467a"
                      className="footer7_logo-link w-nav-brand"
                    >
                      <img
                        src="/images/icon.png"
                        loading="lazy"
                        alt
                        className="image"
                      />
                    </a>
                    <div className="w-layout-grid footer7_link-list">
                      <a
                        href={`https://pump.fun/${contractadd}`}
                        className="footer7_link"
                      >
                        Buy now
                      </a>
                      <a
                        id="w-node-_0f2eef1c-d9e3-5412-7885-d745773aa678-4c47467a"
                        href="dogwifbuilder.html"
                        className="footer7_link"
                      >
                        Build a dog
                      </a>
                    </div>
                  </div>
                  <div className="margin-top margin-small">
                    <div className="social-icons1_component">
                      <div className="w-layout-grid social-icons1_list">
                        <a
                          href="https://x.com/catwifbuilder"
                          target="_blank"
                          className="social-icons1_link w-inline-block"
                        >
                          <div className="icon-embed-medium w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                fill="CurrentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          id="w-node-b8e8c4b5-7bb4-fe40-fff7-9f7329322540-4c47467a"
                          href="https://t.me/catwifbuilder"
                          className="social-icons1_link w-inline-block"
                        >
                          <div className="icon-embed-medium w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--bx"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-divider" />
                <div className="padding-top padding-medium">
                  <div className="footer7_bottom-wrapper">
                    <div className="footer7_credit-text">
                      © 2024 DogWifBuilder. All rights reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
