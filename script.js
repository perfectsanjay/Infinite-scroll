const loader = document.getElementById('loader')
const img_container = document.getElementById('img-container')

let photolist = []
let ready = false
let imagesLoaded = 0
let totalImages = 0
const count = 10
const apiKey = 'xBB01Qk3lWCTdYJsMluZYgCJ58AmvVaayr_dexO_U7Y'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function imageLoaded(){
    imageLoaded++;
    console.log('image loaded');
    if(imageLoaded === totalImages){
        ready = true
        loader.hidden = true
        count = 30
    }
}



function setAttribute(element,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key])
    }
}

function GetImage(){
    imageLoaded = 0
    totalImages = photoArray.length

    photolist.forEach((photo)=>{
        const item = document.createElement('a')
        // item.setAttribute('href',photo.links.html)
        // item.setAttribute('target','_blank')
        setAttribute(item,{
            href:photo.links.html,
            target:'_blank'
        })
      
        const img = document.createElement('img')
         setAttribute(img,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
         })
        // img.setAttribute('src',photo.urls.regular)
        // img.setAttribute('alt',photo.alt_description)
        // img.setAttribute('title',photo.alt_description) 
         img.addEventListener('load',imageLoaded)

        item.appendChild(img)
        img_container.appendChild(item)
    })
    

    }



async function GetApi(){
    try{
        const response = await fetch(apiUrl)
        photolist = await response.json()
        console.log(photolist)
        GetImage()
    }catch(error){
        // console.log();
    }
    
   
}
window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY >=document.body.offsetHeight- 1000 && ready){
        ready = false
        GetApi()
    }
})


GetApi()