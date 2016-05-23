import {Text} from "../../src/classes/elements/Text.js";



describe("Text.spec.js", function() {

    var json = {  
           "type":"text",
           "content":{  
              "text":"<b style=\"font-size: 16 px;\">Подписка на рассылку</b>"
           }
        };

	it('Cheking text render' , function() {
    	var dom = new Text(json);
        dom.render();
    });
    it('Cheking text makeStyles' , function() {
    	var dom = new Text(json);
        expect(dom.makeStyles()).toEqual({
            "text-align": "left",
            "line-height": "normal"
        });
    });
});