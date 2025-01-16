<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // MySQL bağlantı bilgileri
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "rezervasyonlar";

    // MySQL bağlantısı 
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Bağlantıyı kontrol etme
    if ($conn->connect_error) {
        die("Bağlantı hatası: " . $conn->connect_error);
    }

    // Formdan gelen verileri alma ve temizleme
    $name = mysqli_real_escape_string($conn, $_POST['yourName']);
    $phoneNumber = mysqli_real_escape_string($conn, $_POST['phoneNumber']);
    $email = mysqli_real_escape_string($conn, $_POST['yourEmail']);
    $persons = mysqli_real_escape_string($conn, $_POST['persons']);
    $reservationDate = mysqli_real_escape_string($conn, $_POST['reservationDate']);

    // Veritabanına ekleme sorguları
    $sql = "INSERT INTO rezervasyon_tablosu (ad, telefon, email, kisi_sayisi, rezervasyon_tarihi)
    VALUES ('$name', '$phoneNumber', '$email', '$persons', '$reservationDate')";

    // Sorguyu çalıştırma
    if ($conn->query($sql) === TRUE) {
        echo "Rezervasyonunuz başarıyla iletildi, size geri dönüş yapacağız.";
    } else {
        echo "Hata oluştu: " . $sql . "<br>" . $conn->error;
    }

    // Veritabanı bağlantısını bitirme
    $conn->close();
}
?>
