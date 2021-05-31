<template>
  <div class="home">
    <div class="content">
      <div class="img"></div>
      <div class="descriptions">
        <h1>gresiandra <br> putra.</h1>
        <p>{{ $store.state.summary }}</p>
        <div class="clickables">
          <button><a href="../assets/CV-small.pdf" download>Get CV</a></button>
          <div class="links">
            <a href="https://www.linkedin.com/in/gresiandra-putra-972b4120" target="_blank" title="LinkedIn"><box-icon type='logo' name='linkedin-square'></box-icon></a>
            <a href="https://github.com/gresiandra" target="_blank"><box-icon name='github' type='logo' title="Github"></box-icon></a>
            <a href="https://linktr.ee/gresiandra" target="_blank" title="Send Email"><box-icon name='mail-send' ></box-icon></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    padding: 50px 150px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 370px;
  }

  .content .img {
    width: 90%;
    height: 100%;
    background: url('../assets/me.png') no-repeat center;
    background-size: cover;
  }

  .content .descriptions {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    color: var(--secondary)
  }

  .content .descriptions h1 {
    font-weight: 400;
    font-size: 60px;
    text-align: left;
    margin-bottom: 30px;
    transition: all 0.4s ease;
  }

  .content .descriptions p {
    font-weight: 300;
    font-size: 17px;
    text-align: left;
    margin-bottom: 20px;
    line-height: 30px;
    transition: all 0.4s ease;
  }

  .content .descriptions .clickables {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }

  .content .descriptions .clickables button {
    width: 120px;
    height: 45px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    background: var(--ternary);
    box-shadow: 5px 5px 5px rgba(66, 184, 131, 0.4);
    cursor: pointer;
    margin-right: 20px;
  }

  .content .descriptions .clickables button:hover {
    transform: translateY(2px);
    transition: all 0.4s ease;
  }

  .content .descriptions .clickables button a{
    text-decoration: none;
    color: var(--secondary);
    transition: all 0.4s ease;
  }

  .content .descriptions .clickables .links {
    display: flex;
  }

  .content .descriptions .clickables box-icon[name="linkedin-square"], 
  .content .descriptions .clickables box-icon[name="github"], 
  .content .descriptions .clickables box-icon[name="mail-send"] {
    width: 35px;
    height: 35px;
    margin: 0 10px;
  }
  
  .content .descriptions .clickables box-icon[name="linkedin-square"]:hover, 
  .content .descriptions .clickables box-icon[name="github"]:hover, 
  .content .descriptions .clickables box-icon[name="mail-send"]:hover {
    transform: translateY(2px);
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 1000px) {
    .home {
      padding: 50px 80px;
    }
  }

  @media screen and (max-width: 850px) {

    .home {
      padding: 50px 50px;
    }

    .content .descriptions h1 {
      font-size: 52px;
    }

    .content .descriptions p {
      font-size: 15px;
    }

    .content .img {
      width: 120%;
    }

    .content .descriptions {
      width: 80%;
    }

    .content .descriptions .clickables box-icon[name="linkedin-square"], 
    .content .descriptions .clickables box-icon[name="github"], 
    .content .descriptions .clickables box-icon[name="mail-send"] {
      margin: 5px;
    }
  }

  @media screen and (max-width: 670px) {
    .home {
      margin-top: 50px;
      padding: 50px 20px;
      min-height: 100vh;
    }

    .content {
      flex-direction: column;
      min-height: 100vh;
    }

    .content .img {
      min-height: 350px;
      width: 100%;
      margin-bottom: 30px;
    }

    .content .descriptions {
      min-height: 300px;
      width: 100%;
    }

    .content .descriptions h1 {
      font-size: 48px;
      text-align: center;
      text-transform: capitalize;
    }

    .content .descriptions p {
      font-size: 15px;
      text-align: center;
    }

    .content .descriptions .clickables {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }

    .content .descriptions .clickables button {
      margin-right: 0;
      margin-bottom: 25px;
    }

    .content .descriptions .clickables box-icon[name="linkedin-square"], 
    .content .descriptions .clickables box-icon[name="github"], 
    .content .descriptions .clickables box-icon[name="mail-send"] {
      margin: 10px;
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 500px) {
    .content .img {
      max-height: 250px;
    }
  }

</style>
