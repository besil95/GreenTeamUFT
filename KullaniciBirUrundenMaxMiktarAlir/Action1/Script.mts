'Kullanici gittigidiyor.com'a gider
'kullanici giriş yap butonuna tiklar
'kullanici e-mail ve sifresini giris yapar
'kullanici giris yap butonuna tiklar
'searchbox'a "maske" yazilir
'random maske secilir
'adet miktarina '99999' girilir
'alinabilecek max miktar stok sayisi ile default stok sayisina indirgenir


Browser("GittiGidiyor – Türkiye'nin").Page("GittiGidiyor – Türkiye'nin").Link("Giriş Yap").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("Üye Girişi - GittiGidiyor").WebEdit("kullanici").Set "erkahraman95@gmail.com" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("Üye Girişi - GittiGidiyor").WebEdit("sifre").SetSecure "5e7fce1fd67684da1adea097a03c10c1520b909edd21" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("Üye Girişi - GittiGidiyor").WebButton("Giriş Yap").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("GittiGidiyor – Türkiye'nin").WebEdit("Ne aramıştınız?").Set "maske" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("Maske - GittiGidiyor").WebElement("header-search-find-link").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("Maske - GittiGidiyor").Image("Filtreli Ağız Yüz Maskesi").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("GittiGidiyor – Türkiye'nin").Page("Filtreli Ağız Yüz Maskesi").WebEdit("buyitnow_adet").Set "69" @@ script infofile_;_ZIP::ssf16.xml_;_
