<template>
  <div>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认"
             v-model="inputToDo" @keyup.enter="addToDo"/>
    </div>
  </div>
</template>

<script>
 export default{
     props:{
       add :{
           type : Function , // 限制接受的数据的类型 和 是否是必须传入的
           required : true
       }
     },
     data(){
         return{
           inputToDo :''
         }
     },
   methods :{
     addToDo(){
         console.log(this.inputToDo);
         // 先对输入框的内容进行判断
          if (!this.inputToDo.trim()){
              this.inputToDo = ''
              return
          }
         // 首先获取输入的值，创建一个todo对象
          let todo = {
              name : this.inputToDo,
              complete : false
          }

        // 然后将todo 添加到 todos 里面 显示在页面
       // 此时操作的是todos 里面的数据，所以不应该在这个里面直接从操作，应该在主页面上进行操作
       // props 里面的数据就就相当于data里面的数据，用法是一样的
        this.add(todo)

       // 清除输入框的内容
       this.inputToDo = ''
     }
   }
 }


</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>
