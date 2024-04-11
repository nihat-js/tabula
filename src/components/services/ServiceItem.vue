<template>
  <div class="freelauncer-profile float_left">
    <div class="profile-img">
      <img src="@/assets/images/profile1.png" alt="profie">
    </div>
    <div class="profile-text ps-rel">
      <a href="freelacing-details.html">
        <h6>John Smith</h6>
      </a>
      <span>Senior Graphic & Web Designer</span>
      <div class="rating-sec">
        <div class="star">
          <ul>
            <li> <a href="javascript:;"><i class="fas fa-star"></i></a> </li>
            <li> <a href="javascript:;"><i class="fas fa-star"></i></a> </li>
            <li> <a href="javascript:;"><i class="fas fa-star"></i></a> </li>
            <li> <a href="javascript:;"><i class="fas fa-star"></i></a> </li>
            <li> <a href="javascript:;"><i class="far fa-star"></i></a> </li>
          </ul>
        </div>
        <div class="rating-btn">
          <a class="btn1" href="javascript:;">Featured</a>
          <a href="javascript:;">Full Time</a>
        </div>
      </div>
      <div class="pro-add">
        <ul>
          <li> <span><i class="far fa-money-bill-alt"></i></span> $20 / Hour</li>
          <li> <span><i class="fas fa-map-marker-alt"></i></span> Brisbane</li>
          <li class="heart"> <span><i class="fas fa-heart"></i></span></li>

        </ul>
      </div>
    </div>
    <div class="pro-text">
      <p>Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui officia deserunt mollit anim id est
        laborum. Seden utem perspiciatis undesieu omnis iste natus error…</p>
    </div>
    <div class="skill">
      <div class="skill-text">
        <p>Skills</p>
        <a href="javascript:;">HTML</a>
        <a href="javascript:;">Photoshop</a>
        <a href="javascript:;">Java</a>
        <a href="javascript:;">Ui / UX</a>
        <a href="javascript:;">Jquery</a>
        <a href="javascript:;">My SQL</a>
        <a href="javascript:;">PHP</a>
      </div>
      <button data-fancybox data-src="#hire" class="apply-btn" title="open"> <span>Hire Us</span> </button>
    </div>
  </div>
</template>

<script setup>
const data = defineProps(["data"])
const {price,title,description} = data

</script>