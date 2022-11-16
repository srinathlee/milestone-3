const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      let over_items=[];
      for(let i of all){
        if(i.dueDate==yesterday){
            over_items.push(i);
        }
    }
    return over_items;
   }
    const dueToday = () => {
      let due_items=[];
      for(let i of all){
       
        if(i.dueDate==today){
            due_items.push(i);
        }
    }
    return due_items;
    }
  
    const dueLater = () => {
      let later_items=[];
      for(let i of all){
        if(i.dueDate==tomorrow){
            later_items.push(i);
        }
    }
    return later_items;
       }
    const toDisplayableList = (list) => {
     let str=""
       for (let i of list){
        if (i.dueDate==today){
            if(i.completed==true){
                str+=`[X] ${i.title}\n`
            }
            else{
                str+=`[ ] ${i.title}\n`
            }
        }
        else if(i.completed==true){
            str+=`[X] ${i.title} ${i.dueDate}\n`
        }
        else{
         str+=`[ ] ${i.title} ${i.dueDate}\n`
        }
       }
    return str.trim();

    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")