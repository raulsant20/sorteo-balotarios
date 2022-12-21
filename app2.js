const tossButton = document.getElementById("toss")
const newTossButton = document.getElementById("new-toss")
const settingButton = document.getElementById("setting")

const setValues = () => {
  const course = document.getElementById("course")
  const resultCourse = document.getElementById("result-course")
  resultCourse.innerHTML = course.value
  const teacher = document.getElementById("teacher")
  const resultTeacher = document.getElementById("result-teacher")
  resultTeacher.innerHTML = teacher.value
}

const tossing = (totalQuestions, totalEvaluated) => {
  let sortedQuestions = []

  let i=0
  while(i < totalEvaluated){
    let question = Math.floor(Math.random()*totalQuestions)+1
    if(!sortedQuestions.includes(question)){
      sortedQuestions.push(question)
      i++
    }
  }
    
  return sortedQuestions.sort((a,b)=>a-b)
  
}

const toss = () => {
  // console.log("Estamos dentro del boton sorteo")
  let sortedQuestions
  setValues()
  const totalQuestions = document.getElementById("total-questions").value
  const totalEvaluated = document.getElementById("total-evaluated").value
  sortedQuestions =  tossing(totalQuestions, totalEvaluated)
  console.log(sortedQuestions)

  const questions = document.getElementsByClassName("question")
  for(let i=0; i<totalEvaluated; i++){
    questions[i].innerHTML = sortedQuestions[i]
  }
  
}

tossButton.addEventListener("click", toss)
newTossButton.addEventListener("click", toss)
