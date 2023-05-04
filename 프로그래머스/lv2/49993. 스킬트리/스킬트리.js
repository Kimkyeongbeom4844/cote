const solution = (skill, skill_trees) => {
    let count = 0;
    const skillArr = skill.split('');
    for(let i=0; i<skill_trees.length; i++){
        const word = skill_trees[i];
        let concatWord = '';
        let isOkay = true;
        for(let j=0; j<word.length; j++){
            if(skillArr.includes(word[j])){
                concatWord += word[j];
                const regExp = new RegExp(`^${concatWord}`)
                if(regExp.test(skill) === false){
                    isOkay = false;
                    break;
                }
            }
        }
        if(isOkay){
            // console.log(word);
            count++;
        } 
    }
    return count;
}