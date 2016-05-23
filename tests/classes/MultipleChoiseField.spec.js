import {MultipleChoiseField} from "../../src/classes/elements/MultipleChoiseField.js";



describe("MultipleChoiseField.spec.js", function() {

	var json = {  
           "type":"checkboxField",
           "field":{  
              "aid":"a596",
              "qid":"q244",
              "answers":{  
                 "1":"Iphone",
                 "2":"Samsung",
                 "3":"LG",
                 "4":"Nokia"
              },
              "order":[  
                 1,
                 2,
                 3,
                 4
              ],
              "default": ['1', '3']
           },
           "appearance":{  
              "hidden":false
           },
           "content":{  
              "label":"Любимая техника"
           }
        };

	  it('Cheking MultipleChoiseField render' , function() {
    	var dom = new MultipleChoiseField(json);
        dom.render();
    });

    it('Cheking MultipleChoiseField getValue from defaults' , function() {
        var dom = new MultipleChoiseField(json);
        expect(dom.getValue()).toEqual(['1', '3']);
    });

    it('Cheking MultipleChoiseField getValue validation with values' , function() {
        var local = JSON.parse(JSON.stringify(json));
        local.field.required = true;
        var dom = new MultipleChoiseField(local);
        expect(dom.validate()).toEqual(true);
    });

    it('Cheking MultipleChoiseField getValue validation without values' , function() {
        var local = JSON.parse(JSON.stringify(json));
        local.field.required = true;
        local.field.default = [];
        var dom = new MultipleChoiseField(local);
        expect(dom.validate()).toEqual(false);
    });

    it('Cheking MultipleChoiseField getValue validation without values 2' , function() {
        var local = JSON.parse(JSON.stringify(json));
        local.field.required = true;
        delete local.field.default;
        var dom = new MultipleChoiseField(local);
        expect(dom.validate()).toEqual(false);
    });



 
});