import {Field} from "../../src/classes/elements/Field.js";



describe("Field.spec.js", function() {

	var json = {  
           "type":"textField",
           "content":{  
              "label":"Адрес подписчика",
              "placeholder":""
           },
           "appearance":{  
              "hidden":false
           },
           "field":{  
              "qid":"_member_email",
              "aid":"member",
              "required":true,
              "default":""
           }
        };
	it('Cheking Field render' , function() {
    	var dom = new Field(json);
        dom.render();
    });

  it('Cheking not required Field validation' , function() {
      json.field.required = false;
      var dom = new Field(json);
      
      expect(dom.validate()).toEqual(true);
  });

  it('Cheking required empty Field validation' , function() {
      json.field.required = true;
      var dom = new Field(json);
      
      expect(dom.validate()).toEqual(false);
  });

  it('Cheking required not empty Field validation' , function() {
      json.field.required = true;
      var dom = new Field(json);
      dom.el.querySelector('input').value = 'test';    
      expect(dom.validate()).toEqual(true);
  });  
});