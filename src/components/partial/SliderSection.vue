<template>
  <div id="carouselExampleControls" class="carousel slide mb-4" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div 
        :class="{'active':index==0, 'carousel-item':1}"  
        v-for="(item, index) in collection" :key="index">
        <img
          :src="item.src"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collection: [
        {
          id: 1,
          src: 'https://dummyimage.com/900x300/5c1616/ffffff&text=Slider',
        },
        {
          id: 2,
          src: 'https://dummyimage.com/900x300/165e2c/ffffff&text=Slider',
        },
        {
          id: 3,
          src: 'https://dummyimage.com/900x300/000/fff&text=Slider',
        }
      ]
    }
  }
}
</script>