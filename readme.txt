-> index.html �zerinden sayfaya eri�ebilirsiniz.
-> test.html i�erisinde data entegrasyon testleri
vard�r. Bu sayfa �zerinde yaln�zca console.log
i�lemleri yap�lm��t�r. Kar��n�za herhangi bir
UI gelmeyecektir.

-> EcmaScript 6 yerine ES5 standardizasyonu 
tercih edilmi�tir.
IE11'in ES6 deste�i �u an i�in bulunmamaktad�r.

Testlerinizi yaparken a�a��daki link �zerinden
browser uyumluluklar�n� kontrol edebilirsiniz.
http://kangax.github.io/compat-table/es6/

-> Herhangi bir javascript ve css k�t�phanesi
kullan�lmam��t�r.

-> Sunucu ba��ml�l���n� ortadan kald�rmak i�in
json dosyalar�n� okurken
xmlhttpRequest, ajax call vb. kullan�lmam��t�r.
json verileri minify edilip, dataProvider'lar�n
alt�na g�m�lm��t�r.
DataProvider'lar �zerinden service call'lar 
yap�l�p ayn� dataya service �zerinden de
eri�ilebilir.

-> Site tasarlan�rken Yemeksepeti.com
esas al�nm��t�r.

-> Zaman fakt�r� sebebi ile
Responsive bir design �u an i�in yap�lmam�� olup
mobil uyumlulu�u yoktur.
Sayfa tamamen flat bir yap�dad�r.