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
    height: 100vh;
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
    background: var(--primary);
    border: 1px solid var(--ternary);
    color: var(--secondary);
    font-weight: 300;
    padding: 10px 20px;
    margin: 10px 5px;
    border-radius: 20px;
  }

  .skills .development .devSkills p:hover,
  .skills .others .otherSkills p:hover {
    background: var(--ternary);
    transition: all 0.4s ease;
    font-weight: 500;
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