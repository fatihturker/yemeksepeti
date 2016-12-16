-> index.html üzerinden sayfaya eriþebilirsiniz.
-> test.html içerisinde data entegrasyon testleri
vardýr. Bu sayfa üzerinde yalnýzca console.log
iþlemleri yapýlmýþtýr. Karþýnýza herhangi bir
UI gelmeyecektir.

-> EcmaScript 6 yerine ES5 standardizasyonu 
tercih edilmiþtir.
IE11'in ES6 desteði þu an için bulunmamaktadýr.

Testlerinizi yaparken aþaðýdaki link üzerinden
browser uyumluluklarýný kontrol edebilirsiniz.
http://kangax.github.io/compat-table/es6/

-> Herhangi bir javascript ve css kütüphanesi
kullanýlmamýþtýr.

-> Sunucu baðýmlýlýðýný ortadan kaldýrmak için
json dosyalarýný okurken
xmlhttpRequest, ajax call vb. kullanýlmamýþtýr.
json verileri minify edilip, dataProvider'larýn
altýna gömülmüþtür.
DataProvider'lar üzerinden service call'lar 
yapýlýp ayný dataya service üzerinden de
eriþilebilir.

-> Site tasarlanýrken Yemeksepeti.com
esas alýnmýþtýr.

-> Zaman faktörü sebebi ile
Responsive bir design þu an için yapýlmamýþ olup
mobil uyumluluðu yoktur.
Sayfa tamamen flat bir yapýdadýr.