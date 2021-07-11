var images = ["Ashneel.jpg", "Father.jpg", "Mother.jpg", "Grand_Father.jpg", "Grand_Mother.jpg"];
var names = ["Ashneel Routray", "Sasanka Routaray", "Rayesha Routaray", "Gouri Shyam Routaray", "Satybati Routaray"];

var i = 0
function update() {
    i++
    var family_members_array = "4";
    if (i > family_members_array) {
        i = 0;
    }
    var Updated_image = images[i];
    var Updated_name = names[i];
    document.getElementById("Family_img").src=Updated_image;
    document.getElementById("Family_Name").innerHTML=Updated_name;
}