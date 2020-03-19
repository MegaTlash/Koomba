<template>
    <div class = "AboutMe">
        <div class = "KoombaImgAbout"> 
            <img src="../assets/Models/Harrith/harrithAboutMeProfilePic.jpg" class="harrithIMG">
            <div class = "KoombaMessage">
                <h1>About Me</h1>
                <p>Hey, my name is Harrith Sivalingam and welcome to the KOOMBA GANG. My koomba brand
                    is what i vision street ware should be and I wanted to share this with the world. The KOOMBA
                    brand. PUT MORE WORDS
                </p>
            </div>
        </div>
        

    </div>
</template>



<script>
export default {
    name: 'AboutMe',
};
</script>


<style scoped>
.harrithIMG{
    position: relative;
    float: left;
    margin-left: 18rem;
    height: 300px;
    width: auto;
    border-radius: 50%;
    
}
/*Change this if you find a better way TODO TODO TODO*/
.KoombaMessage h1{
  position: relative;
  float: left;
  margin-left: 5.25rem;
  display: block;
  font-size: 2em;
  
  font-weight: bold;
  color: #2A543C;
}

.KoombaMessage p{
    width: 60rem;
    padding-top: 3.5rem;
    padding-left: 22rem;
    margin-left: 20rem;
    text-align: left;
}


</style>