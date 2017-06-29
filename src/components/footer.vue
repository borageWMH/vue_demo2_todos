<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="allComplete"/>
        <!--  v-model="allComplete"  这个属性和input 里面的checkbox 的值是一一对应的 -->
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
     props :['todos','removeSelected','removeAllSelected'],
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
            // 最后 遍历的元素返回的结果就是reduce( ) 的返回值
        },0)
     },

     allComplete : {
         get (){
             return this.completeSize === this.todos.length && this.completeSize != 0
         },
         set (value){
           this.removeAllSelected(value)
         }
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
