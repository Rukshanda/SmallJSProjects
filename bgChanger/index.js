



 
 
let colors = ['maroon' , 'purple' , 'green' , 'olive', 'teal', 'crimson' , 
              'darkgoldenrod' , 'darkgreen', 'indianred' , 'lightseagreen' , 'midnightblue' , ];

 
function changeTheBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    document.querySelector("body").style.backgroundColor = colors[colorIndex];
};
 
document.querySelector("button").addEventListener("click", changeTheBackground);