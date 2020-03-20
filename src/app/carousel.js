
//#firstSlider
export let  Carousel = (trig) => {
    // let trig = document.getElementById(trigger);
    console.log('trig', trig);
    
    let possitionX = 0;

    function moveLeft(n) {

        possitionX -= n;

        if(possitionX <= -1650) {
            possitionX = 0;
        }

        
        let mv = String(possitionX) + 'px';
        console.log('mv',mv);
        trig.style.marginLeft = mv;
        // trig.offsetLeft = '500px';

    }

    setInterval( () => {
        moveLeft(200);
    }, 2000);

};