import {NumberField} from "../../src/classes/NumberField.js";



describe("NumberField.spec.js", function() {

	var json = {  
                 "qid":"q349",
                 "aid":"a596",
                 "required":false,
                 "label":"Возраст",
                 "hidden":false,
                 "id":"q46",
                 "type":"intField",
                 "placeholder":""
              };

	it('Cheking NumberField render' , function() {
    	var dom = new NumberField(json);
        dom.render();
    }); 


    it('Cheking not required empty NumberField validation' , function() {

        var dom = new NumberField(json);
        
        expect(dom.validate()).toEqual(true);
    });

    it('Cheking NumberField with valid number validation' , function() {

        var dom = new NumberField(json);
        dom.el.querySelector('input').value = '234';    
        expect(dom.validate()).toEqual(true);
    });

    it('Cheking NumberField with invalid number validation' , function() {

        var dom = new NumberField(json);
        dom.el.querySelector('input').value = '2d34';    
        expect(dom.validate()).toEqual(false);
    });
});