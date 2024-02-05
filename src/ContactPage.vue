<template>
	<div class="container mt-3">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<router-link to="/">
						Beranda
					</router-link>
				</li>
				<li class="breadcrumb-item active" aria-current="page">Kontak Kami</li>
			</ol>
		</nav>
	</div>
	<div class="container mb-5">
		<div class="section-header text-center">
			<h2 class="section-title">Kontak Kami</h2>
			<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
		</div>

		<form action="">
			<div class="form-group mb-2">
				<label for="name__">Nama</label>
				<input type="text" id="name__" class="form-control" placeholder="Masukan nama anda">
			</div>
			<div class="form-group mb-2">
				<label for="email__">Email</label>
				<input type="email" id="email__" class="form-control" placeholder="Masukan email anda">
			</div>
			<div class="form-group mb-2">
				<label for="message__">Pesan</label>
				<textarea id="message__" class="form-control" placeholder="Masukan pesan anda" rows="3"></textarea>
			</div>
			<div class="form-group">
				<button type="button" class="btn btn-primary">Kirim</button>
			</div>
		</form>
	</div>

</template>

