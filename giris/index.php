<?php
session_start();
ob_start();
$user = isset($_POST['user']);
echo $user;
echo "eeeee";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Kullanıcı adı ve şifrenin gönderilip gönderilmediğini kontrol edin
    $user = isset($_POST['user']) ? $_POST['user'] : '';
    $pass = isset($_POST['pass']) ? $_POST['pass'] : '';

    if ($user == "B231210372@ogr.sakarya.edu.tr" && $pass == "b231210372") {
        $_SESSION["login"] = "true";
        $_SESSION["user"] = "b231210372@ogr.sakarya.edu.tr";
        $_SESSION["pass"] = "b231210372";

        echo "Hoşgeldiniz. Giriş başarılı. Anasayfaya yönlendiriliyorsunuz. Lütfen bekleyin..";
        header("Refresh:2; url=dogru.html");
    } elseif (empty($user) || empty($pass)) {
        echo "Kullanıcı adı veya şifre boş bırakılamaz.";
        header("Refresh: 2; url=index.html");
    } else {
        echo "Kullanıcı adı veya şifre yanlış.";
        header("Refresh: 2; url=index.html");
    }
}
ob_end_flush();
?>
