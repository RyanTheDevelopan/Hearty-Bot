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
            msgObject.channel.send(`${msgObject.author.toString()}
                https://cdn.discordapp.com/attachments/532701026042511362/578671231260295178/undertale_box_stack.png`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        if (!args[0]) {
            msgObject.channel.send(`${msgObject.author.toString()}
https://cdn.discordapp.com/attachments/532701026042511362/578671807016468490/undertale_box_stack.png`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        let numberOfMessagesToDelete = Number(args[0]);
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`${msgObject.author.toString()}
https://cdn.discordapp.com/attachments/532701026042511362/578671807016468490/undertale_box_stack.png`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUEyRG5DLENBQUM7SUF4REQsSUFBSTtRQUVBLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFHbkIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQ3JEO1lBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtxSEFDZ0QsQ0FBQztpQkFDakcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNkO1FBR0QsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQztZQUNSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7cUdBQ2dDLENBQUM7aUJBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87U0FDVjtRQUdELElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRy9DLElBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQ2xDO1lBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtxR0FDZ0MsQ0FBQztpQkFDckYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBSUQsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBR2hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO2FBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBN0RMLHdCQTZESyJ9