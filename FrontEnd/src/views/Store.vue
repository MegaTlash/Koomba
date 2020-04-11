<template>
    <div class = "Store">
        <table id="items">
            <img src=../assets/Models/Jordan/JordanOutsidePicRain.jpg width=200>
        </table>
        <h1>Store</h1>
        <div class = "clothes-container">
            <div class = "clothes"
                v-for="{item, index} in clothes"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key ="item._id"
            >
            <p class = "text">{{item.itemType}}</p>
            </div>
        </div>
    </div>
</template>



<script>
import ClothesService from '../ClothesServices'
export default {
    name: 'Store',
    mounted : function() {
        var items = document.getElementById("items");
        items.innerHTML = '<img src="../assets/Models/Jordan/JordanOutsidePicRain.jpg" width=200>';
        console.log(items.innerHTML);
    },
    

    data(){
        return {
            clothes: [],
            error: '',
            text: '',
        }
    },
    async created(){
        try{
            this.clothes = ClothesService.getClothes();
            console.log(this.clothes);
        }catch(err){
            this.error = err.message;
        }
    }
};



</script>

<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
}
</style>