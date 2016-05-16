import {Field} from "../../src/classes/Field.js";



describe("Field.spec.js", function() {

	var json = {  
                 "width":30,
                 "qid":"q538",
                 "aid":"a596",
                 "required":false,
                 "label":"Имя",
                 "hidden":false,
                 "id":"q133",
                 "type":"textField",
                 "placeholder":""
              }
	it('Cheking Field render' , function() {
    	var dom = new Field(json);
        dom.render();
    });

    it('Cheking not required Field validation' , function() {
        json.required = false;
        var dom = new Field(json);
        
        expect(dom.validate()).toEqual(true);
    });

    it('Cheking required empty Field validation' , function() {
        json.required = true;
        var dom = new Field(json);
        
        expect(dom.validate()).toEqual(false);
    });

    it('Cheking required not empty Field validation' , function() {
        json.required = true;
        var dom = new Field(json);
        dom.el.querySelector('input').value = 'test';    
        expect(dom.validate()).toEqual(true);
    });  
});