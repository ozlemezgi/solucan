const button = document.getElementById('btn-no');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 100)}%`;
    button.style.top = `${Math.ceil(Math.random() * 150)}%`;
});

button.addEventListener('click', function () {
    alert('Beni beni Bihterini ???')
})

document.getElementById("btn-yes").addEventListener("click", function() {
    alert("Bu cevabı vereceğini zaten biliyordum <3");
});
