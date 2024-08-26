$(document).ready(function() {
   function typeWriter(element, text, speed, callback) {
       let i = 0;
       function type() {
           if (i < text.length) {
               $(element).append(text.charAt(i));
               i++;
               setTimeout(type, speed);
           } else if (callback) {
               setTimeout(callback, 1000); // Wait 1 second before starting to delete
           }
       }
       type();
   }

   function deleteWriter(element, speed, callback) {
       let text = $(element).text();
       let length = text.length;
       function del() {
           if (length > 0) {
               $(element).text(text.substring(0, length - 1));
               length--;
               setTimeout(del, speed);
           } else if (callback) {
               setTimeout(callback, 500);
           }
       }
       del();
   }

   function startTypewriter() {
       typeWriter('.myName', "RONNEL C. NAVARRO", 100, function() {
           deleteWriter('.myName', 100, startTypewriter);
       });
   }

   // Start the typewriter effect
   startTypewriter();
});