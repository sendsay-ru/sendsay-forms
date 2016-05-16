import {Popup} from "../../src/classes/Popup.js";



describe("Popup.spec.js", function() {
    var popupJSON = {  
   "borderRadius":0,
   "paddingLeft":20,
   "paddingTop":20,
   "paddingRight":20,
   "paddingBottom":20,
   "backgroundColor":"#fff",
   "textColor":"#000",
   "endDialogMessage":"Спасибо за заполнение формы!",
   "elements":[  
          {  
             "text":"<b style=\"font-size: 16 px;\">Подписка на рассылку</b>",
             "type":"text"
          },
          {  
             "type":"image",
             "align":"center",
             "extended":false,
             "url":"http://image.fsndsy.ru/image/x_1445438168224221/block/201605/16085939/images.jpg"
          },
          {  
             "type":"spacer",
             "height":38
          },
          {  
             "aid":"member",
             "qid":"_member_email",
             "required":true,
             "hidden":false,
             "label":"Адрес подписчика",
             "type":"textField",
             "default":"",
             "placeholder":""
          },
          {  
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
          },
          {  
             "type":"checkboxField",
             "aid":"a596",
             "qid":"q244",
             "hidden":false,
             "required":false,
             "default":[  

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
          },
          {  
             "qid":"q349",
             "aid":"a596",
             "required":false,
             "label":"Возраст",
             "hidden":false,
             "id":"q46",
             "type":"intField",
             "placeholder":""
          },
          {  
             "width":30,
             "qid":"q538",
             "aid":"a596",
             "required":false,
             "label":"Имя",
             "hidden":false,
             "id":"q133",
             "type":"textField",
             "placeholder":""
          },
          {  
             "textColor":"#ffffff",
             "align":"justify",
             "text":"Подписаться",
             "type":"button",
             "backgroundColor":"#000000",
             "borderRadius":5
          }
       ],
       "active":true
    }

	it('Cheking popup render' , function() {
    	var dom = new Popup(popupJSON);
        dom.render();
    });

  it('Cheking popup activate' , function() {
      var dom = new Popup(popupJSON);
      dom.render();
      dom.activate();
  });

  it('Cheking popup show' , function() {
      var dom = new Popup(popupJSON);
      dom.render();
      dom.show();
  });
   
});