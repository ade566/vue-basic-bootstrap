<template>
	<div class="container mt-3">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<router-link to="/">
						Beranda
					</router-link>
				</li>
				<li class="breadcrumb-item active" aria-current="page">Tentang Kami</li>
			</ol>
		</nav>
	</div>
	<About />
</template>

<script setup>
import About from '@/components/partial/AboutSection.vue'
</script>
