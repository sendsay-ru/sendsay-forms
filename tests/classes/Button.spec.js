import {Button} from "../../src/classes/Button.js";



describe("Button.spec.js", function() {
	var json = {  
                 "textColor":"#ffffff",
                 "align":"justify",
                 "text":"Подписаться",
                 "type":"button",
                 "backgroundColor":"#000000",
                 "borderRadius":5
              };
    
	it('Cheking Button render' , function() {
    	var dom = new Button(json);
        dom.render();
    }); 
});