<template>
  <div id="nav">
    <div class="logo">
      GFP
    </div>
    <div class="menu">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'Skills' }">Skills</router-link>
    </div>
    <div class="toggle">
      <box-icon class="moon" name='moon' flip='horizontal' ></box-icon>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <box-icon class="moon1" name='moon'></box-icon>
    </div>
    <box-icon name='menu-alt-right'></box-icon>
  </div>
  <router-view/>
</template>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 50px;
  height: 50px;
}

#nav .menu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid var(--ternary);
  border-radius: 25px;
  padding: 5px 7px;
}

#nav .menu a {
  font-weight: 400;
  padding: 5px 25px;
  border-radius: 20px;
  color: var(--ternary);
  margin: 0 7px;
  text-decoration: none;
}

#nav .menu a.router-link-exact-active {
  color: var(--secondary);
  background: var(--ternary);
}

#nav .logo {
  font-family: 'Rowdies', cursive;
  font-size: 26px;
  font-weight: 700;
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

 /* The switch - the box around the slider */
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
  background-color: var(--ternary);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--secondary);
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
    margin: 30px;
  }
}

@media screen and (max-width: 750px) {
  #nav .menu {
    display: none;
  }

  #nav box-icon[name="menu-alt-right"] {
    display: block;
    cursor: pointer;
  }

}

@media screen and (max-width: 500px) {
  #nav .logo {
    display: none;
  }

  #nav {
    margin: 20px 20px;
  }

  #nav .toggle .moon {
    display: none;
  }

  #nav .toggle .moon1 {
    display: inline;
  }
}

</style>
