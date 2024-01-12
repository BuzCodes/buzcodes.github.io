var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
.typeString('iOS Engineer')
.pauseFor(2500)
.deleteAll()
.typeString('Technical Leader')
.pauseFor(2500)
.deleteAll()
.typeString('MacOS Developer')
.pauseFor(2500)
.deleteAll()
.start();