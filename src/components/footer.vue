<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox"/>
      </label>
      <span>
          <span>已完成{{completeSize}}</span> / 全部{{this.todos.length}}
        </span>
      <button class="btn btn-danger" @click="removeCompleted">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
 export default{
     props :['todos','removeSelected'],
    data(){
         return{

         }
    },
   methods :{
     removeCompleted(){
         let completed = this.todos.filter(todo => todo.complete)
         for (let i = 0; i < completed.length; i++) {
          let name = completed[i].name;
           if(confirm("是否确认删除 " + name +  " 这个已完成的任务吗？")){
             this.removeSelected()
           }
       }
     }
   },
   computed :{
     completeSize(){
        return this.todos.reduce((preTotal,todo) =>{
            return preTotal + (todo.complete ? 1 : 0)
        },0)
     }
   }
 }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
