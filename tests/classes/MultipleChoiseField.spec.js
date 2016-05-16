import {MultipleChoiseField} from "../../src/classes/MultipleChoiseField.js";



describe("MultipleChoiseField.spec.js", function() {

	var json = {  
             "type":"checkboxField",
             "aid":"a596",
             "qid":"q244",
             "hidden":false,
             "required":false,
             "default":[  
                "1",
                "3"
             ],
             "label":"Любимая техника",
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
             ]
          };

	it('Cheking MultipleChoiseField render' , function() {
    	var dom = new MultipleChoiseField(json);
        dom.render();
    });

    it('Cheking MultipleChoiseField getValue from defaults' , function() {
        var dom = new MultipleChoiseField(json);
        expect(dom.getValue()).toEqual(["1", "3"]);
    });

 
});