import {Text} from "../../src/classes/Text.js";



describe("Text.spec.js", function() {
	it('Cheking text render' , function() {
    	var dom = new Text({"type":"text","text":"<b>Form title</b>", "align": "left"});
        dom.render();
    });
    it('Cheking text makeStyles' , function() {
    	var dom = new Text({"type":"text","text":"<b>Form title</b>", "align": "left"});
        expect(dom.makeStyles()).toEqual({
            "text-align": "left",
            "line-height": "normal"
        });
    });
});