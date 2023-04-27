//selecting elements
let holder = document.querySelector("#holder");
let copybtn = document.querySelector("#btn-copy");
let range = document.querySelector("#ranger");
let label = document.querySelector("#txt-range");
let btnEasy = document.querySelector("#easy");
let btnMed = document.querySelector("#medium");
let btnHard = document.querySelector("#hard");

//creating variables
let size = range.value;
// let a = a;
// let A = A;
let ans = "";
let difficulty = 0;

const copyfunc = () => {
  navigator.clipboard.writeText(holder.value);
};

const check = () => {
  label.innerHTML = `Length (${range.value} characters)`;
};

const easyfunc = () => {
  if (difficulty != 1) {
    difficulty = 1;
    btnEasy.style.background = "aqua";
    btnMed.style.background = "";
    btnHard.style.background = "";
    
  } else {
    difficulty = 0;
    btnEasy.style.background = "";
  }
};

const medfunc = () =>{
    if (difficulty != 2) {
        difficulty = 2;
        btnMed.style.background = "lightgreen";
        btnEasy.style.background = "";
        btnHard.style.background = "";
    }
    else{
        difficulty= 0;
        btnMed.style.background = "";
    }
}

const hardfunc = ()=>{
    if (difficulty !=3) {
        difficulty = 3;
        btnHard.style.background = " rgba(212, 29, 29, 0.756)";
        btnMed.style.background = "";
        btnEasy.style.background = "";
    }
    else{
        difficulty =0;
        btnHard.style.background = "";
    }
    console.log(difficulty);
}

const generate = () => {
  if (difficulty == 0) {
    alert("Please choose difficulty");
  } else if (difficulty == 1) {
    ans = "";
    for (let i = 0; i < range.value; i++) {
      if (Math.floor(Math.random() * 2 + 1) % 2 == 0) {
        ans = ans.concat(
          String.fromCharCode(Math.floor(Math.random() * 26 + 97))
        );
      } else {
        ans = ans.concat(
          String.fromCharCode(Math.floor(Math.random() * 26 + 65))
        );
      }
    }
    holder.value = ans;
  } else if (difficulty == 2) {
    ans = "";
    for (let i = 0; i < range.value; i++) {
      if (Math.floor(Math.random() * 3 + 1) % 3 == 0) {
        ans = ans.concat(
          String.fromCharCode(Math.floor(Math.random() * 26 + 97))
        );
      } else if (Math.floor(Math.random() * 3 + 1) % 3 == 1) {
        ans = ans.concat(
          String.fromCharCode(Math.floor(Math.random() * 26 + 65))
        );
      } else {
        ans = ans.concat(
            String.fromCharCode(Math.floor(Math.random() * 9 + 48))
          );
      }
    }
    holder.value = ans;
  }
  else if(difficulty == 3){
    ans = "";
    
    for (let i = 0; i < range.value; i++) {
        if (Math.floor(Math.random() * 4 + 1) % 4 == 0) {
          ans = ans.concat(
            String.fromCharCode(Math.floor(Math.random() * 26 + 97))
          );
        } else if (Math.floor(Math.random() * 4 + 1) % 4 == 1) {
          ans = ans.concat(
            String.fromCharCode(Math.floor(Math.random() * 26 + 65))
          );
        } else if (Math.floor(Math.random() * 4 + 1) % 4 == 2) {
          ans = ans.concat(
              String.fromCharCode(Math.floor(Math.random() * 9 + 48))
            );
        }
        else{
            ans = ans.concat(
                String.fromCharCode(Math.floor(Math.random() * 95 + 32))
              );
        }

        holder.value = ans;
    }
  }
};
