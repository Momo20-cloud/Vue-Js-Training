<div id="app">
      <h1> The CheckList</h1>
     
       
      <ajout @nouvellenote="ajouterNote"></ajout>


      <note v-for="todo in todos" :content="todo" v-on:click="inverser"></note>

      <ajout @nouvellenote="ajouterNote"></ajout>


    </div>


    <!-- Import Vue.js -->
    <script src="https://unpkg.com/vue@next"></script>


    <!-- Import App -->
    <script src="app.js"></script>

    <script>
      const msg = Vue.createApp({
        data(){
          return {
            todos: ["Sauver le monde", "Apprendre Vue Js", "Boire un café"]
          }
        },
        methods: {
          inverser(){
            this.todos.reverse();
          },
          ajouterNote(message){
            this.todos.push(message);
          }
        },
        
      })
        
      msg.component('note', {
        props:['content'],
        template: `<p> {{content}} </p> `
      });

      msg.component('ajout', {
        props: [],
        emits:['nouvellenote'],
        data(){
          return {
            interne: 'Nouveau message'
          }
        },
        methods: {
          enregistrementNote(){
            this.$emit('nouvellenote', this.interne),
            this.interne='';
          }
        },
        template: `<input type="text" v-model="interne">
      <a href="#" @click="enregistrementNote" v-if="interne!= '' ">Ajouter</a>
      {{interne}}`,
      })

      msg.mount('#app');
    </script>