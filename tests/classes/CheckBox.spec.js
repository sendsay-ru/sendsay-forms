import {CheckBox} from "../../src/classes/CheckBox.js";



describe("CheckBox.spec.js", function() {
	var json = {
					qid: 'test', 
					label: 'Label',
					value: 'hw',
					checked: true
				};
	it('Cheking CheckBox render' , function() {
    	var dom = new CheckBox(json);
        dom.render();
    }); 
});