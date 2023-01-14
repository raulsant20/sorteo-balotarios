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

const creatingDivs = (arr) => {
  const divContainer = document.getElementById("questions-selected")
  const divs = document.getElementsByClassName("question")
  
  while(divs.length){
    divContainer.removeChild(divs[0])
  }

  arr.map(number => {
    const div = document.createElement("div")
    div.innerHTML = number
    div.setAttribute("class", `question ${number}`)
    console.log(div)
    divContainer.appendChild(div)
  })
}

const toss = () => {
  let sortedQuestions
  setValues()
  const totalQuestions = document.getElementById("total-questions").value
  const totalEvaluated = document.getElementById("total-evaluated").value
  sortedQuestions =  tossing(totalQuestions, totalEvaluated)
  console.log(sortedQuestions)

  creatingDivs(sortedQuestions)
    
  const element = document.getElementById("results")
  element.scrollIntoView(true)
}

const settings = () => {
  const element = document.getElementById("body")
  console.log(element)
  element.scrollIntoView(true)
}

tossButton.addEventListener("click", toss)
newTossButton.addEventListener("click", toss)
settingButton.addEventListener("click", settings)
