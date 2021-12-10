Sendsay Forms
=

## Предпросмотр:
Демо: https://sendsay-forms.herokuapp.com/

## Типы форм:
 - popup - Всплывающее окно
 - bar - Полоса сверху или снизу
 - widget - Вызываемое окно
 - embedded - Встраиваемая форма

## Настройки:
```js
SENDSAY.showPopup({
{
   "obj":{
      "fields":[ // поля формы
         {
            "required":1,
            "name":"_member_email",
            "type":"text",
            "label":"E-mail",
            "default":""
         }
      ],
      "state":"1",
      "settings":{
         "steps":[ // шаги: [0] - начальная верстка, [1] - после отправки данных
            {
               "columns":[ // сетка
                  {
                     "elements":[ // элементы
                        {
                           "content":{ // настройки элемента
                              "text":"<span style=\"font-size:20px;\"><strong>Подпишитесь на рассылку</strong></span>"
                           },
                           "type":"text", // тип элемента
                           "appearance":{ // стили элемента
                              "paddingLeft":0,
                              "align":"left",
                              "paddingRight":0,
                              "paddingBottom":"10",
                              "paddingTop":0,
                              "lineHeight":"1.2"
                           }
                        },
                     ],
                     "appearance":{ // стили колонки
                        "paddingLeft":0,
                        "paddingRight":0,
                        "flex":12,
                        "paddingBottom":0,
                        "paddingTop":0
                     }
                  }
               ],
            },
         ],
         "type":"popup", // тип формы
         "appearance":{ // общие стили формы
            "width":"500",
            "borderEnabled":true,
            "position":"centered",
            "paddingBottom":"15",
            "borderColor":"rgba(191, 183, 240, 0.51)",
            "overlayColor":"rgba(0, 0, 0, 0.8)",
            "shadowColor":"rgba(33, 219, 27, 1)",
            "labelFontSize":"14",
            "labelTextColor":"#000",
            "animation":"none",
            "labelFontFamily":"\"Open Sans\",Helvetica,Arial,sans-serif",
            "shadowEnabled":true,
            "paddingLeft":"15",
            "textColor":"#000",
            "paddingRight":"15",
            "shadowOffsetX":"0",
            "borderRadius":"10",
            "paddingTop":"15",
            "shadowOffsetY":"2",
            "borderWidth":"4",
            "shadowBlur":"8",
            "overlayEnabled":false,
            "backgroundColor":"#fff",
            "shadowSpread":"1"
         },
         "settings":{ // настройки отображения
            "frequency":0, // отображать ли форму при каждом просмотре страницы
            "showCondition":{
               "onLeave":false, // показывать при уходе со страницы
               "maxCount":0, // макс. кол-во показов
               "delay":0, // показывать по таймеру
               "instant":true, // показывать при загрузке страницы 
               "multipleSubmit":false, // возможность повторно заполнить форму
               "onPageScroll":0 // показывать при скролле
            },
            "canClose":1 // возможность закрыть форму после отправки данных
         }
      },
      "landing_page":""
   }
},
{
  "ignoreKeyboard": true, // игнорировать горячие клавиши
  "ignoreCookie": true, // не сохранять факт показа формы
  "instant": true, // показать сразу же
  "fakeSubmit": true, // не делать запрос на сервер при сохранении формы
});
```

### Встраиваемая форма
Расположите на странице тег с атрибутом `[data-sendsay-form-embedded="{login}/{formId}"]`, где `login`- аккаунт, `formId` - `Id` формы, например `449`.

### Триггеры
Все триггеры активные одновременно.

- **click**

Есть click-триггер по-умолчанию с атрибутом `[data-sendsay-form-subscribe]`. Можно сразу добавлять dom узлам на странице этот атрибут

- **scroll**

Срабатывает, если пользователь прокрутил страницу на `options.offset` процентов по вертикали. Если у страницы нет прокрутки, триггер не сработает.

- **timeout**

Срабатывает через `options.timeout` миллисекунд после загрузки страницы.

- **instant**

Срабатывает сразу же, как только страница загрузится. 

- **leave**

Срабатывает при уходе со страницы


## API

### Активация формы на странице

```js
window.SENDSAY.activatePopup( /* url формы - https://sendsay.ru/form/{login}/{id} */ ); // инициализировать форму

window.SENDSAY.showPopup({ /* объект формы */ }, { /* дополнительные настройки */ }); // показать форму подписки Sendsay
```

### Деактивация формы

```js
const form = await SENDSAY.activatePopup("https://sendsay.ru/form/codeception/445/");
...
form.stopWatcher();
...
form.runWatcher();
```

License
=
Private
