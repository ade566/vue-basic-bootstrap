<template>
	<div class="container mb-5">
		<div class="section-header text-center">
			<h2 class="section-title">Layanan Kami</h2>
			<p>Kami menyediakan berbagai layanan yang bisa membantu bisnis anda lebih stabil.</p>
		</div>
		<div class="row">
			<div class="col-md-4" v-for="(item, index) in collection" :key="index">
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
			}
		]
	}
  }
}
</script>
