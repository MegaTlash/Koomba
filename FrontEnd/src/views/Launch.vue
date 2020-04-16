
<template>
    <body>
        <section class = "hero is-fullheight">
            <div class = "hero-head">
                <img src = "../assets/koombaLOGOTransparent.png">
                <h1>Join the Koomba Gang</h1>
            </div>
        </section>
    </body>
</template>


<script>
export default {
    name: 'Launch',
    
}
</script>


<style scoped>

*{
    color: black;
}

body {
  overflow: hidden; /* Hide scrollbars */
  overflow-x: hidden;
}

h1{
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    font-size: 2rem;
}
.hero{
    background: url("../assets/Models/Harrith/HarrithCarOutsideParallax.jpg") center / cover;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

img{
    height: 20rem;
}



</style>