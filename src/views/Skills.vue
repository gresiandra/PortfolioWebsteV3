<template>
  <div class="skills">
    <div class="development">
      <h1>Development</h1>
      <div class="devSkills">
        <p v-for="skill in $store.state.devSkills">
          {{ skill }}
        </p>
      </div>
    </div>
    <div class="others">
      <h1>Others</h1>
      <div class="otherSkills">
        <p v-for="skill in $store.state.otherSkills">
          {{ skill }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  .skills {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 80vh;
    padding: 50px 150px;
  }

  .skills .development,
  .skills .others {
    width: 100%;
  }

  .skills .development h1, 
  .skills .others h1 {
    margin: 20px auto 15px;
    font-size: ;
    font-weight: 500;
    color: var(--secondary);
    transition: all 0.4s ease;
  }

  .skills .others h1 {
    margin-top: 80px;
  }

  .skills .development .devSkills, 
  .skills .others .otherSkills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .skills .others .otherSkills {
    margin-bottom: 50px;
  }

  .skills .development .devSkills p,
  .skills .others .otherSkills p {
    background: var(--ternary);
    color: var(--secondary);
    font-weight: 400;
    padding: 10px 20px;
    margin: 10px 5px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(66, 184, 131, 0.2);
    transition: all 0.4s ease;
  }

  @media screen and (max-width: 500px) {
    .skills {
      justify-content: center;
      align-items: center;
      padding: 50px;
    }

    .skills .development h1, 
    .skills .others h1 {
      margin: 50px auto 15px;
    }
  }

</style>