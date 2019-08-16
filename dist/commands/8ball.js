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
            "https://cdn.discordapp.com/attachments/532701026042511362/579410550992142346/undertale_text_box.gif",
            "https://cdn.discordapp.com/attachments/532701026042511362/579410819222208522/undertale_text_box.gif",
            "https://cdn.discordapp.com/attachments/532701026042511362/579411184311336961/undertale_text_box.gif",
            "https://cdn.discordapp.com/attachments/532701026042511362/579411553988640820/undertale_text_box.gif",
            "https://cdn.discordapp.com/attachments/532701026042511362/579411792971694100/undertale_text_box.gif",
            "https://cdn.discordapp.com/attachments/532701026042511362/579412206953955328/undertale_text_box.gif",
            "https://cdn.discordapp.com/attachments/532701026042511362/579412743589986304/undertale_text_box.gif"
        ];
        if (args[1])
            msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else
            msgObject.channel.send("https://cdn.discordapp.com/attachments/532701026042511362/579410083943940116/undertale_box_stack.png");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUE0Qm5DLENBQUM7SUF6QkQsSUFBSTtRQUVBLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxRQUFRLEdBQUc7WUFDWCxxR0FBcUc7WUFDckcscUdBQXFHO1lBQ3JHLHFHQUFxRztZQUNyRyxxR0FBcUc7WUFDckcscUdBQXFHO1lBQ3JHLHFHQUFxRztZQUNyRyxxR0FBcUc7U0FDeEcsQ0FBQztRQUdGLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN0RixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzR0FBc0csQ0FBQyxDQUFDO0lBQ3hJLENBQUM7Q0FFSjtBQTlCTCw4QkE4QksifQ==