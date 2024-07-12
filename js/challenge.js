document.addEventListener('DOMContentLoaded',()=>{
    const timerDisplay= document.getElementById('counter')
    let counter=0
    setInterval(()=>{
        counter++
        timerDisplay.textContent=counter
    },1000)
})
document.addEventListener('DOMContentLoaded',()=>{
    const timerDisplay= document.getElementById('counter')
    const plusButton= document.getElementById('plus')
    const minusButton= document.getElementById('minus')
    let counter=0
    plusButton.addEventListener('click',()=>{
        counter++
        timerDisplay.textContent=counter
    })
    minusButton.addEventListener('click',()=>{
        counter--
        timerDisplay.textContent=counter
    })
    setInterval(()=>{
        counter++
        timerDisplay.textContent=counter
    },1000)
})
document.addEventListener('DOMContentLoaded',()=>{
    const timerDisplay=document.getElementById('counter')
    const plusButton=document.getElementById('plus')
    const minusButton=document.getElementById('minus')
    const likeButton=document.getElementById('heart')
    const likesList=document.querySelector('.likes')
    let counter=0
    let likes={}
    plusButton.addEventListener('click',()=>{
        counter++
        timerDisplay.textContent=counter
    })
    minusButton.addEventListener('click', ()=>{
        counter--
        timerDisplay.textContent=counter
    })
    likeButton.addEventListener('click',()=>{
        if(likes[counter]){
            likes[counter]++
            document.getElementById(`like-${counter}`).textContent=`${counter} has been liked ${likes[counter]} times`
        }else{
            likes[counter]=1
            const likeItem=document.createElement('li')
            likeItem.setAttribute('id', `like-${counter}`)
            likeItem.textContent=`${counter} has been liked 1 time`
            likesList.appendChild(likeItem)
        }
    })
    setInterval(()=>{
        counter++
        timerDisplay.textContent=counter
    },1000)
})
document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('list');
    let counter = 0;
    let likes = {};
    let timerInterval;
function disableButtons(disabled){
    plusButton.disabled=disabled
    minusButton.disabled=disabled
    likeButton.disabled=disabled
}
function pauseTimer(){
    clearInterval(timerInterval)
    pauseButton.textContent='resume'
    disableButtons(true)
}
function resumeTimer(){
    timerInterval=setInterval(()=>{
        counter++
        timerDisplay.textContent=counter
    },1000)
    pauseButton.textContent='pause'
    disableButtons(false)
}
pauseButton.addEventListener('click',()=>{
    if(pauseButton.textContent==='pause'){
        pauseTimer()
    }else{
        resumeTimer()
    }
})
resumeButton.addEventListener('click', resumeTimer)
likeButton.addEventListener('click', ()=>{
    if(likes[counter]){
        likes[counter]++
        document.getElementById(`like-${counter}`).textContent=`${counter} has been liked ${likes[counter]} times`
    }else{
        likes[counter]=1
        const likeItem=document.createElement('li')
        likeItem.setAttribute('id', `like-${counter}`)
        likeItem.textContent=`${counter} has been liked 1 time`
        likesList.appendChild(likeItem)
    }
})
commentForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const commentInput=document.getElementById('comment-input')
    const commentText=commentInput.value.trim()
    if(commentText!==''){
        const commentItem=document.createElement('div')
        commentItem.textContent=commentText
        commentsList.appendChild(commentItem)
        commentInput.value=''
    }
})
timerInterval=setInterval(()=>{
    counter++
    timerDisplay.textContent=counter
},1000)
})