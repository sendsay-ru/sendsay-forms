import {ImageElement} from "../../src/classes/ImageElement.js";



describe("ImageElement.spec.js", function() {

	var json ={  
               "type":"image",
               "appearance":{  
                  "align":"center",
                  "extended":false
               },
               "content":{  
                  "url":"http://image.fsndsy.ru/image/x_1445438168224221/block/201605/17125824/images.png"
               }
            };

	it('Cheking ImageElement render' , function() {
    	var dom = new ImageElement(json);
        dom.render();
    }); 
});