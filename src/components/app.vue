<template>
 <div>
   <div id="root">
     <div class="todo-container">
       <div class="todo-wrap">
         <demo_header :add="add"></demo_header>
         <list :todos="todos" :remove="remove"></list>
        <demo_footer></demo_footer>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import footer from "./footer.vue"
  import header from  "./header.vue"
  import list from "./list.vue"
  export default{
      data () {
         return{
           todos : [
             {name: "吃饭" , complete : false},
             {name: "睡觉" , complete : true},
             {name: "敲代码" , complete : false}
           ]
         }
      },
      components : {
          "demo_header" : header,
            list,
          "demo_footer" : footer
      },
    methods :{
          add(todo){
            this.todos.unshift(todo)
          },
          remove (index) {
            this.todos.splice(index, 1)
          }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }


</style>
