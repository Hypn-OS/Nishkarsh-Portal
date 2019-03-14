<template>
    <div class="col-md-2">
        <div class="card shadow rounded-0">
            <div class="admin-info text-center border-bottom pb-4">
                <img src="../../../assets/images/avatar.png" class="img-fluid p-4 rounded-circle mx-auto d-block" alt="" style="max-width:100px;">
                <h3 class="h5">{{ admin.name }}</h3>
                <span class="badge badge-primary mr-2" title="State">{{ admin.state }}</span>
                <span class="badge badge-info" title="Expertise">{{ admin.expertise }}</span>
                <div class="ratings mt-2">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
            <nav class="nav nav-pills flex-column">
                <router-link class="nav-link" to="/admin"><i class="fas fa-home pr-2"></i>Dashboard</router-link>
                <router-link class="nav-link" to="/admin/cases"><i class="fas fa-file-alt pr-2"></i>All Cases</router-link>
                <router-link class="nav-link" to="/admin/users"><i class="fas fa-users pr-2"></i>All Users</router-link>
                <router-link class="nav-link" to="/admin/organizations"><i class="fas fa-building pr-2"></i>All Organizations</router-link>
                <a href="" @click.prevent="logout" class="nav-link"><i class="fas fa-sign-out-alt pr-2"></i>Sign Out</a>
            </nav>
        </div>
    </div>
</template>



<script>
export default {
    computed: {
      admin () {
        return this.$store.getters.admin
      },
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
        logout(){
            this.$store.dispatch('logout');
            this.$store.dispatch('logoutAdmin');
        }
    }
}
</script>


<style scoped>
    .nav-link{
        border-radius:0!important;
        border-bottom: 1px solid #dee2e6;
    }
    .nav-link:last-child {
        border-bottom: 0;
    }
.checked {
  color: orange;
}
</style>