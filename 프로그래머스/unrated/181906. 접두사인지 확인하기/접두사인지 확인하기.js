const solution = (my_string, is_prefix) => {
    const regExp = new RegExp(`^${is_prefix}`);
    // console.log(regExp)
    if(regExp.test(my_string)) return 1;
    return 0;
}