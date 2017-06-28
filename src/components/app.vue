<template>
 <div>
   <div id="root">
     <div class="todo-container">
       <div class="todo-wrap">
         <demo_header></demo_header>
         <list></list>
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
      components : {
          "demo_header" : header,
            list,
          "demo_footer" : footer
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
