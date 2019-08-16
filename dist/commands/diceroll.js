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
        msgObject.reply(`https://cdn.discordapp.com/attachments/532701026042511362/579403020140281879/undertale_box_stack.png`);
        msgObject.channel.send(`..${roll}!`);
    }
}
exports.default = diceroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljZXJvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZGljZXJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUFrQnRDLENBQUM7SUFmRCxJQUFJO1FBRUEsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxzR0FBc0csQ0FBQyxDQUFDO1FBQ3hILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFwQkwsMkJBb0JLIn0=