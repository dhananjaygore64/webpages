//$(document).ready(function(){
//   
//    $(".cmd").click(function(){
//        
//
//        var quality=1;
//        const filename  = 'ThisIsYourPDFFilename.pdf';
//
//		html2canvas(document.querySelector('.print'), 
//								{scale: quality}
//						 ).then(canvas => {
//			let pdf = new jsPDF('p', 'mm', 'a4');
//			pdf.addImage(canvas.toDataURL('image/png'), ' ', 0, 0, 200, 250);
//			pdf.save(filename);
//		});
//        
////                html2canvas($(".print"), {
////            onrendered: function(canvas) {         
////                var imgData = canvas.toDataURL(
////                    'image/png');              
////                var doc = new jsPDF('p', 'mm');
////                doc.addImage(imgData, 'PNG', 10, 10);
////                doc.save('sample-file.pdf');
////            }
////        });
//        
//        
//        
//    });
//    
//});

function genPDF(){
//    html2canvas(document.getElementById('target'),{
//               onrendered: function(canvas){
//                    var imgData = canvas.toDataURL('image/png'); 
//                    var doc = new jsPDF();
//                    doc.addImage(imgData, 'PNG', 10, 10);
//                    doc.addImage(imgData, 'PNG', 10, 10);
//                    doc.save('sample-file.pdf');
//               }
//    });
    


		var HTML_Width = $(".print").width();
		var HTML_Height = $(".print").height();
		var top_left_margin = 15;
		var PDF_Width = HTML_Width+(top_left_margin*2);
		var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
		
		var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
		

		html2canvas($(".print")[0],{allowTaint:true}).then(function(canvas) {
			canvas.getContext('2d');
			
			console.log(canvas.height+"  "+canvas.width);
			
			
			var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
		    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			
			
			for (var i = 1; i <= totalPDFPages; i++) { 
				pdf.addPage(PDF_Width, PDF_Height);
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
			
		    pdf.save("HTML-Document.pdf");
        });
    
    
    
    console.log("Generate PDF FUnction");
//    function capture() {
//	html2canvas([document.querySelector(".print")], {
//		logging: true,
//		onrendered: function( canvas ) {
////			$('#img_val').val(canvas.toDataURL("image/png"));
////            document.body.appendChild(canvas);
//            //document.getElementById("myForm").submit();
//                var imgData = canvas.toDataURL('image/png'); 
//                var doc = new jsPDF();
//                doc.addImage(imgData, 'JPEG', 20, 20);
//                doc.save('sample-file.pdf');
//		}
//	});
//    return false;
//}
}