<template>
    <div class = "Contact">
        <h1>Contact</h1>
        <div id="contact">
            <div>Instagram: <a href="https://www.instagram.com/_koomba_/">@koomba</a></div>
            <div>Email: <a>koomba@gmail.com</a></div>
        </div>
        <div id="subscribe">
            <h2>Subscribe to our weekly newsletter!</h2>
            <form>
                <label for="email">Your email:</label>
                <input type="text" id="email" name="email">
                <input type="submit" value="Submit">
            </form>
        </div>
        
    </div>
</template>



<script>
export default {
    name: 'Contact',
};
</script>

<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
}

#contact div{
    padding: 0.5rem;
}

#subscribe {
    padding-top: 3rem;
}

#subscribe h2 {
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 1rem;
}
</style>