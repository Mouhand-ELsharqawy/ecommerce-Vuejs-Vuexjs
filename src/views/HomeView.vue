<template>
  <div class="home">
    <section class="trending_section layout_padding">
    <div id="accordion">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>
                  Trending Categories
                </h2>
              </div>
              <div class="tab_container">
                <div class="t-link-box" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                  aria-controls="collapseOne">
                  <div class="number">
                    <h5>
                      01
                    </h5>
                  </div>
                  <hr>
                  <div class="t-name">
                    <h5>
                      Chairs
                    </h5>
                  </div>
                </div>
                <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo">
                  <div class="number">
                    <h5>
                      02
                    </h5>
                  </div>
                  <hr>
                  <div class="t-name">
                    <h5>
                      Tables
                    </h5>
                  </div>
                </div>
                <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
                  <div class="number">
                    <h5>
                      03
                    </h5>
                  </div>
                  <hr>
                  <div class="t-name">
                    <h5>
                      Bads
                    </h5>
                  </div>
                </div>
                <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseFour"
                  aria-expanded="false" aria-controls="collapseFour">
                  <div class="number">
                    <h5>
                      04
                    </h5>
                  </div>
                  <hr>
                  <div class="t-name">
                    <h5>
                      Furnitures
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="img_container ">
                <div class="box b-1">
                  <div class="img-box">
                    <img src="../../public/images/t-1.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-2.jpg" alt="">
                  </div>
                </div>
                <div class="box b-2">
                  <div class="img-box">
                    <img src="../../public/images/t-3.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-4.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="img_container ">
                <div class="box b-1">
                  <div class="img-box">
                    <img src="../../public/images/t-3.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-4.jpg" alt="">
                  </div>
                </div>
                <div class="box b-2">

                  <div class="img-box">
                    <img src="../../public/images/t-1.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-2.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="img_container ">
                <div class="box b-1">
                  <div class="img-box">
                    <img src="../../public/images/t-4.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-1.jpg" alt="">
                  </div>
                </div>
                <div class="box b-2">
                  <div class="img-box">
                    <img src="../../public/images/t-3.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-2.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion">
              <div class="img_container ">
                <div class="box b-1">
                  <div class="img-box">
                    <img src="../../public/images/t-1.jpg" alt="">
                  </div>

                  <div class="img-box">
                    <img src="../../public/images/t-4.jpg" alt="">
                  </div>
                </div>
                <div class="box b-2">
                  <div class="img-box">
                    <img src="../../public/images/t-3.jpg" alt="">
                  </div>
                  <div class="img-box">
                    <img src="../../public/images/t-2.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </section>

  <section class="discount_section  layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h2>
              The Latest Collection
            </h2>
            <h2 class="main_heading">
              50% DISCOUNT
            </h2>

            <div class="">
              <router-link to="">
                Buy Now
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="../../public/images/discount-img.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>


  
  <section class="brand_section">
    <div class="container">
      <div class="heading_container">
        <h2>
          Featured Brands
        </h2>
      </div>
      <div class="brand_container layout_padding2">
        <div class="box">
          <router-link to="">
            <div class="new">
              <h5>
                New
              </h5>
            </div>
            <div class="img-box">
              <img src="../../public/images/slider-img.png" alt="">
            </div>
            <div class="detail-box">
              <h6 class="price">
                $100
              </h6>
              <h6>
                Chair
              </h6>
            </div>
          </router-link>
        </div>
        <div class="box">
          <router-link to="">
            <div class="img-box">
              <img src="../../public/images/slider-img.png" alt="">
            </div>
            <div class="detail-box">
              <h6 class="price">
                $100
              </h6>
              <h6>
                Chair
              </h6>
            </div>
          </router-link>
        </div>
        <div class="box">
          <router-link to="">
            <div class="img-box">
              <img src="../../public/images/slider-img.png" alt="">
            </div>
            <div class="detail-box">
              <h6 class="price">
                $100
              </h6>
              <h6>
                Chair
              </h6>
            </div>
          </router-link>
        </div>
        <div class="box">
          <router-link to="">
            <div class="img-box">
              <img src="../../public/images/slider-img.png" alt="">
            </div>
            <div class="detail-box">
              <h6 class="price">
                $100
              </h6>
              <h6>
                Chair
              </h6>
            </div>
          </router-link>
        </div>
      </div>
      <router-link to="" class="brand-btn">
        See More
      </router-link>
    </div>
  </section>



  <section class="client_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          Testimonial
        </h2>
      </div>
    </div>

    <div class="container">
      <div class="client_container layout_padding2">
        <div class="client_box b-1">
          <div class="client-id">
            <div class="img-box">
              <img src="../../public/images/client-1.png" alt="" />
            </div>
            <div class="name">
              <h5>
                Magna
              </h5>
              <p>
                Consectetur adipiscing
              </p>
            </div>
          </div>
          <div class="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
            </p>
            <div>
              <div class="arrow_img">
              </div>
            </div>
          </div>
        </div>
        <div class="client_box b-2">
          <div class="client-id">
            <div class="img-box">
              <img src="../../public/images/client-2.png" alt="" />
            </div>
            <div class="name">
              <h5>
                Aliqua
              </h5>
              <p>
                Consectetur adipiscing
              </p>

            </div>
          </div>
          <div class="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
            </p>
            <div>
              <div class="arrow_img">
              </div>
            </div>
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

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
