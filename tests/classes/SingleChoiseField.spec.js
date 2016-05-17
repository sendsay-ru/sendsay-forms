import {SingleChoiseField} from "../../src/classes/SingleChoiseField.js";



describe("SingleChoiseField.spec.js", function() {

	var json = {  
           "type":"radioField",
           "field":{  
              "aid":"a596",
              "qid":"q575",
              "answers":{  
                 "1":"Мужчина",
                 "2":"Женщина"
              },
              "order":[  
                 1,
                 2
              ]
           },
           "appearance":{  
              "hidden":false
           },
           "content":{  
              "label":"Пол"
           }
        };

	it('Cheking SingleChoiseField render' , function() {
    	var dom = new SingleChoiseField(json);
        dom.render();
    }); 
});