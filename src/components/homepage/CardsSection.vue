<template>
    <section id="cards">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <router-link to="/faq" class="card shadow">
                        <div class="card-body text-dark">
                            <i class="far fa-caret-square-right"></i>
                            <h5 class="card-title mb-0">FAQ</h5>
                            <p class="card-text">Few general questions</p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-3">
                    <a href="#" class="card shadow">
                        <div class="card-body text-dark">
                            <i class="far fa-gem"></i>
                            <h5 class="card-title mb-0">Fact Sheet</h5>
                            <p class="card-text">Collection of ministries and organizations</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="#" class="card shadow">
                        <div class="card-body text-dark">
                            <i class="far fa-map"></i>
                            <h5 class="card-title mb-0">Card title</h5>
                            <p class="card-text">Some quick example text to build on the </p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="#" class="card shadow">
                        <div class="card-body text-dark">
                            <i class="far fa-star"></i>
                            <h5 class="card-title mb-0">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card {
  border-radius: 0;
}

.card .far {
  font-size: 2rem;
}
</style>