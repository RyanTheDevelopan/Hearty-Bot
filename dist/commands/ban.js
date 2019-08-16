"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class kicc {
    constructor() {
        this._command = "ban";
    }
    help() {
        return "Sorry, but it's time to ban.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;
        msgObject.delete(0);
        if (!msgObject.member.hasPermission("BAN_MEMBERS")) {
            msgObject.channel.send(`${msgObject.author.toString()}
https://cdn.discordapp.com/attachments/532701026042511362/578345738795352074/undertale_box_stack.png`);
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`${msgObject.author.toString()}
https://cdn.discordapp.com/attachments/532701026042511362/578347384568938496/undertale_box_stack.png`);
            return;
        }
        msgObject.guild.member(mentionedUser).ban(banLog)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = kicc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQW9DakMsQ0FBQztJQWpDRCxJQUFJO1FBRUEsT0FBTyw4QkFBOEIsQ0FBQztJQUMxQyxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRSxDQUFDO1FBRS9ELFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFDO1lBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7cUdBQ2dDLENBQUMsQ0FBQztZQUN2RixPQUFPO1NBQ1Y7UUFFRCxJQUFHLENBQUMsYUFBYSxFQUNqQjtZQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7cUdBQ2dDLENBQUMsQ0FBQztZQUN2RixPQUFPO1NBQ1Y7UUFFRCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQztDQUNKO0FBdENMLHVCQXNDSyJ9