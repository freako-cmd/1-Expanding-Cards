
// querySelectorAll puts every 'class .panel' in a node list and that is similar to an array
const panels = document.querySelectorAll('.panel');

// loop through panel and 'forEach()' method calls a function for each element in the array
panels.forEach((panel) => {
    // take each panel and addEventListener and listen for a 'click' and when that happens we run a function
    panel.addEventListener('click', () => {
       
        
        // panel.classList gives a list of the classes snd method of .add - adds one or more class name to an element
        // by clicking on one 'class panel/photo/card' the clicked one gets added to the class of 'active' and changes to 'css flex: 5;'
        // the clicked panel/photo/card is expanding but not getting smaller
        panel.classList.add('active')
    })
})