"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "Sorry, but this is for purging";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete();
        if (!msgObject.member.hasPermission("MANAGE_MESSAGES")) {
            msgObject.channel.send(`${msgObject.author.toString()}`);
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DSorry%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FcRN30Ns.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3DBut%2520you%2520don%2527t%2520seem%2520to%2520have%2520the%2520%2522Manage%2520Messages%2522%2520permission.%2520%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252Fn1b2i5u.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box3=text%3DTry%2520again%2520once%2520you%2520have%2520said%2520perm%252C%2520alright%253F%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png")
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        if (!args[0]) {
            msgObject.channel.send(`${msgObject.author.toString()}`);
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DSorry%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FcRN30Ns.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3DBut%2520you%2520didn%2527t%2520say%2520how%2520many%2520messages%2520you%2520want%2520me%2520to%2520delete.%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252Fn1b2i5u.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box3=text%3DTry%2520adding%2520the%2520color%253Dyellow%2520%2523%2520of%2520messages%2520color%253Dwhite%2520you%2520want%2520me%2520to%2520delete%2520next%2520time%252C%2520ok%253F%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png")
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        let numberOfMessagesToDelete = Number(args[0]);
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`${msgObject.author.toString()}`);
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DSorry%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FcRN30Ns.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3DBut%2520that%2520isn%2527t%2520a%2520valid%2520number.%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252Fn1b2i5u.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box3=text%3DTry%2520using%2520an%2520color%253Dyellow%2520actual%2520number%2520color%253Dwhite%2520next%2520time%252C%2520alright%253F%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png")
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
        msgObject.delete(0);
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUE0RG5DLENBQUM7SUF6REQsSUFBSTtRQUVBLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFHbkIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQ3JEO1lBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUN4RCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQywrK0JBQSsrQixDQUFDO2lCQUN0Z0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNkO1FBR0QsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQztZQUNSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDeEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsb2tDQUFva0MsQ0FBQztpQkFDL2xDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87U0FDVjtRQUdELElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRy9DLElBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQ2xDO1lBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUN4RCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnK0JBQWcrQixDQUFDO2lCQUMzL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBSUQsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBR2hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO2FBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUE5REwsd0JBOERLIn0=