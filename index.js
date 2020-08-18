const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet dictum sit. Volutpat consequat mauris nunc congue nisi. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Risus feugiat in ante metus. Nulla aliquet porttitor lacus luctus. Varius quam quisque id diam vel quam elementum pulvinar etiam. Odio eu feugiat pretium nibh ipsum. Egestas diam in arcu cursus euismod quis viverra. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Venenatis lectus magna fringilla urna porttitor rhoncus. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Nec ultrices dui sapien eget mi. Malesuada bibendum arcu vitae elementum. Amet cursus sit amet dictum. Est ultricies integer quis auctor elit. Mollis nunc sed id semper risus in. Sagittis purus sit amet volutpat.";

const output = document.querySelector("#output");

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

printWords();