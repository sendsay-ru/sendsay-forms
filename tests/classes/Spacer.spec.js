import {Spacer} from "../../src/classes/Spacer.js";



describe("Spacer.spec.js", function() {

    var json = {  
                 "type":"spacer",
                 "appearance": {
	                 "height":38
	             }
              };

	it('Cheking Spacer render' , function() {
    	var dom = new Spacer(json);
        dom.render();
    }); 
});