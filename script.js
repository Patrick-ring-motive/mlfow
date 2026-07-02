(()=>{
  const style = document.createElement('style');
  style.innerHTML = `
  #runllm-widget{
    display:none !important;
  }
  `;
  (document.body||document.firstElementChild).appendChild(style);
  
})();
