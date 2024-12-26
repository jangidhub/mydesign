const nav_toggle = document.getElementById("Toggle");

nav_toggle.onclick = function(){
    var x = document.getElementById("sidebar");
    if(x.style.width === "0px"){
        x.style.width = "250px";
    }
    else {
        x.style.width = "0px";
    }
    var y = document.getElementById("logo");
    if(y.style.height === "50px"){
        y.style.height = "0px";
    }
    else{
        y.style.height = "50px";
    }
}
let body = document.querySelector('body');
let mouse = document.getElementById('effectMouse');
body.addEventListener('mousemove', (e) =>{
    let scale = 1;
    if(e.target.classList.contains('effect')){
        scale = 3;
    }
    mouse.style.transform = `
        translateX(${e.clientX}px)
        translateY(${e.clientY}px)
        scale(${scale})
    `;
})
body.addEventListener('mouseout', (e) => {
    mouse.style.transform = `
        translateX(${e.clientX}px)
        translateY(${e.clientY}px)
        scale(0)
    `;
})


document.addEventListener("DOMContentLoaded", () => {
    const dots = [
        document.getElementById("dot1"),
        document.getElementById("dot2"),
        document.getElementById("dot3"),
    ];

    // Function to generate random positions
    const generateRandomPosition = (element) => {
        const parent = element.parentElement;
        const rect = parent.getBoundingClientRect();
        const x = Math.random() * rect.width - rect.width / 2;
        const y = Math.random() * rect.height - rect.height / 2;
        return { x, y };
    };

    // Function to move dots smoothly
    const moveDots = () => {
        dots.forEach((dot) => {
            const { x, y } = generateRandomPosition(dot);
            dot.style.transform = `translate(${x}px, ${y}px)`;
        });
    };

    // Repeat movement every 1 second
    setInterval(moveDots, 1000);
});


// const labelcount = document.getElementById("labelcount");
// const ibtn = document.getElementById("ibtn");
// const rbtn = document.getElementById("rbtn");
// const dbtn = document.getElementById("dbtn");
// let count = 0;


// dbtn.onclick = function(){
//     count--;
//     labelcount.textContent = count;
// }


// rbtn.onclick = function(){
//     count = 0;
//     labelcount.textContent = count;
// }


// ibtn.onclick = function(){
//     count++;
//     labelcount.textContent = count;
// } 