/**
 * @autor isdarka
 * @created Dec 23, 2013, 3:26:42 PM
 * 
 */

function UserCollection()
{
}

UserCollection.prototype = new Collection();
UserCollection.prototype.constructor = UserCollection;

/**
 * @param {User} user
 */
UserCollection.prototype.append = function(user)
{
	try{
		if (user instanceof User) {
			this.storage[user.getIndex()] = user;
		} else {
			throw "user must be an instanceof User";
		}
	}catch(e){
		throw e;
	}
};