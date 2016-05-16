import {SingleChoiseField} from "../../src/classes/SingleChoiseField.js";



describe("SingleChoiseField.spec.js", function() {

	var json = {  
                 "aid":"a596",
                 "qid":"q575",
                 "required":false,
                 "order":[  
                    1,
                    2
                 ],
                 "type":"radioField",
                 "id":"q489",
                 "hidden":false,
                 "label":"Пол",
                 "answers":{  
                    "1":"Мужчина",
                    "2":"Женщина"
                 }
              };

	it('Cheking SingleChoiseField render' , function() {
    	var dom = new SingleChoiseField(json);
        dom.render();
    }); 
});