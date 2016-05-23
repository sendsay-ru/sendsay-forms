import {NumberField} from "../../src/classes/elements/NumberField.js";



describe("NumberField.spec.js", function() {

	var json = {  
           "type":"intField",
           "field":{  
              "aid":"a596",
              "qid":"q349"
           },
           "content":{  
              "placeholder":"",
              "label":"Возраст"
           },
           "appearance":{  
              "hidden":false
           }
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