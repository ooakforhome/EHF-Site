var userSchema = mongoose.Schema({
    nickname: String,
    name: String,
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}]
});

var friendSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    addTime: Date
});

var User = mongoose.Model('User', userSchema);
var Friend = mongoose.Model('Friend', friendSchema)

//--------------------------
User.find().populate('friends').exec(function(err, users) {
    if (err) throw err;

    var adTimes = [];
    users.forEach(function(user) {
        user.friends.forEach(function(friend) {
            adTimes.push(friend.adTime);
        });
    });

    response.send(adTimes); // adTimes should contain all addTimes from his friends
});
