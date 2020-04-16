<template>
  
  <footer class="footer">
    <div class="content has-text-centered">
      <div class = "koombaSig">
      </div>
      <div id="chat">
        <i id="arrow" class="fa fa-angle-double-up fa-2x" @click="popup"></i>
        Chat
        <div id="messages">
          <div>Ask a question if you require any assistance.</div>
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
      // Close chat if its open
      if (document.getElementById("chat").style.height == "20rem"){
        document.getElementById("chat").style.height = "3rem";
        document.getElementById("arrow").className = "fa fa-angle-double-up fa-2x";
      }
      else { // Open chat if its closed
        document.getElementById("chat").style.height = "20rem";
        document.getElementById("arrow").className = "fa fa-angle-double-down fa-2x";
      }
    },
    addMessage() { // Some of the chat code was taken from my Lab 3 (Shawn)
      let messageField = document.getElementById("messageField");

      // Create text message with the value entered
      let newListItem = document.createElement('div');
      newListItem.appendChild(document.createTextNode(this.$parent.firstname + ": " + messageField.value + "\n"));

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

.fa-angle-double-down {
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

#messages {
  text-align: left;
  padding-top: 0.5rem;
	padding-left: 1rem;
  width: 250px;
  height: 200px;
  overflow: auto;
}

#messages div {
  padding-right: 10px;
  padding-bottom: 10px;
}

#chatForm {
	padding-top: 2rem;
}

</style>