
// querySelectorAll puts every class '.panel' in a node list and that is similar to an array
const panels = document.querySelectorAll('.panel');

// 'forEach' method loops through the variable 'const panels' that is a node list. 
// 'forEach()' method calls a function for each element in the array (callback function = function that executes on each element of array)
panels.forEach((panel) => {
    
    // take each panel and addEventListener and listen for a 'click' and when that happens we run a function
    // arrow function () => {...}
    panel.addEventListener('click', () => {
        
        // will call a function (defined below) to remove the 'class of active' on all of the panels/photos 
        // that will make sure that if the panel/photo was expanded it now gets smaller again
        // when we click, the function is going to remove all the active classes from all of the panels/photos 
        // and then put the active class on the one we click. 
        removeAllActiveClasses()

        // 'panel.classList' gives a list of the classes/returns the class name of an element 
        // '.add' method - adds one or more class name(s) to an element
        // by clicking on one 'class panel/photo/card' the clicked one gets added to the class of 'active' and changes to 'css flex: 5;'
        // the clicked panel/photo/card is expanding but not getting smaller
        panel.classList.add('active')
    })
})

// creates a function that will remove 'class of active' on all panels/photos
function removeAllActiveClasses() {
    
    // 'panels.forEach' loops through 'const = panels' and calls function on each element in the variable 
    panels.forEach(panel => {
    
        // removes all the 'active' classes on all elements in the classList object
        panel.classList.remove('active')
    })
}