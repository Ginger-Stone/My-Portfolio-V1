// work on making the dot be animated and the tabs to switch from one to anoher nicely

let navItems=document.getElementsByClassName("nav-item")

let span=document.createElement("span")

// loop through to add event listeners to nav items
function nav(){
let i=0;
let previous,active=navItems[0]
// dotNav[0].style="visibility:visible"
while(i<navItems.length){
    navItems[i].addEventListener("click",function(){
        navItems[0].style="color:black"
        i=0
        let navItemIds=new Set()
        navItemIds.add('my-skillset')
        navItemIds.add('portfolio')
        navItemIds.add('about-me')
        
        navItemIds.add(active.id)
        console.log(active)

        active=document.getElementById(this.id)
        tabSwitch(this.id)
        navItemIds.delete(this.id)
        let navItemIdsArray=Array.from(navItemIds)
        
            active.style="color:#ec008c;"
            let spanActive = active.appendChild(span)
            spanActive.setAttribute("class","dot")
            
        while(i<navItemIdsArray.length){
            console.log(navItemIdsArray[i])
            let inActive = document.getElementById(navItemIdsArray[i])

            inActive.style="color:black;"
            i++
        }
    })
    i++
}
console.log("attached nav listeners")
}

let navVar= nav()

// switching between tabs
function tabSwitch(arg){
    let aboutMeContentClass=document.getElementById("about-me-content")
    let mySkillsetContentClass=document.getElementById("my-skillset-content")
    let portfolioContentClass=document.getElementById("portfolio-content")
    console.log("This is the current tabs content: "+arg+"-content")
    let content=arg+"-content"
    if(content==="about-me-content"){
        aboutMeContentClass.style="visibility:visible;display:block;"
        mySkillsetContentClass.style="visibility:hidden;display:none"
        portfolioContentClass.style="visibility:hidden;display:none"
    }else if(content==="my-skillset-content"){
        aboutMeContentClass.style="visibility:hidden;display:none"
        mySkillsetContentClass.style="visibility:visible;display:block;"
        portfolioContentClass.style="visibility:hidden;display:none"
    }else if(content==="portfolio-content"){
        aboutMeContentClass.style="visibility:hidden;display:none"
        mySkillsetContentClass.style="visibility:hidden;display:none"
        portfolioContentClass.style="visibility:visible;display:block;"
    }

}


