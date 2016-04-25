import {Text} from "src/classes/Text.js";
var dom = new Text({"type":"text","text":"<b>Form title</b>", "align": "left"}, null);

console.log(dom.makeStyles());

describe("Text.spec.js", function() {

    it('Cheking makeStyles' , function() {
        expect(dom.makeStyles()).toEqual({
            "text-align": "left"
        });
    });
});