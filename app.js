let course
let totalQuestions
let questionsToEvalue
let teacher
let sortedQuestions = []

function tossing (totalQuestions, questionsToEvalue){
  sortedQuestions = []
  let i = questionsToEvalue
  while(i>0){
    let question = Math.floor(Math.random()*totalQuestions)+1
    if(!sortedQuestions.includes(question)){
      sortedQuestions.push(question)
      i--
    }
}
return sortedQuestions.sort((a,b)=>a-b)
}

function toss() {
  course = document.getElementById("course").value
  totalQuestions = document.getElementById("total-questions").value
  questionsToEvalue = document.getElementById("total-evaluated").value
  teacher = document.getElementById("teacher").value
  sortedQuestions = tossing(totalQuestions, questionsToEvalue)
  window.location.assign('sorteo.html')
  console.log(localStorage)
  let resultCourse = getElementById("result-course")
  resultCourse.innerHTML = course
  
}


function newToss() {

  window.location.assign('index.html')
}

function setting() {

  location.href = "index.html"
}


