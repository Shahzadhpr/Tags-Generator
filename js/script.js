const $ = document
const tagsUlElem = $.querySelector('ul')
const tagInputElem = $.querySelector('input')
const tagCountSpanElem = $.querySelector('span')
const removeAllBtn = $.querySelector('button')

let tags = ['js'];
let maxCount = 10

const removeAllLis = () => {
    tagsUlElem.querySelectorAll('li').forEach(tag => tag.remove())
}

const countTag = () => {
    tagInputElem.focus()
    tagCountSpanElem.innerText = maxCount - tags.length
}

const removeTag = (tagElem, tagTitle) =>{

    let mainTag = tags.indexOf(tagTitle)
    tags.splice(mainTag, 1)
    // console.log(tagElem, tagTitle, mainTag);

    tagElem.parentElement.remove()
    countTag()
}

const creatTags= () => {
    
    removeAllLis()

    let li = null;

    [...tags].reverse().forEach(tag => {
        li = `<li>${tag}  <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')"></i></li>`
        tagsUlElem.insertAdjacentHTML('afterbegin', li)
    })

    countTag()
}

const addTag = (event) => {
    if (event.keyCode === 13) {
        let tagTitle = event.target.value

        if (tags.length < 10 && !tags.includes(tagTitle.toLowerCase())) {

            tagTitle.split(',').forEach(tag => {
                tags.push(tag.toLowerCase())        
            })

        }

        creatTags() 
        tagInputElem.value = ''
    }
}

creatTags()
countTag()

tagInputElem.addEventListener('keyup', addTag)
removeAllBtn.addEventListener('click', () => {
    tags.length = 0;
    removeAllLis()
    countTag()
})