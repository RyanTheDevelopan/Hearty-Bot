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
            msgObject.channel.send(`${msgObject.author.toString()}`);
            msgObject.channel.sendFile(`https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DSorry%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FcRN30Ns.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3DBut%2520you%2520don%2527t%2520have%2520the%2520%2522Ban%2520Members%2522%2520permission.%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252Fn1b2i5u.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box3=text%3DTry%2520again%2520once%2520you%2520have%2520said%2520perm%252C%2520alright%253F%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png`);
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`${msgObject.author.toString()}`);
            msgObject.channel.sendFile(`https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DSorry%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FcRN30Ns.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3DBut%2520you%2520didn%2527t%2520%2540mention%2520the%2520member%2520you%2520wanted%2520to%2520ban.%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252Fn1b2i5u.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box3=text%3DTry%2520doing%2520so%2520next%2520time%252C%2520alright%253F%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png`);
            return;
        }
        msgObject.guild.member(mentionedUser).ban(banLog)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = kicc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQW9DakMsQ0FBQztJQWpDRCxJQUFJO1FBRUEsT0FBTyw4QkFBOEIsQ0FBQztJQUMxQyxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRSxDQUFDO1FBRS9ELFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFDO1lBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsczlCQUFzOUIsQ0FBQyxDQUFDO1lBQ24vQixPQUFPO1NBQ1Y7UUFFRCxJQUFHLENBQUMsYUFBYSxFQUNqQjtZQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsNDhCQUE0OEIsQ0FBQyxDQUFDO1lBQ3orQixPQUFPO1NBQ1Y7UUFFRCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQztDQUNKO0FBdENMLHVCQXNDSyJ9