<template>
  <div class="header-nav ">
    <div class="header-nav-wrapper navbar-scrolltofixed bg-lightest">
      <div id="menuzord-right" class="menuzord red">
        <div class="d-flex align-items-center headerClass box-shadow">
          <div class="logoClass">
            <img src="/images/sampleLogo.png" alt="" />
          </div>

          <div class="brandTitleClass">
            <h3 class="titleClass">AFOOFA</h3>
            <p class="subtitleClass">All For One-One For All</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  page: {
    title: 'Header',
    meta: [{ name: 'description', content: 'Header' }],
  },
  components: {},
}
</script>
<style scoped>
/* header css starts */
.brandTitleClass {
  width: 130px;
  text-align: center;
}
.titleClass {
  margin-bottom: 0;
  line-height: 0.7;
  font-weight: 600;
  font-size: 30px;
}

.subtitleClass {
  color: #9c9797;
  font-size: 12px;
}
.logoClass {
  width: 41px;
  margin-left: 25px;
  margin-right: 11px;
}
.headerClass {
  height: 60ox;
}
/* header css ends */
</style>
