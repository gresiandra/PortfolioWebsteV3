<template>
  <div class="projects">
    <div class="project-wrapper">
      <div class="content-wrapper" v-for="project in $store.state.projects" :key="project.title">
        <img :src="getPicture(project.pic)" :alt="project.pic">
        <div class="text-wrapper">
          <h2 class="title">{{ project.title }}</h2>
          <p class="desc">{{ project.desc }}</p>
          <a :href="project.link" target="_blank" class="goto">Visit Website</a>
        </div>
      </div>
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
    margin-bottom: 120px;
  }

  .projects .project-wrapper .content-wrapper:nth-child(even) {
    flex-direction: row-reverse;
    margin-bottom: 120px;
  }

  .projects .project-wrapper img {
    min-width: 300px;
    height: 280px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(37, 34, 34, 0.4);
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
    line-height: 22px;
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
    .projects .project-wrapper .content-wrapper:nth-child(even),
    .projects .project-wrapper .content-wrapper {
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
      margin-bottom: 80px;
      height: 100%;
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
  }


</style>