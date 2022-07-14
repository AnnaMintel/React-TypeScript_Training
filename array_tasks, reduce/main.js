 const taskManagerID_1 = "jkefjekfj" // v1()
 const taskManagerID_3 = "13fjskefjekfj" // v1()

const taskManagerLists = [
   {
      id: taskManagerID_1, 
      title: "What to learn" , 
      filter: "all" 
   },
   {
      id: v1(),
      title: "What to read" , 
      filter: "all"
   },
   {
      id: taskManagerID_3,
      title: "What to read" , 
      filter: "all"
   }
]

const tasks = {
   [taskManagerID_1] : [ 
      {name: "HTML", isDone: true},
      {name: "CSS", isDone: true},
      {name: "React", isDone: false}
   ],
   [taskManagerLists[0].id]  : [
      {name: "parrot", isDone: false},
      {name: "food", isDone: true},
      {name: "laptop", isDone: false}
   ],
   [taskManagerID_3]  : []
}

