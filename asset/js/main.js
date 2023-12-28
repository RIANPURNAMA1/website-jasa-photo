function kirimPesan() {
    var form = document.getElementById("myForm");
    var nama = form.elements["nama"].value;
    var noHp = form.elements["noHp"].value;
    var pesan = form.elements["pesan"].value;

    // Format tautan WhatsApp
    var link = `https://wa.me/6282118364415?text=Nama%20Lengkap:%20${encodeURIComponent(nama)}%0A%0ANo%20hp:%20${encodeURIComponent(noHp)}%0A%0APesan:%20${encodeURIComponent(pesan)}`;

    // Redirect ke tautan WhatsApp
    window.location.href = link;
}



    $(document).ready(function () {
        $('.carousel').carousel({
            interval: 3000
        })
    });