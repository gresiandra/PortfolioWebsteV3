<template>
  <div id="overlayMenu">
    <div class="menuResponsive">
      <router-link @click="showMenu" :to="{ name: 'Home' }">Home</router-link>
      <router-link @click="showMenu" :to="{ name: 'Projects' }">Projects</router-link>
      <router-link @click="showMenu" :to="{ name: 'Skills' }">Skills</router-link>
    </div>
  </div> 
  <div id="nav">
    <div class="logo">
      GFP
    </div>
    <div class="menu">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'Skills' }">Skills</router-link>
    </div>
    <div class="toggle">
      <box-icon class="moon" name='moon' flip='horizontal' ></box-icon>
      <label class="switch">
        <input id="dark" type="checkbox" @click="darkMode">
        <span class="slider round"></span>
      </label>
      <box-icon class="moon1" name='moon'></box-icon>
    </div>
    <box-icon name='menu-alt-right' @click="showMenu"></box-icon>
  </div>
  <router-view/>

</template>

<script>
export default {
  methods: {
    showMenu() {
      const overlayMenu = document.querySelector('#overlayMenu')
      overlayMenu.classList.toggle('active')
    },
    darkMode() {
      const checkbox = document.querySelector('#dark');
      const icons = document.querySelectorAll('box-icon')

      // console.log(icons)
      
      for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute("color", "#ffffff")
      }

      if (checkbox.checked === true) {
        document.documentElement.style.setProperty('--primary', '#252222');
        document.documentElement.style.setProperty('--secondary', '#FFFFFF');
        for (let i = 0; i < icons.length; i++) {
          icons[i].setAttribute("color", "#ffffff")
        }
      } else {
        document.documentElement.style.setProperty('--primary', '#FFFFFF');
        document.documentElement.style.setProperty('--secondary', '#252222');
        for (let i = 0; i < icons.length; i++) {
          icons[i].setAttribute("color", "#252222")
        }
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

#overlayMenu {
  position: fixed;
  opacity: 0;
  top: -1000px;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 50px;
}

#overlayMenu.active {
  display: flex;
  opacity: 1;
  top: 0;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  background: var(--primary);
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
}

#overlayMenu .menuResponsive {
  display: flex;
  flex-direction: column;
  margin: 150px 30px;
  width: 100%;
  padding: 20px;
}

#overlayMenu .menuResponsive a {
  text-decoration: none;
  color: var(--secondary);
  margin: 15px auto;
  width: 100%;
  font-size: 24px;
  transition: all 0.3s ease;
}

#overlayMenu .menuResponsive a:hover {
  color: var(--ternary);
}

#nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  height: 100px;
  background: var(--primary);
}

#nav .menu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid var(--ternary);
  border-radius: 25px;
  padding: 5px 7px;
  background: var(--primary);
}

#nav .menu a {
  font-weight: 400;
  padding: 7px 25px;
  border-radius: 20px;
  color: var(--ternary);
  margin: 0 7px;
  text-decoration: none;
}

#nav .menu a.router-link-exact-active {
  color: var(--secondary);
  background: var(--ternary);
  transition: 0.3s;
}

#nav .logo {
  font-family: 'Rowdies', cursive;
  font-size: 26px;
  font-weight: 700;
  color: var(--secondary);
}

#nav .toggle {
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav .toggle .moon1 {
  display: none;
}

#nav box-icon[name="menu-alt-right"] {
  display: none;
  width: 40px;
  height: 40px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 25px;
  margin: 0 5px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #42b883;
}

input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 

@media screen and (max-width: 850px) {
  #nav {
    padding: 30px;
  }
}

@media screen and (max-width: 650px) {
  #nav .menu {
    display: none;
  }

  #nav box-icon[name="menu-alt-right"] {
    display: block;
    cursor: pointer;
    z-index: 2;
  }

}

@media screen and (max-width: 500px) {
  #nav .logo {
    display: none;
  }

  #nav {
    margin: 20px 10px;
    height: 50px;
  }

  #nav .toggle .moon {
    display: none;
  }

  #nav .toggle .moon1 {
    display: inline;
  }
}
</style>
