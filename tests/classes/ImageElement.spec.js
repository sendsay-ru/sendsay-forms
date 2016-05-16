import {ImageElement} from "../../src/classes/ImageElement.js";



describe("ImageElement.spec.js", function() {

	var json ={  
                 "type":"image",
                 "align":"left",
                 "extended":false,
                 "url":"http://image.fsndsy.ru/image/x_1445438168224221/block/201605/16085939/images.jpg"
              };

	it('Cheking ImageElement render' , function() {
    	var dom = new ImageElement(json);
        dom.render();
    }); 
});