<template>
    <div class="Contact">
        <h1>CONTACT</h1>
        <div class="columns">
            <div class="column is-one-quarter"></div>
            <div class="column is-narrow">
                <div><a class="fa fa-instagram" href="https://www.instagram.com/_koomba_/"></a></div>
                <div><a href="https://www.instagram.com/_koomba_/">@koomba</a></div>
            </div>
            <div class="column is-one-quarter">
                <div><i class="fa fa-envelope"></i></div>
                <div><a>koomba@gmail.com</a></div>
            </div>
            <div id="subscribe" class="column is-one-third">
                <h2>Subscribe to our weekly newsletter!</h2>
                <div class="field has-addons is-horizontal">
                    <div class="control is-expanded">
                        <input class="input is-dark" type="email" placeholder="Email Address">    
                    </div>
                    <div class="control">
                        <a class="button is-dark">Join</a>
                    </div>
                </div>
            </div>
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
    font-style: italic;
    margin-bottom: 2rem;
    color: rgb(141, 197, 150);
}

.columns {
    background: rgb(141, 197, 150);
    margin: auto;
    padding-bottom: 7rem;
}

.is-one-quarter, .is-narrow {
    margin-top: 6rem;
}

.fa-instagram {
  background: #2A543C;
  color: rgb(141, 197, 150);
  padding: 1.5rem;
  font-size: 2.5rem;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}

i {
    font-size: 5rem;
    margin-bottom: 1.5rem;
}

a {
    color: #2A543C;
}

a:hover {
    color: white;
}


#subscribe {
    margin-top: 5rem;
}

#subscribe h2 {
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 1rem;
}
</style>