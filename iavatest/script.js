document.addEventListener('DOMContentLoaded',()=>{
  const logo = document.getElementById('logo');
  if(logo){
    logo.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log('Logo clicked - replace with actual behavior');
      // Example: smooth scroll home
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }
  console.log('iavatest script loaded');
});
