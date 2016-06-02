import {Popup} from "../../src/classes/elements/Popup.js";



describe("Popup.spec.js", function() {
    var popupJSON ={  
     "appearance":{  
        "borderRadius":0,
        "paddingLeft":20,
        "paddingTop":20,
        "paddingRight":20,
        "paddingBottom":20,
        "backgroundColor":"#fff",
        "textColor":"#000",
        "width": 400
     },
     "content":{  
        "endDialogMessage":"Спасибо за заполнение формы!"
     },
     "columns": [ {
     "elements":[  
        {  
           "type":"text",
           "content":{  
              "text":"<b style=\"font-size: 16 px;\">Подписка на рассылку</b>"
           }
        },
        {  
           "type":"image",
           "appearance":{  
              "align":"center",
              "extended":false
           },
           "content":{  
              "url":"http://image.fsndsy.ru/image/x_1445438168224221/block/201605/17125824/images.png"
           }
        },
        {  
           "type":"spacer",
           "appearance":{  
              "height":50
           }
        },
        {  
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
        },
        {  
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
        },
        {  
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
        },
        {  
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
              ]
           },
           "appearance":{  
              "hidden":false
           },
           "content":{  
              "label":"Любимая техника"
           }
        },
        {  
           "type":"button",
           "content":{  
              "text":"Подписаться"
           },
           "appearance":{  
              "textColor":"#ffffff",
              "backgroundColor":"#000000",
              "borderRadius":5,
              "align":"justify"
           }
        }
     ]
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