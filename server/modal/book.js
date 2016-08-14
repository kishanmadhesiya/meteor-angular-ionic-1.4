Meteor.methods({
    bookOrder(name,mobile,quantity,item,remarks){
        OrderBook.insert({
            orderby:name,
            mobile:mobile,
            item:item,
            quantity:quantity,
            remarks:remarks,
            userby:Meteor.userId(),
            status:"process",
            timestamp:new Date()
        });
        return returnSuccess("Booked Successfully");
    },
    cancelOrder(orderid){
        OrderBook.update({_id:orderid},{$set:{status:"cancel"}});
        return returnSuccess("Successfully Cancelled");
    }
})
