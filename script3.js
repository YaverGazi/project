TagsEl=document.querySelector('.tags');
texarea=document.querySelector('#textarea');


textarea.focus()



textarea.addEventListener('keyup',(e)=>{

createTags(e.target.value);
})


 function createTags(input){
const tags=input.split(',').filter(tag => tag.trim()
!=='').map(tag => tag.trim())

     agsEl.innerHTML=''



tags.forEach(tag => {
   const tagEl =document.createElement('span');
   tagEl.classList.add('tag');
   tagEl.innerText=tag;
   tagsEl.appendChild(tagEl);
})

 }

 function rundamselect(){
    const tímes=30;

    const interval=setInterval(() => {
        const randomTag=pickrandomTag()

hightlighttag(randomTag)

setTimeout(()=>{
unhightlighttag(randomtag)
},100)
    }, 100);
 }
 function pickrandomTag(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random*tags.length)]
 }
  function  hightlighttag(tag){
    tag.classList.add(' hightlight')
  }

  
  function  unhightlighttag(tag){
    tag.classList.remove(' hightlight')
  }