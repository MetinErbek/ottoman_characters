         
         
         var $txt; 
         function replaceName($txt) {
         
         $txt  = $txt.replace(/H/g, "ح");
         $txt  = $txt.replace(/Z/g, "ظ");
         $txt  = $txt.replace(/T/g, "ط");
         $txt  = $txt.replace(/İ/g, "ى");
         $txt  = $txt.replace(/a  /g, "ه ");
         $txt  = $txt.replace(/i /g, "ى ");
         $txt  = $txt.replace(/ı /g, "ى ");
         $txt  = $txt.replace(/ i/g, " اي");
         $txt  = $txt.replace(/e /g, "ه ");
         $txt  = $txt.replace(/S/g, "ص");
         $txt = $txt.replace(/A/g, "آ");
         $txt = $txt.replace(/a/g, "ا");
         $txt  = $txt.replace(/w/g, "ع");
         $txt  = $txt.replace(/ o/g, " او");
         $txt  = $txt.replace(/ ö/g, " او");
         $txt  = $txt.replace(/ u/g, " او");
         $txt  = $txt.replace(/ ü/g, " او");
         $txt  = $txt.replace(/</g, "ه ");
         $txt  = $txt.replace(/b/g, "ب");
         $txt  = $txt.replace(/B/g, "ب");
         $txt  = $txt.replace(/p/g, "پ");
         $txt  = $txt.replace(/P/g, "پ");
         $txt  = $txt.replace(/t/g, "ت");
         $txt  = $txt.replace(/T/g, "ت");
         $txt  = $txt.replace(/c/g, "ج");
         $txt  = $txt.replace(/C/g, "ج");
         $txt  = $txt.replace(/ç/g, "چ");
         $txt  = $txt.replace(/Ç/g, "چ");
         $txt  = $txt.replace(/x/g, "خ");
         $txt  = $txt.replace(/X/g, "خ");
         $txt  = $txt.replace(/d/g, "د");
         $txt  = $txt.replace(/D/g, "ض");
         $txt  = $txt.replace(/r/g, "ر");
         $txt  = $txt.replace(/R/g, "ر");
         $txt  = $txt.replace(/z/g, "ز");
         $txt  = $txt.replace(/Z/g, "ز");
         $txt  = $txt.replace(/j/g, "ژ");
         $txt  = $txt.replace(/J/g, "ژ");
         $txt  = $txt.replace(/s/g, "س");
         $txt  = $txt.replace(/S/g, "س");
         $txt  = $txt.replace(/ş/g, "ش");
         $txt  = $txt.replace(/Ş/g, "ش");
         $txt  = $txt.replace(/f/g, "ف");
         $txt  = $txt.replace(/F/g, "ف");
         $txt  = $txt.replace(/q/g, "ق");
         $txt  = $txt.replace(/Q/g, "ق");
         $txt  = $txt.replace(/k/g, "ك");
         $txt  = $txt.replace(/K/g, "ك");
         $txt  = $txt.replace(/Ğ/g, "ك");
         $txt  = $txt.replace(/g/g, "ك");
         $txt  = $txt.replace(/G/g, "ك");
         $txt  = $txt.replace(/l/g, "ل");
         $txt  = $txt.replace(/L/g, "ل");
         $txt  = $txt.replace(/m/g, "م");
         $txt  = $txt.replace(/M/g, "م");
         $txt  = $txt.replace(/n/g, "ن");
         $txt  = $txt.replace(/N/g, "ن");
         $txt  = $txt.replace(/v/g, "و");
         $txt  = $txt.replace(/V/g, "و");
         $txt  = $txt.replace(/w/g, "و");
         $txt  = $txt.replace(/W/g, "و");
         $txt  = $txt.replace(/o/g, "و");
         $txt  = $txt.replace(/u/g, "و");
         $txt  = $txt.replace(/U/g, "و");
         $txt  = $txt.replace(/ü/g, "و");
         $txt  = $txt.replace(/ö/g, "و");
         $txt  = $txt.replace(/O/g, "و");
         $txt  = $txt.replace(/Ö/g, "و");
         $txt  = $txt.replace(/Ü/g, "و");
         $txt  = $txt.replace(/h/g, "ه");
         $txt  = $txt.replace(/H/g, "ه");
         $txt  = $txt.replace(/e/g, "");
         $txt  = $txt.replace(/E/g, "ا");
         $txt  = $txt.replace(/,/g, "،");
         $txt  = $txt.replace(/;/g, "؛");
         $txt  = $txt.replace(/ğ/g, "غ");
         $txt  = $txt.replace(/â/g, "آ");
         $txt  = $txt.replace(/æ/g, "ث");
         $txt  = $txt.replace(/Â/g, "آ");
         $txt  = $txt.replace(/å/g, "ث");
         $txt  = $txt.replace(/Ó/g, "ح");
         $txt  = $txt.replace(/ó/g, "ح");
         $txt  = $txt.replace(/Ô/g, "ظ");
         $txt  = $txt.replace(/ô/g, "ظ");
         $txt  = $txt.replace(/Õ/g, "ذ");
         $txt  = $txt.replace(/õ/g, "ذ");
         $txt  = $txt.replace(/Ù/g, "ط");
         $txt  = $txt.replace(/ù/g, "ط");
         $txt  = $txt.replace(/Ú/g, "ق");
         $txt  = $txt.replace(/ú/g, "ق");
         $txt  = $txt.replace(/Û/g, "و");
         $txt  = $txt.replace(/û/g, "و");
         $txt  = $txt.replace(/Ò/g, "خ");
         $txt  = $txt.replace(/ò/g, "خ");
         $txt  = $txt.replace(/á/g, "غ");
         $txt  = $txt.replace(/à/g, "غ");
         $txt  = $txt.replace(/ä/g, "ص");
         $txt  = $txt.replace(/ã/g, "ص");
         $txt  = $txt.replace(/ë/g, "ض");
         $txt  = $txt.replace(/ê/g, "ض");
         $txt  = $txt.replace(/è/g, "ع");
         $txt  = $txt.replace(/é/g, "غ");
         $txt  = $txt.replace(/ñ/g, "ك");
         $txt  = $txt.replace(/'/g, "");
         $txt  = $txt.replace(/I/g, "ى");
         $txt  = $txt.replace(/À/g, "ا");
         $txt  = $txt.replace(/Á/g, "ا");
         $txt  = $txt.replace(/Ì/g, "ي");
         $txt  = $txt.replace(/Í/g, "ي");
         $txt  = $txt.replace(/Ñ/g, "ك");
         $txt  = $txt.replace(/ß/g, "و");
         $txt  = $txt.replace(/ı/g, "ي");
         $txt  = $txt.replace(/i/g, "ي");
         $txt  = $txt.replace(/y/g, "ي");
         $txt  = $txt.replace(/Y/g, "ي");
         $txt  = $txt.replace(/î/g, "ي");
         $txt  = $txt.replace(/ت'/g, "ث");
         $txt  = $txt.replace(/وء/g, "ؤ");
         $txt  = $txt.replace(/يء/g, "ئ");
         $txt  = $txt.replace(/ءا/g, "أ");
         $txt  = $txt.replace(/"/g, "ع");
         $txt  = $txt.replace(/س'/g, "ش");
         $txt  = $txt.replace(/غ'/g, "غ");
         $txt  = $txt.replace(/ص'/g, "ض");
         $txt  = $txt.replace(/ط'/g, "ظ");
         $txt  = $txt.replace(/د'/g, "ذ");
         $txt  = $txt.replace(/ح'/g, "خ");
         $txt  = $txt.replace(/ر'/g, "ز");
         $txt  = $txt.replace(/ه'/g, "ة");
         $txt  = $txt.replace(/وو/g, "و");
         $txt  = $txt.replace(/0/g, "۰");
         $txt  = $txt.replace(/1/g, "۱");
         $txt  = $txt.replace(/2/g, "۲");
         $txt  = $txt.replace(/3/g, "۳");
         $txt  = $txt.replace(/4/g, "۴");
         $txt  = $txt.replace(/5/g, "۵");
         $txt  = $txt.replace(/6/g, "۶");
         $txt  = $txt.replace(/7/g, "۷");
         $txt  = $txt.replace(/8/g, "۸");
         $txt  = $txt.replace(/9/g, "۹");
         
         return $txt;
         
         }
         
         function converToOttoman(unicode) {
         
         var convertForm = document.getElementById('$txtTxt');
         
           if (document.selection) {
         
         convertForm.focus();
         
         sel = document.selection.createRange();
         
         sel.text = String.fromCharCode(unicode);
         
         }
         
         else if (document.getElementById('$txtTxt').selectionStart || document.getElementById('$txtTxt').selectionStart == "0") {
         
          var startPos = document.getElementById('$txtTxt').selectionStart;
         
         var endPos = document.getElementById('$txtTxt').selectionEnd;
         
          var chaine = document.getElementById('$txtTxt').value;
         
         convertForm.value = chaine.substring(0, startPos) + String.fromCharCode(unicode) + chaine.substring(endPos, chaine.length);
         
         } else {
         
          convertForm.value += String.fromCharCode(unicode);
         
         }
         
         var obj=document.getElementById('$txtTxt');
         
         obj.focus();
         
         obj.scrollTop=obj.scrollHeight;
         
          }
         
         function copy()
         
         { textRange=document.getElementById('$txtTxt').createTextRange();   textRange.execCommand("Copy");   textRange="";
         
         }