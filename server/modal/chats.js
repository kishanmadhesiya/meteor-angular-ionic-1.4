Meteor.methods({
 newMessage(message) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to send message.');
    }

    const messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  },
  updateName(name) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his name.');
    }

    check(name, String);

    if (name.length === 0) {
      throw Meteor.Error('name-required', 'Must provide a user name');
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
  },
  newChat(otherId) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to create a chat.');
    }

    const otherUser = Meteor.users.findOne(otherId);

    if (!otherUser) {
      throw new Meteor.Error('user-not-exists',
        'Chat\'s user not exists');
    }

    const chat = {
      userId_from: this.userId,
      userId_to: otherId,
      createdAt: new Date()
    };
       if(Chats.find({userId_from:this.userId,userId_to: otherId}).fetch().length > 0){
           return returnSuccess(Chats.findOne({userId_from:this.userId,userId_to: otherId})._id);
       }else if(Chats.find({userId_from:otherId,userId_to: this.userId}).fetch().length >0){
            return returnSuccess(Chats.findOne({userId_from:otherId,userId_to: this.userId})._id);
       }else{
          const chatId = Chats.insert(chat);
        return returnSuccess(chatId);
       }
    
  },
  removeChat(chatId) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to create a chat.');
    }

    check(chatId, String);

    const chat = Chats.findOne(chatId);

    if (!chat || !_.include(chat.userIds, this.userId)) {
      throw new Meteor.Error('chat-not-exists',
        'Chat not exists');
    }

    Messages.remove({ chatId: chatId });

    return Chats.remove({ _id: chatId });
  },
  updatePicture(data) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his picture.');
    }

    check(data, String);

    return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });
  }
});