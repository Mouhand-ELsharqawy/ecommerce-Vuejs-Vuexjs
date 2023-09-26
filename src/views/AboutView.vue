<template>
  <div class="about">
    <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                About Us
              </h2>

            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <router-link to="">
              Read More
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="../../public/images/about-img.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="info_section layout_padding2">
    <div class="container">
      <div class="info_logo">
        <h2>
          Digitf
        </h2>
      </div>
      <div class="row">

        <div class="col-md-3">
          <div class="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div class="img-box">
                <img src="../../public/images/location-white.png" width="18px" alt="">
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div class="img-box">
                <img src="../../public/images/telephone-white.png" width="12px" alt="">
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div class="img-box">
                <img src="../../public/images/envelope-white.png" width="18px" alt="">
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="info_insta">
            <h5>
              Instagram
            </h5>
            <div class="insta_container">
              <div>
                <router-link to="">
                  <div class="insta-box b-1">
                    <img src="../../public/images/i-1.jpg" alt="">
                  </div>
                </router-link>
                <router-link to="">
                  <div class="insta-box b-2">
                    <img src="../../public/images/i-2.jpg" alt="">
                  </div>
                </router-link>
              </div>

              <div>
                <router-link to="">
                  <div class="insta-box b-3">
                    <img src="../../public/images/i-3.jpg" alt="">
                  </div>
                </router-link>
                <router-link to="">
                  <div class="insta-box b-4">
                    <img src="../../public/images/i-4.jpg" alt="">
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="">
                  <div class="insta-box b-3">
                    <img src="../../public/images/i-5.jpg" alt="">
                  </div>
                </router-link>
                <router-link to="">
                  <div class="insta-box b-4">
                    <img src="../../public/images/i-6.jpg" alt="">
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email">
              <button>
                Subscribe
              </button>
            </form>
            <div class="social_box">
              <router-link to="">
                <img src="../../public/images/fb.png" alt="">
              </router-link>
              <router-link to="">
                <img src="../../public/images/twitter.png" alt="">
              </router-link>
              <router-link to="">
                <img src="../../public/images/linkedin.png" alt="">
              </router-link>
              <router-link to="">
                <img src="../../public/images/youtube.png" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
