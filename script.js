function upDate(previewPic) {
  console.log("Sự kiện di chuột (Hover event) đã kích hoạt!");
  console.log("Thuộc tính alt: " + previewPic.alt);
  console.log("Thuộc tính src (source): " + previewPic.src);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}