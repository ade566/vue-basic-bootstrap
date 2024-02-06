<template>
	<div class="container mb-5 mt-5">
		<div class="section-header text-center">
			<h2 class="section-title">Tim Kami</h2>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		</div>
		<div class="row">
			<div class="col-md-4 mb-3" v-for="(item, index) in collection" :key="index">
				<div class="card">
					<img :src="item.src" class="card-img-top" alt="..." />
					<div class="card-body text-center">
						<h5 class="card-title">{{ item.title }}</h5>
						<p class="card-text">
							{{ item.position }}
						</p>
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
				src: 'https://dummyimage.com/600x300/5c1616/ffffff&text=Team - 1',
				title: 'Zach',
				position: 'CEO'
			},
			{
				id: 2,
				src: 'https://dummyimage.com/600x300/165e2c/ffffff&text=Team - 2',
				title: 'Adam',
				position: 'Marketing'
			},
			{
				id: 3,
				src: 'https://dummyimage.com/600x300/000/ffffff&text=Team - 3',
				title: 'James',
				position: 'Programmer'
			},
			{
				id: 4,
				src: 'https://dummyimage.com/600x300/000/ffffff&text=Team - 4',
				title: 'Amelia',
				position: 'Finance'
			},
			{
				id: 5,
				src: 'https://dummyimage.com/600x300/5c1616/ffffff&text=Team - 5',
				title: 'Roger',
				position: 'Security'
			},
			{
				id: 6,
				src: 'https://dummyimage.com/600x300/165e2c/ffffff&text=Team - 6',
				title: 'Steven',
				position: 'Creative'
			}
		]
	}
  }
}
</script>
