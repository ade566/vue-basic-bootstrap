<template>
	<div class="container mb-5">
		<div class="section-header text-center">
			<h2 class="section-title">Portofolio Kami</h2>
			<p>Some quick example text to build on the card title and make up the bulk of the card's.</p>
		</div>
		<div class="row">
			<div class="col-md-5">
				<div class="card">
					<img src="https://dummyimage.com/600x300/5c1616/ffffff&text=Portofolio Kami - 1" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Portofolio Kami - 1</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
						<router-link to="/project/1" class="btn btn-primary">
							Selengkapnya
						</router-link>
					</div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="row">
					<div class="col-md-6 mb-3" v-for="(item, index) in collection" :key="index">
						<div class="card">
							<img :src="item.src" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">{{ item.title }}</h5>
								<p class="card-text">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
								<router-link to="/project/1" class="btn btn-primary">
									Selengkapnya
								</router-link>
							</div>
						</div>
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
				src: 'https://dummyimage.com/600x300/a31da3/ffffff&text=Portofolio Kami - 2',
				title: 'Portofolio Kami - 2'
			},
			{
				id: 2,
				src: 'https://dummyimage.com/600x300/165e2c/ffffff&text=Portofolio Kami - 3',
				title: 'Portofolio Kami - 3'
			},
			{
				id: 3,
				src: 'https://dummyimage.com/600x300/000/ffffff&text=Portofolio Kami - 4',
				title: 'Portofolio Kami - 4'
			}
		]
	}
  }
}
</script>
