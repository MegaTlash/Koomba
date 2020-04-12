<template>
    <div class="AboutMe">
        <div class="KoombaImgAbout columns"> 
            <div class="column is-half">
                <img src="../assets/Models/Harrith/harrithAboutMeProfilePic.jpg" class="harrithIMG">
            </div>
            <div class="KoombaMessage column is-one-third">
                <h1>ABOUT US</h1>
                <p>
                    Welcome to the KOOMBA Gang. KOOMBA brand is the combination of streetwear and the actual streets. 
                    We come from a graffiti background, where reputation and name is everything. We embrace the culture
                    of graffiti, inspired by its unique hand styles. Our goal is to bring acknowledgement to the culture, 
                    bringing new eyes into our lifestyle. This is KOOMBA Gang.
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
.harrithIMG {
    max-width: 20rem;
    border-radius: 50%;
    float: right;
    margin-right: 5rem;
}

h1 {
    font-size:3rem;
    font-weight: bold;
    font-style: italic;
    color: rgb(141, 197, 150);
    text-align: left;
}

p {
    width: 60rem;
    padding-top: 2rem;
    text-align: left;
    padding-right: 30rem;
}

</style>