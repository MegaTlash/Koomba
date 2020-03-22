<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id = "navbarContents" class = "navbar-menu">
            <div class="navbar-start">
                <a class = "navbar-item"><router-link to = "/home">Home</router-link></a>
                <a class = "navbar-item"><router-link to = "/instagram">Instagram</router-link></a>
                <a class = "navbar-item"><router-link to = "/faq">FAQ</router-link></a>
                <a class = "navbar-item"><router-link to = "/contact">Contact</router-link></a>
                <a class = "navbar-item"><router-link to = "/policy">Policy</router-link></a>
                <a class = "navbar-item"><router-link to = "/aboutme" active-class = "active">About Me</router-link></a>
            </div>
        </div> 
    </nav>
</template>


<script>
export default {
    name: "Nav",
}
</script>


<style lang="scss" scoped>
//Making the nav bar centered (THIS TOOK TOO LONG)
.navbar .navbar-start {
  text-align: center;
  display: block;
  width: 100%;
}

.navbar .navbar-start > .navbar-item,
.navbar .navbar-start .navbar-link {
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  position: relative;
  top: -3rem;
  margin-right: 2rem;

}



.navbar .navbar-start > .navbar-item:hover,
.navbar .navbar-start .navbar-link:hover {
    color: #2A543C;
}

//This removes the blue lines but if you hover over the work it changes to another color FIX PLZ!
a {
  color: inherit;
}

router-link-exact-active a {
    color: #2A543C;
} 



</style>