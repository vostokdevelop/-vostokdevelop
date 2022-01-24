export const openBlank = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
};

export default openBlank;
