import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const alerted = document.querySelector(".home .content-pick .destination .btn");

alerted.addEventListener("click", (event) => {
  alert("Seni de Götürüyoruz!");
});

alerted.addEventListener("mouseover", (mouse) => {
    alerted.getElementsByClassName.backgroundColor = "red"
})

alerted.addEventListener("mouseenter", (area) => {
    area.style.backgroundColor = "yellow"}
})