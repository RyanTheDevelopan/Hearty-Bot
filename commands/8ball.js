"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "8ball";
    }
    help() {
        return "Use the 8ball";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var fortunes = [
            "https://demirramon.com/gen/undertale_text_box.png?text=Yes.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FRFeNwXy.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=No.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FLMlURpT.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=Maybe%20so%3F&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FAl1b5m5.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=I%20don%27t%20know.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FQYJgxpG.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=Stop.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FZNNKR2N.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=.%20.%20.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2F2cJzmnw.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=Seriously%2C%20stop.%20You%27re%20starting%20to%20color%3Dred%20piss%20me%20off%20color%3Dwhite%20text%3Djoin%20.&box=underfell&boxcolor=underfell&character=custom&url=https%3A%2F%2Fi.imgur.com%2FkvprNQR.png&charcolor=white&font=determination&asterisk=true&mode=regular.png"
        ];
        if (args[1])
            msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DSorry%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FcRN30Ns.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3DBut%2520I%2520can%2527t%2520seem%2520to%2520answer%2520the%2520posted%2520question%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252Fn1b2i5u.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box3=text%3DProbably%2520try%2520asking%2520an%2520actual%2520question.%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUE0Qm5DLENBQUM7SUF6QkQsSUFBSTtRQUVBLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxRQUFRLEdBQUc7WUFDWCx5TkFBeU47WUFDek4sd05BQXdOO1lBQ3hOLGtPQUFrTztZQUNsTyx3T0FBd087WUFDeE8sME5BQTBOO1lBQzFOLDhOQUE4TjtZQUM5TiwwVUFBMFU7U0FDN1UsQ0FBQztRQUdGLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN0RixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw0N0JBQTQ3QixDQUFDLENBQUM7SUFDbCtCLENBQUM7Q0FFSjtBQTlCTCw4QkE4QksifQ==