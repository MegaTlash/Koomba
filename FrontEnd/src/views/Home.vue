<template>
    <div class = "Home">
        <div class = "VideoHomeLanding">
            <video width = "720" height = "480" src = "../assets/koombaVideo.mp4" autoplay>
            </video>
        </div>
        <p class = "Welcome">Welcome</p>
        <!--These are the images for showing-->
        <div class = "HomeImages">
            
            <!--These sets are the rainy pictures-->
            <div class = "FirstRowRainyImages">
                <div class = "rainyRow">
                    <img src="../assets/Models/Jordan/JordanOutsidePicRain.jpg">
                </div>
                <div class = "rainyRow">
                    <img src="../assets/Models/Harrith/HarrithCarPicOutsideRain.jpg">
                </div>
                
                <div class = "rainyRow">
                    <img src="../assets/Models/Tam/TamCarPicOutside.jpg">
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

/*For the pictures*/
.HomeImages{
    margin-top: 3rem;
}
.rainyRow {
  float: left;
  width: 33.33%;
  padding: 1px;
  white-space: nowrap;
}

.Welcome{
    padding-top: 1.5rem;
    font-size: 2rem;
}

/* Clearfix (clear floats) 
.FirstRowRainyImages::after {
  content: "";
  clear: both;
  display: table;
}
*/


.rainyRow{
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: #292929;
}

.FirstRowRainyImages .rainyRow img{
    transition: 0.2s;
    width: 70%;
    height: auto;
}

.FirstRowRainyImages .rainyRow img:hover{
    transform: scale(1.1);
    
}

</style>

