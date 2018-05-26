var names = [
  'Aiyana Jones',
  'Alan Blueford',
  'Alex Nieto',
  'Amilcar Perez Lopez',
  'Anastasio Hernandez-Rojas',
  'Andy Lopez',
  'Antonio Guzman Lopez',
  'Antonio Zambrano Montes',
  'Bernard Peters Jr.',
  'Brandy Martell',
  'Charly "Africa" Leundeu Keunang',
  'Christina Tahhahwah',
  'Corey Kanosh',
  'Demouria Hogg',
  'Derrick Gaines',
  'Eric Garner',
  'Errol Chang',
  'Guadalupe Manzo-Ochoa',
  'Idriss Stelley',
  'Islan Nettles',
  'James Nate Greer',
  'Jessica Hernandez',
  'Jesus Huerta',
  'Jonathan Ferrell',
  'Jordan Davis',
  'Jose Antonio',
  'Kayden Clark',
  'Kayla Moore',
  'Kelly Thomas',
  'Loreal Tsingine',
  'Luis Gongora Pat',
  'Mario Martinez',
  'Mario Woods',
  'Meagan Hockaday',
  'Mike Brown',
  'Natasha McKenna',
  'Noel Aguilar',
  'Omar Abrego',
  'Oscar Grant',
  'O\'Shaine Evans',
  'Paul Castaway',
  'Philando Castile',
  'Ramarley Graham',
  'Rekia Boyd',
  'Renisha McBride',
  'Sandra Bland',
  'Tamir Rice',
  'Trayvon Martin',
  'Troy Davis',
  'Tyrone West',
  'Vonderrit Myers',
  'Walter Scott',
  'Yanira Serrano',
  'Yuvette Henderson'
]

var counter = 0
var click = 0

var images = []
function preload () {
}

function setup () {
  for (var i = 0; i < names.length; i++) {
    var imageName = names[i].toLowerCase().split(' ').join('').replace('\'', '').replace('-', '')
      .replace('"', '').replace('"', '').replace('.', '')
    var imageLocation = './assets/' + imageName + '22x30_1.jpg'
    console.log(imageLocation)
    images.push(loadImage(imageLocation))
  }
  createCanvas(window.innerWidth, window.innerHeight)
  var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ['defaultCanvas0']
  }
  var maptastic = Maptastic(configObject)
}

function draw () {
  background(0)
  fill(255)
  textSize(32)
  if (counter % 2 == 0) {
    click++
  }
  if (click >= images.length) {
    click = 0
  }
  var string = 'Justice for ' + names[click]
  textAlign(CENTER, CENTER)
  textSize(44)
  img = images[click]
  text(string, width / 2, height / 5)
  image(img, width / 2.3, height / 3, img.width / 2, img.height / 2)
  text('#NoOnH', width / 2, height - height / 5)
  counter++
}
