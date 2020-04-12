<template>
  
  <footer class="footer">
    <div class="content has-text-centered">
      
      <!--<p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>

      <img src="https://lh3.googleusercontent.com/proxy/SF0Tr9rcM11D-b4T3_lOV2iU8EDGbaK6ixwzhusJHKBQBOtGZPJIAjrfwCpxu_3VY1YvhZ4ixap7RKlx1z7y2bvPhFfqDuuoCMDxcJVZ8RSn0zaAxl8" 
          alt="Twitter" width=50 height=50>-->
      <div id="chat">
        <i class="fa fa-angle-double-up fa-2x" @click="popup"></i>Chat
        <div id="messages">
          <div>Tom:  Hi, would you like any assistance?</div>
        </div>
        <div id="chatForm">
          <input v-on:keyup.enter="addMessage" type="text" name="message" id="messageField" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    popup() {
      if (document.getElementById("chat").style.height == "20rem"){
        document.getElementById("chat").style.height = "3rem";
      }
      else {
        document.getElementById("chat").style.height = "20rem";
      }
    },
    addMessage() {
      let messageField = document.getElementById("messageField");

      // Create text message with the value entered
      let newListItem = document.createElement('div');
      newListItem.appendChild(document.createTextNode("You: " + messageField.value + "\n"));

      // Insert new message
      let messages = document.getElementById('messages');
      messages.appendChild(newListItem); 

      messageField.value = ""; // Initialize new message to blank

      document.getElementById('messages').scrollBy(0, 100); // Go to bottom of conversation
    }
  }
}  

</script>

<style>
.footer {
  position: relative;
  margin-top: 10rem;
  bottom: 0;
  width: 100%;
  height: 5%;
  text-align: center;
}

.fa-angle-double-up {
  color: #2A543C;
  margin-bottom: 1rem;
  float: left;
}

#chat {
	display: block;
	position: fixed;
	bottom: 0;
	right: 0rem;
  height: 3rem;
	width: 17.5rem;
	padding: 0.25em 1em 0.25em 1em;
	background: white;
	border: 1px solid rgb(141, 197, 150);
}

div #messages {
  text-align: left;
  padding-top: 2rem;
	padding-left: 1rem;
  width: 250px;
  height: 200px;
  overflow: auto;
}

#chatForm {
	padding-top: 2rem;
}

</style>