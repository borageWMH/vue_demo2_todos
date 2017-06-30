/**
 * localStorage数据存储工具模块
 * 函数模块: 只提供一个功能
 * 对象模块: 提供多个功能
 */

const TODO_KET = 'TODO_KET'
export default {
  readTodos(){
      return JSON.parse(localStorage.getItem(TODO_KET) || '[]')
  },
  saveTodos(todos){
     localStorage.setItem(TODO_KET,JSON.stringify(todos))
  }
}
