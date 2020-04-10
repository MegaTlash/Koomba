<template>
    <div class = "Store">
        <table id="items">
            <img src=../assets/Models/Jordan/JordanOutsidePicRain.jpg width=200>
        </table>
    </div>
</template>



<script>
export default {
    name: 'Store',
    mounted : function() {
        var items = document.getElementById("items");
        items.innerHTML = '<img src="../assets/Models/Jordan/JordanOutsidePicRain.jpg" width=200>';
        console.log(items.innerHTML);
    }
    

};



</script>

<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
}
</style>