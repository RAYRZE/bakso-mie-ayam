const btnproduct = document.querySelectorAll(".btn-order")

btnproduct.forEach((button) => {
    button.addEventListener("click", () => {
        const masage = ` halo saya mau pesan 😊
    Nama :
    Menu :
    Jumlah :
    Meja / Alamat :`;
        const url = `https://wa.me/62882003067694?text=${encodeURIComponent(masage)}`;
        window.open(url, "_blank");
    });
});
