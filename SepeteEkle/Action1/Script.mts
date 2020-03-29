'Kullanici gittigidiyor.com'a gider
'kullanici giriş yap butonuna tiklar
'kullanici e-mail ve sifresini giris yapar
'kullanici giris yap butonuna tiklar
'search box'a "telefon" yazar ve bul butonuna tiklar
'populer filtreler'den "ayni gun kargo" secenegi isaretlenir
'fiyat aralığına en yuksek deger olarak "5555" girilir
'gelen urunlerin arasindan random tiklanir
'urun sepete eklenir

Browser("Lenovo P2 (4GB) Cep Telefonu").Navigate "https://www.gittigidiyor.com/" @@ hightlight id_;_198878_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("GittiGidiyor – Türkiye'nin").Link("Giriş Yap").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Üye Girişi - GittiGidiyor").WebEdit("kullanici").Set "erkahraman95@gmail.com" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Üye Girişi - GittiGidiyor").WebEdit("sifre").SetSecure "5e7fca521eef77898b319424ebf7a104873c78a1e0fc" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Üye Girişi - GittiGidiyor").WebButton("Giriş Yap").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("GittiGidiyor – Türkiye'nin").WebEdit("Ne aramıştınız?").Set "telefon" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("GittiGidiyor – Türkiye'nin").WebElement("header-search-find-link").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Telefon - GittiGidiyor").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Telefon - GittiGidiyor").WebEdit("fmax").Set "5555" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Telefon - GittiGidiyor").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Telefon - GittiGidiyor").Image("HUAWEI P SMART( 2019)").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Lenovo P2 (4GB) Cep Telefonu").Page("Huawei P Smart (2019)").WebButton("Sepete Ekle").Click @@ script infofile_;_ZIP::ssf12.xml_;_
