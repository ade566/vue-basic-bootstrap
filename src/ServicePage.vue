<template>
	<div class="container mt-3">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<router-link to="/">
						Beranda
					</router-link>
				</li>
				<li class="breadcrumb-item active" aria-current="page">Layanan Kami</li>
			</ol>
		</nav>
	</div>
	<div class="container mb-5">
		<div class="row">
			<div class="col-md-4 mb-3" v-for="(item, index) in collection" :key="index">
				<div class="card">
					<img :src="item.src" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">{{ item.title }}</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
						<router-link to="/service/1" class="btn btn-primary">
							Selengkapnya
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      collection: [
        {
          id: 1,
          src: 'https://dummyimage.com/600x300/5c1616/ffffff&text=Layanan Kami - 1',
          title: 'Layanan Kami - 1'
        },
        {
          id: 2,
          src: 'https://dummyimage.com/600x300/165e2c/ffffff&text=Layanan Kami - 2',
          title: 'Layanan Kami - 2'
        },
        {
          id: 3,
          src: 'https://dummyimage.com/600x300/000/ffffff&text=Layanan Kami - 3',
          title: 'Layanan Kami - 3'
        },
        {
          id: 4,
          src: 'https://dummyimage.com/600x300/20876d/ffffff&text=Layanan Kami - 4',
          title: 'Layanan Kami - 4'
        },
        {
          id: 5,
          src: 'https://dummyimage.com/600x300/855720/ffffff&text=Layanan Kami - 5',
          title: 'Layanan Kami - 5'
        },
        {
          id: 6,
          src: 'https://dummyimage.com/600x300/85217e/ffffff&text=Layanan Kami - 6',
          title: 'Layanan Kami - 6'
        },
      ]
    }
  }
}
</script>