<template>
  <nav>
    <AppLogo />
    <span
      ref="logoname"
      class="title"
    >
      Dinner's On Me
    </span>
    <span class="login">
      Log In
    </span>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import { logolettering } from '@/use/logolettering'
import { windowwidth } from '@/use/windowwidth'

export default {
  components: {
    AppLogo,
  },
  hooks () {
    logolettering(windowwidth())
  },
}
</script>

<style lang="scss" scoped>
nav {
  height: 80px;
  background: #0f1010;
  margin-bottom: 30px;
  padding: 0 8vmin 0 50px;
  display: flex;
  position: relative;
}
.title {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 31px 20px;
  font-size: 18px;
}
.login {
  position: absolute;
  right: 5.5vmin;
  margin: 20px 20px;
  border: 1px solid currentColor;
  padding: 8px 30px;
  border-radius: 1000px;
  transition: 0.3s all ease;
  cursor: pointer;
  background: black;
  &:hover {
    background: rgb(87, 16, 16);
    transition: 0.3s all ease;
  }
}
@media only screen and (max-width: 767px) {
  .title {
    display: none !important;
  }
  nav {
    padding: 0 10px !important;
  }
  .login {
    right: 10px !important;
  }
}
</style>
