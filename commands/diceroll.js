"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class diceroll {
    constructor() {
        this._command = "diceroll";
    }
    help() {
        return "Roll a die!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var roll = Math.floor(Math.random() * 6) + 1;
        msgObject.reply(`https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DCongrats%252C%2520you%2520rolled%2520a...%250A...%250A...%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3D...%250A...%250A...%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FI6lrWjc.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png`);
        msgObject.channel.send(`..${roll}!`);
    }
}
exports.default = diceroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljZXJvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZGljZXJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUFrQnRDLENBQUM7SUFmRCxJQUFJO1FBRUEsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLEtBQUssQ0FBQyw4bkJBQThuQixDQUFDLENBQUM7UUFDaHBCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFwQkwsMkJBb0JLIn0=