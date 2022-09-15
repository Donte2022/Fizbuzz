

function FizzBuzzCalc() {

    let playBuzz = document.getElementById("output");
    const buzzkill = document.getElementById("input");
    console.log(typeof buzzkill.value);

    const RndResult = parseInt(buzzkill.value);
    console.log(typeof RndResult);
    console.log(RndResult);


    if (isNaN((RndResult))) {
        return playBuzz.innerHTML = "Gimme something to work with!";
    }
        else if (RndResult === 0) {
        return playBuzz.innerHTML = "Something greater than 0!";
    }

    else if (RndResult % 3 === 0 && RndResult % 5 === 0) {
        return playBuzz.innerHTML = "FizzBuzz!";
    }
    else if (RndResult % 3 === 0) {
        return playBuzz.innerHTML = "Fizz!";
    }
    else if (RndResult % 5 === 0) {
        return playBuzz.innerHTML = "Buzz!";
    }
    else
        return playBuzz.innerHTML = "Hmm...Try another number";

    }



