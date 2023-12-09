let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Amando a Harry Styles y a Louis Tomlinson')
  .pauseFor(200)
  .deleteChars(10)
  .start();
