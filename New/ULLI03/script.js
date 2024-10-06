document.addEventListener('DOMContentLoaded', function()
{
    const listItem = document.querySelectorAll('.category-list li')
    console.log(listItem.length)
    listItem.forEach(item=>{
        item.addEventListener('click',function()
    {
        event.stopPropagation();

        const nestedUl = item.querySelector('ul');

        if(nestedUl)
        {
            if(nestedUl.style.display==='block')
            {
                nestedUl.style.display='none'
            }else
            {
                nestedUl.style.display='block';
            }
        }

        const nextLi = item.nextElementSibling;
        if(nextLi)
        {
            nextLi.style.display="list-item";
        }
    })
    })
})