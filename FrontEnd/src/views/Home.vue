<template>
    <div class = "Home">
        <div class = "VideoHomeLanding">
            <video ref = "videoRef" width = "720" height = "480" src = "../assets/koombaVideo.mp4" autoplay loop> </video>
        </div>

        <div class = "ParallaxSection">
            <div class="parallax" v-parallax="0.2">
                <img src = "../assets/koombaSignature.png" class = "parallaxSig">
            </div>
            
        </div>

        <p class = "Welcome">Welcome</p>
        <!--These are the images for showing-->
        <div class = "HomeImages" >
            <div class = "parallaxBackground" v-parallax="0.2">
                <!--These sets are the rainy pictures-->
                <div class = "columns ">
                    <div class = "picRow column is-one-third">
                        <img src="../assets/Models/Jordan/JordanOutsidePicRain.jpg">
                    </div>
                    <div class = "picRow column is-one-third">
                        <img src="../assets/Models/Harrith/HarrithCarPicOutsideRain.jpg">
                    </div>
                    
                    <div class = "picRow column is-one-third">
                        <img src="../assets/Models/Tam/TamCarPicOutside.jpg">
                    </div>
                </div>

                <!--Different sets of pictures-->
                <div class = "columns ">
                    <div class = "picRow column is-one-third">
                        <img src="../assets/Models/Ghafoor/GhafoorPicsTunnel.jpg">
                    </div>
                    <div class = "picRow column is-one-third">
                        <img src="../assets/Models/Harrith/harrithBeanie.jpg">
                    </div>
                    
                </div>
            </div>
            <!--Row-->
        </div>
    </div>
</template>



<script>
export default {
    name: 'Home',
};
</script>



<style scoped>
* {
  box-sizing: border-box;
}

.VideoHomeLanding{
    background: #292929;
}

.ParallaxSection{
    margin-top: 4rem;
    
}

.parallax {
    background: url('../assets/Models/Harrith/HarrithSittingDownGraf.jpg');
    background-size: cover;
    background-attachment: fixed;
    min-height: 600px;
    width: auto;
}

.parallaxBackground {
    background: url('');
    background-size: cover;
    background-attachment: fixed;
    min-height: 600px;
    width: auto;
    
}
.parallaxSig{
    min-height: 600px;
}
.Welcome{
    padding-top: 1.5rem;
    font-size:3rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
}
/*For the pictures*/
.HomeImages{
    margin-top: 3rem;
   
}

.picRow{
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.columns .picRow img{
    transition: 0.2s;
    border-radius: 3%;
    width: 75%;
    height: auto;
    opacity: 0;
    animation-name: HomeImages;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}

.columns .picRow img:hover{
    transform: scale(1.1);
}

/* Transitions */
@keyframes HomeImages{
    0% {opacity: 0}
    100%{opacity: 1};
}

</style>

