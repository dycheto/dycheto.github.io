export const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
}


export const getTheme = () => {
    const theme = localStorage.getItem('theme');
    return theme ? theme : 'light';
}
