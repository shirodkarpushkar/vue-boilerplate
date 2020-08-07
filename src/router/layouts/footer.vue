<template>
  <div class="footer">
    <div class="d-flex justify-content-between">
      <div>
        <span>
          <i class="fa fa-copyright"></i>
        </span>
        <span> <i>Afoofa 2020, All rights reserved</i></span>
      </div>
      <div class="d-flex">
        <div class="margin-right-left">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
        </div>
        <div class="margin-right-left">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
        <div class="margin-right-left">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Footer',
    meta: [{ name: 'description', content: 'Footer' }],
  },
  components: { Layout },
}
</script>
<style scoped>
.footer {
  padding: 1%;
  background-image: url('/images/footer-bg.png');
  background-position: initial !important;
  background-size: initial !important;
  background-repeat: initial !important;
  background-attachment: initial !important;
  background-origin: initial !important;
  background-clip: initial !important;
  background-color: rgb(38, 46, 59) !important;
}
.fa-copyright {
  font-size: 22px;
  font-weight: bold;
}
span {
  font-size: 20px;
  font-weight: bold;
}
.social {
  display: flex;
  padding-left: 660px;
}
img {
  height: 55px;
}
.fa-facebook-square {
  font-size: 2rem;
}
.fa-linkedin-square {
  font-size: 2rem;
}
.fa-twitter {
  font-size: 2rem;
}
</style>
