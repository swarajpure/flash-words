const para = "Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky.";

const output = document.querySelector("#output");
const startButton = document.querySelector("#start");
const questions = document.querySelector("#questions");

const wordsOfPara = () => {
    const newpara = para.split(" ");
    for(let i =0; i<newpara.length; i++){
        newpara[i] = newpara[i]+ " ";
    }
    return { newpara };
}



const printWords = async () => {
    const { newpara } = wordsOfPara();
    for(let i=0; i<newpara.length; i++){
        const newSpan = document.createElement("span");
        await setTimeout(() => {
            newSpan.innerText = newpara[i];
            output.appendChild(newSpan);
        }, i * 200);
        await setTimeout(() => {
            newSpan.classList.add("invisible");
        }, (i+1) * 200);
    }
}




startButton.addEventListener("click", printWords);
