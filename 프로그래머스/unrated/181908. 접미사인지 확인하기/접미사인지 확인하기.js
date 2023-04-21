const solution = (my_string, is_suffix) => {
    const regExp = new RegExp(`${is_suffix}$`,'g');
    if(regExp.test(my_string)) return 1;
    return 0;
}