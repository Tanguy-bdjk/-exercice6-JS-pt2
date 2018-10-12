// function change(){
//   document.getElementById("image1").src="assets/image1_2.jpg";
//   document.getElementById("image2").src="assets/image2_2.jpg";
//   document.getElementById("image3").src="assets/image3_2.jpg";
//   document.getElementById("image4").src="assets/image4_2.jpg";
//   document.getElementById("image5").src="assets/image5_2.jpg";
// }
//
// function change1(){
//   document.getElementById("image1").src="assets/image1.jpg";
//   document.getElementById("image2").src="assets/image2.jpg";
//   document.getElementById("image3").src="assets/image3.jpg";
//   document.getElementById("image4").src="assets/image4.jpg";
//   document.getElementById("image5").src="assets/image5.jpg";
// }

/*
Le mot clé this fait reference au parametre mis dans nos fonctions.
L'evenement onmouseover appelle notre fonction carrouxsel qui se charge de changer l'image.
*/

function rechange(image){
  image.src = 'assets/' + image.id + '.jpg';
}

function change(image){
  image.src = 'assets/' + image.id + '_2.jpg';
}
