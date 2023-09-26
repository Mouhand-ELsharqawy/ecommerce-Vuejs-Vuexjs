<template>
  <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <router-link class="navbar-brand" to="/">
            <img src="../public/images/Logo.png" alt="" />
          </router-link>
       
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about"> About</router-link>
              </li>
              <li class="nav-item ">
                <router-link class="nav-link" to="/shop">Shop </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/furniture"> Furniture </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact us</router-link>
              </li>
            </ul>
            <!-- <div class="user_option"> -->
              <router-link to="">
                <img src="../public/images/user.png" alt="">
                <span>
                  Login
                </span>
              </router-link>
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            <!-- </div> -->
          <!-- </div> -->
          <div>
            <div class="custom_menu-btn ">
              <button>
                <span class=" s-1">

                </span>
                <span class="s-2">

                </span>
                <span class="s-3">

                </span>
              </button>
            </div>
          </div>

          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> -->
        </nav>
       
      </div>
    </header>
    <slider-view />
    <router-view/>
    <footer-view />
</template>

<script>
import SliderView from './components/slider.vue';
import FooterView from './components/footer.vue';
export default{
  components: {
    SliderView,
    FooterView
  }
}
</script>

<style>


@import url('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css');
@import url('../public/css/bootstrap.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,700&display=swap');
@import url('../public/css/style.css');
@import url('../public/css/responsive.css');

nav a.router-link-exact-active {
  color: #42b983;
}
nav .nav-link {
  font-size: medium;
  color: black;
}
</style>
