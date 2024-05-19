

document.addEventListener('keypress' , function(event){
   createSound(event.key)
   animation(event.key)
});


function createSound(key){
    switch (key) {
        case "q":
            let q = new Audio("./sounds-2/bubbles.mp3");
            q.play();
            break;
        case "w":
                let w = new Audio("./sounds-2/clay.mp3");
                w.play();
                break;
        case "e":
                let e = new Audio("./sounds-2/confetti.mp3");
                e.play();
                break;
                case "r":
                    let r = new Audio("./sounds-2/corona.mp3");
                    r.play();
                    break;
                case "t":
                        let t = new Audio("./sounds-2/flash-1.mp3");
                        t.play();
                        break;
                case "y":
                        let y = new Audio("./sounds-2/flash-2.mp3");
                        y.play();
                        break;
        case "u":
            let u = new Audio("./sounds-2/flash-3.mp3");
            u.play();
            break;
       case "i":
                let i = new Audio("./sounds-2/glimmer.mp3");
                i.play();
                break;
        case "o":
                let o = new Audio("./sounds-2/moon.mp3");
                o.play();
                break;


        case "p":
            let p = new Audio("./sounds-2/pinwheel.mp3");
            p.play();
            break;
        case "a":
                let a = new Audio("./sounds-2/piston-1.mp3");
                a.play();
                break;
        case "s":
                let s = new Audio("./sounds-2/piston-2.mp3");
                s.play();
                break;

        case "d":
            let d = new Audio("./sounds-2/pistion-3.mp3");
            d.play();
            break;
        case "f":
                let f = new Audio("./sounds-2/prism-1.mp3");
                f.play();
                break;
        case "g":
                let g = new Audio("./sounds-2/prism-2.mp3");
                g.play();
                break;

        case "h":
            let h = new Audio("./sounds-2/prism-3.mp3");
            h.play();
            break;
        case "j":
                let j = new Audio("./sounds-2/splits.mp3");
                j.play();
                break;
        case "k":
                let k = new Audio("./sounds-2/squiggle.mp3");
                k.play();
                break;

        case "l":
            let l = new Audio("./sounds-2/strike.mp3");
            l.play();
            break;
        case "z":
                let z = new Audio("./sounds-2/suspension.mp3");
                z.play();
                break;
        case "x":
                let x = new Audio("./sounds-2/timer.mp3");
                x.play();
                break;


        case "c":
            let c = new Audio("./sounds-2/ufo.mp3");
            c.play();
            break;
        case "v":
                let v = new Audio("./sounds-2/veil.mp3");
                v.play();
                break;
        case "b":
                let b = new Audio("./sounds-2/wipe.mp3");
                b.play();
                break;


        case "n":
            let n = new Audio("./sounds-2/zig-zag.mp3");
            n.play();
            break;
        case "m":
                let m = new Audio("./sounds-2/dotted-spiral.mp3");
                m.play();
                break;
       
        default:
            console.log("wrong key is pressed")
    }
}

function animation(currentkey){
   let key = document.querySelector(`.${currentkey}`);
   key.classList.add("playing");
   setTimeout(() => {
      key.classList.remove("playing")
   }, 200);
}