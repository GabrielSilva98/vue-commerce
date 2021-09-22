<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
          <b-navbar-brand href="#">
              <b-icon icon="brightness-fill-high"></b-icon>Admin
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item @click="goHome" active>Exit</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
      </b-navbar>

      <div>
          <b-modal id="modal-1" title="BoostrapVue">
              <p class="my-4">Admin!</p>
          </b-modal>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBarAdmin',
    methods: {
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>