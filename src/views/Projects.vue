<template>
  <div class="projects">
    <div class="project-wrapper">
      <div class="content-wrapper" v-for="pic in $store.state.pics">
        <img :src="getPicture(pic)" :alt="pic">
        <div class="text-wrapper">
          <h2 class="title">QuranOnline</h2>
          <p class="desc">Holy Quran in online form! now you can recite Al-Quran anytime and anywhere you go without bringing the actual book. Written using vanilla javascript.</p>
          <a href="https://gresiandra.github.io/QuranOnline/" target="_blank" class="goto">Visit Website</a>
        </div>
      </div>
      <!-- <div class="content-wrapper1">
        <img src="../assets/project2.png" alt="">
        <div class="text-wrapper">
          <h2 class="title">Covid Case Tracker</h2>
          <p class="desc">Provide latest update of Covid cases in Indonesia. Equipped with a map for detail cases in each province. Written using Leaflet, Bootstrap and Django.</p>
          <a href="https://covid-indo.herokuapp.com/" target="_blank" class="goto">Visit Website</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getPicture(pic) {
      return require('../assets/'+pic)
    }
  }
}
</script>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 75vh;
    padding: 50px 150px;
  }

  .projects .project-wrapper {
    width: 100%;
    min-height: 500px;
  }

  .projects .project-wrapper .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
  }

  /* .projects .project-wrapper .content-wrapper1 {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 70px;
  } */

  .projects .project-wrapper img {
    min-width: 300px;
    height: 280px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(37, 34, 34, 0.4);
  }

  .projects .project-wrapper .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 280px;
    padding: 15px;
    margin-left: 20px;
  }

  .projects .project-wrapper .text-wrapper .title, 
  .projects .project-wrapper .text-wrapper .desc,
  .projects .project-wrapper .text-wrapper .goto {
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    color: var(--secondary);
    margin-bottom: 15px;
  }

  .projects .project-wrapper .text-wrapper .desc {
    font-size: 16px;
    font-weight: 300;
    color: var(--secondary);
  }

  .projects .project-wrapper .text-wrapper .goto {
    text-decoration: none;
    font-size: 17px;
    color: var(--ternary);
  }

  @media screen and (max-width: 900px) {
    .projects .project-wrapper .content-wrapper,
    .projects .project-wrapper .content-wrapper1 {
      flex-direction: column;
      margin-bottom: 0;
    }

    .projects .project-wrapper img {
      max-width: 100%;
    }

    .projects .project-wrapper .text-wrapper {
      width: 100%;
      margin-left: 0;
      justify-content: flex-start;
      margin-top: 20px;
    }

    .projects .project-wrapper .text-wrapper .title, 
    .projects .project-wrapper .text-wrapper .desc,
    .projects .project-wrapper .text-wrapper .goto {
      text-align: center;
    }
  }

  @media screen and (max-width: 820px) {
    .projects {
      padding: 50px 100px;
    }
  }

  @media screen and (max-width: 600px) {

    .projects {
      padding: 50px 50px;
    }

    .projects .project-wrapper img {
      height: 220px;
    }

    .projects .project-wrapper .text-wrapper {
      padding: 5px;
    }
  }


</style>