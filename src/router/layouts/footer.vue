<template>
  <div>
    footer
  </div>
</template>

<script>

export default {
  page: {
    title: 'Footer',
    meta: [{ name: 'description', content: 'Footer' }],
  },
  components: {  },
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
