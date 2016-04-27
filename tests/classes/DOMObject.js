import {DOMObject} from "src/classes/DOMObject.js";



describe("DOMObject.spec.js", function() {
	it('Cheking render' , function() {
    	var dom = new DOMObject({ "type":"text",
                                  "text":"<b>Form title</b>", 
                                  "align": "left"});
        dom.render();
    });
    it('Cheking makeStyles' , function() {
    	var dom = new DOMObject({"type":"text",
                                 "text":"<b>Form title</b>", 
                                 "align": "left",
                                 "param1": 200,
                                 "param2": "test"
                                });
        dom.applicableStyles = {
            'converted1': { param: 'param1', postfix: 'px'},
            'converted2': { param: 'param2'},
            'converted3': { param: 'param3', default: 'test3'},
            'converted4': { param: 'param4'}
        }
        expect(dom.makeStyles()).toEqual({
            'converted1': '200px',
            'converted2': 'test',
            'converted3': 'test3'
        });
    });

    it('Cheking applyStyles with all types of params' , function() {
        var dom = new DOMObject({
                                 "param1": 200,
                                 "param2": "test"
                                });
        var applicableStyles = {
            'converted1': { param: 'param1', postfix: 'px'},
            'converted2': { param: 'param2'},
            'converted3': { param: 'param3', default: 'test3'},
            'converted4': { param: 'param4'}
        }
        expect(dom.applyStyles(applicableStyles)).toEqual({
            'converted1': '200px',
            'converted2': 'test',
            'converted3': 'test3'
        });
    });

    it('Cheking applyStyles without params' , function() {
        var dom = new DOMObject({
                                 "param1": 200,
                                 "param2": "test"
                                });

        expect(dom.applyStyles()).toEqual({

        });
    });

    it('Cheking convertStyles without params' , function() {
        var dom = new DOMObject({
                                 "param1": 200,
                                 "param2": "test"
                                });
        var applicableStyles = {
            'converted1': { param: 'param1', postfix: 'px'},
            'converted2': { param: 'param2'},
            'converted3': { param: 'param3', default: 'test3'},
            'converted4': { param: 'param4'}
        };
        var style = {
            style1: 'test1',
            style2: 'test2'
        };

        expect(dom.convertStyles(style)).toEqual(' style1:test1; style2:test2;');
    });
});