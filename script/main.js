// {/* <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

// <div id="app">{{ message }}</div> */}


  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      
      }
    }
  }).mount('#app')
