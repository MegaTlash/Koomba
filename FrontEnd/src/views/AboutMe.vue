<template>
    <div class = "AboutMe">
        <div class = "KoombaImgAbout"> 
            <img src="../assets/Models/Harrith/harrithAboutMeProfilePic.jpg" class="harrithIMG">
            <div class = "KoombaMessage">
                <h1>About Me</h1>
                <p>Welcome to the KOOMBA Gang. KOOMBA brand is the combination of streetwear and the actual streets. We come from a graffiti background, where reputation and Name is everything. We embrace the culture of graffiti, inspired by its unique hand styles. Our goal is to bring acknowledgement to the culture, bringing new eyes into our lifestyle. This is KOOMBA Gang.
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