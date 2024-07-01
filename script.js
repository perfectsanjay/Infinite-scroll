const loader = document.getElementById('loader')
const img_container = document.getElementById('img-container')

let photolist = []
const count = 10
const apiKey = 'xBB01Qk3lWCTdYJsMluZYgCJ58AmvVaayr_dexO_U7Y'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function GetImage(){

    photolist.forEach((photo)=>{
        const item = document.createElement('a')
        item.setAttribute('href',photo.links.html)
        item.setAttribute('target','_blank')
      
        img = document.createElement('img')
        img.setAttribute('href',img.urls.regular)
        img.setAttribute('alt',img.alt_description)
        img.setAttribute('title',img.alt_description) 
    })
    

    }



async function GetApi(){
    const response = await fetch(apiUrl)
    photolist = await response.json()
    console.log(photolist);
   
}
GetApi()