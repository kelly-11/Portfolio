const topList = ["Home", "About Me", "Portfolio", "Resume"]

const headerContainer = document.querySelector(".header")

const title = document.createElement("h1")  
title.classList.add("title")
title.textContent = "Kelly's Page"
headerContainer.appendChild(title)

const listDiv = document.createElement("div")
listDiv.classList.add("list")
const tabsList = document.createElement("ul")
tabsList.innerHTML = `<li>${topList[0]}</li> <li>${topList[1]}</li> <li>${topList[2]}</li> <li>${topList[3]}</li>`
listDiv.appendChild(tabsList)
headerContainer.appendChild(listDiv)

const btnDiv = document.createElement("btn")
btnDiv.classList.add("btn")
const contactBtn = document.createElement("Button")
contactBtn.textContent = "Contact Me"
btnDiv.appendChild(contactBtn)
headerContainer.appendChild(btnDiv)

const mainContainer = document.querySelector(".main")

const introDiv = document.createElement("div")
introDiv.classList.add("intro")
introDiv.innerHTML = "<h1>HOLA! I'm Kelly,</h1> <br> <p>I am a Software Engineer, eager to tackle new challenging projects! I have a passion for making apps/ websites come to life. Creative & out of the box thinker here that’s ready to be a part of a team or handle a any given project on my own!</p>"
mainContainer.appendChild(introDiv)

const logoDiv = document.createElement("div")
logoDiv.classList.add("logos")

const logoLink = document.createElement("a")
logoLink.href = "https://github.com/kelly-11"
const logo1 = document.createElement("img")
logo1.src = "images/gitHub.jpeg"
logoLink.appendChild(logo1)
logoDiv.appendChild(logoLink)

const logoLink2 = document.createElement("a")
logoLink2.href = "https://www.linkedin.com/in/kelly-guzman-92308b245/"
const logo2 = document.createElement("img")
logo2.src = "images/linkedIn.jpeg"
logoLink2.appendChild(logo2)
logoDiv.appendChild(logoLink2)
introDiv.appendChild(logoDiv)


const imgDiv = document.createElement("div")
imgDiv.classList.add("img")
const img = document.createElement("img")
img.src = "images/myImg.jpeg"
imgDiv.appendChild(img)
mainContainer.appendChild(imgDiv)

const mainContainer2 = document.querySelector(".main2")

const skillsWebDiv = document.createElement("div")
skillsWebDiv.classList.add("skillsWeb")
const logoWeb = document.createElement("img")
logoWeb.src = "images/skillsLogos.jpeg"
skillsWebDiv.appendChild(logoWeb)
mainContainer2.appendChild(skillsWebDiv)

const skillsDescrip = document.createElement("div")
skillsDescrip.classList.add("discript")

const descript = document.createElement("div")
descript.innerHTML = "<h1>I specialize in...</h1>"
skillsDescrip.appendChild(descript)
mainContainer2.appendChild(skillsDescrip)

const descripContainers = document.createElement("div")
descripContainers.classList.add("descripContain")

const descripCont1 = document.createElement("div")
descripCont1.classList.add("div1")
descripCont1.innerHTML = "<h1>* JavaScript *</h1> <p>With JavaScript, the sky is the limit! It's what I consider, gives life to a webpage, making it have function. I am a picasso, when it comes to using the DOM to build the site!</p>"
descripContainers.appendChild(descripCont1)

const descripCont2 = document.createElement("div")
descripCont2.classList.add("div2")
descripCont2.innerHTML = "<h1>* MERN *</h1> <p><strong>M</strong>ongo <strong>E</strong>xpress <strong>R</strong>eact <strong>N</strong>ode <br> Need a multi-page full-stack App built? Well look no further! I have the skills to build a full CRUD App using MERN.</p>"
descripContainers.appendChild(descripCont2)

const descriptCont3 = document.createElement("div")
descriptCont3.classList.add("div3")
descriptCont3.innerHTML = "<h1>* CSS *</h1> <p>You can call me modern day Leonardo Da Vinci, when it comes to meeting your styling needs. I'll turn your ideas into a work of art by utilizing whatever styling elements necessary.</p>"
descripContainers.appendChild(descriptCont3)


skillsDescrip.appendChild(descripContainers)



