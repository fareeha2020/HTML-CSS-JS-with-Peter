document.getElementById("links-container").addEventListener('click', handleLinksContainerClickEvent);
function handleLinksContainerClickEvent(event) {  
    if(event.target.localName == "a"){
        let elements = document.getElementsByClassName("subject-content");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        let id = event.target.id.split('-')[0] + '-content';
        document.getElementById(id).style.display='block';
    }   
}